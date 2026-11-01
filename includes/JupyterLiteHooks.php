<?php
/**
 * @file
 * @ingroup Extensions
 */

namespace MediaWiki\Extension\JupyterLite;

use Config;
use OutputPage;
use Skin;

class JupyterLiteHooks {

	/**
	 * Load the launcher for users who may use the sandbox.
	 *
	 * The module only provides the open helpers; nothing is rendered until something
	 * calls them, so this costs an entitled user one small script and everyone else
	 * nothing.
	 */
	public static function onBeforePageDisplay( OutputPage $out, Skin $skin ): void {
		$config = $out->getConfig();
		if ( !$config->get( 'JupyterLiteEnabled' ) ) {
			return;
		}
		if ( !$out->getAuthority()->isAllowed( 'jupyterlite-use' ) ) {
			return;
		}
		$out->addModules( 'ext.osw.ui.jupyterlite' );
	}

	/**
	 * The base path is needed to build a launch url, and it is not a secret.
	 *
	 * The agent configuration deliberately does *not* go here: this ends up in cached
	 * page output, and the lab page is static html that never reads mw.config anyway.
	 * It is fetched per-user from action=jupyterliteconfig instead.
	 */
	public static function onResourceLoaderGetConfigVars( array &$vars, $skin, Config $config ): void {
		if ( !$config->get( 'JupyterLiteEnabled' ) ) {
			return;
		}
		$vars['wgJupyterLiteBasePath'] = $config->get( 'JupyterLiteBasePath' );
	}
}
