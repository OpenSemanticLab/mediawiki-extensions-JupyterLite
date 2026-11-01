/**
 * Launcher for the JupyterLite sandbox.
 *
 * The sandbox is served from this wiki's own origin, which is what lets the in-browser
 * Python kernel talk to the wiki API with the reader's existing session instead of a
 * credential. The flip side is that a notebook opened there runs with that user's
 * rights, so a link that opens one is a link that can write to the wiki as them. The
 * allowlist below is the control for that, not a nicety.
 */
( function () {
	'use strict';

	var BASE = mw.config.get( 'wgJupyterLiteBasePath' );

	/**
	 * Only wiki-hosted files may be loaded into the sandbox.
	 *
	 * `?fromURL=` is implemented by jupyterlab-open-url-parameter and fetches whatever
	 * it is given. Left open it is a content-injection sink aimed at our own origin, so
	 * a url is accepted only when it is same-origin and under img_auth.php - which is
	 * also the only way uploaded files are served here ($wgUploadPath).
	 *
	 * This is the first of two checks. It cannot be the only one: a crafted link goes
	 * straight to the lab and never runs this code, so the labextension enforces the
	 * same rule on the way in. Keep the two in step.
	 *
	 * @param {string} url
	 * @return {string|null} the url if allowed, else null
	 */
	function allowedFileUrl( url ) {
		var parsed;
		try {
			parsed = new URL( url, window.location.href );
		} catch ( e ) {
			return null;
		}
		if ( parsed.origin !== window.location.origin ) {
			return null;
		}
		var prefix = mw.config.get( 'wgScriptPath' ) + '/img_auth.php/';
		if ( parsed.pathname.indexOf( prefix ) !== 0 ) {
			return null;
		}
		return parsed.href;
	}

	/**
	 * Build the url of the lab, optionally with files to open.
	 *
	 * @param {Object} [options]
	 * @param {string|string[]} [options.fromURL] wiki file url(s) to load
	 * @param {string} [options.toFolder] where to put them on the contents drive
	 * @return {string}
	 */
	function labUrl( options ) {
		options = options || {};
		var url = new URL( BASE + 'lab/index.html', window.location.href );

		var files = options.fromURL || [];
		if ( typeof files === 'string' ) {
			files = [ files ];
		}
		files.forEach( function ( candidate ) {
			var allowed = allowedFileUrl( candidate );
			if ( allowed === null ) {
				// Dropped rather than thrown: opening the sandbox empty is a better
				// outcome than refusing to open it, and the console says why.
				mw.log.warn( '[jupyterlite] refusing to load a url outside img_auth.php:', candidate );
				return;
			}
			url.searchParams.append( 'fromURL', allowed );
		} );
		if ( options.toFolder ) {
			url.searchParams.set( 'fromURLToFolder', options.toFolder );
		}
		return url.href;
	}

	/**
	 * Open the sandbox in its own tab.
	 *
	 * A tab rather than a dialog: the kernel keeps running while the user reads the
	 * wiki, and a cold start is slow enough that throwing it away on navigation would
	 * be felt. The handle is reused so a second call focuses the existing sandbox
	 * rather than booting a second kernel.
	 *
	 * @param {Object} [options] see labUrl
	 * @return {Window|null} null if the browser blocked the popup
	 */
	var handle = null;
	function open( options ) {
		var url = labUrl( options );
		if ( handle && !handle.closed ) {
			handle.location = url;
			handle.focus();
			return handle;
		}
		handle = window.open( url, 'osw_jupyterlite' );
		if ( !handle ) {
			mw.log.warn( '[jupyterlite] the browser blocked the sandbox window' );
		}
		return handle;
	}

	mw.osw = mw.osw || {};
	mw.osw.jupyterlite = {
		basePath: BASE,
		labUrl: labUrl,
		open: open,
		// Exported for the tests and for callers that want to check before offering a
		// link rather than after the user clicks it.
		allowedFileUrl: allowedFileUrl
	};
}() );
