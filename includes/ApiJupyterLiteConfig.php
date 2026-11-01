<?php
/**
 * Serves the wiki's own defaults to the in-browser agent.
 *
 * The JupyterLite site is a static build: changing which model it talks to would
 * otherwise mean rebuilding and redeploying it. This lets a deployment set that in
 * CustomSettings.php instead, the same place every other per-wiki setting lives.
 *
 * An API module rather than a ResourceLoader config var because the lab page is not a
 * MediaWiki page - it is a static index.html, so it never sees mw.config. It fetches
 * this itself, same-origin, with the user's session.
 *
 * The values here are *defaults*. The labextension applies them only where the user has
 * not already chosen something, so a deployment can retarget new users without
 * overriding the choices existing ones made.
 *
 * @file
 * @ingroup Extensions
 */

namespace MediaWiki\Extension\JupyterLite;

use ApiBase;

class ApiJupyterLiteConfig extends ApiBase {

	public function execute() {
		// Same gate as the launcher. Without it an anonymous visitor could read the
		// deployment's model configuration straight from the API.
		$this->checkUserRightsAny( 'jupyterlite-use' );

		$config = $this->getConfig();
		if ( !$config->get( 'JupyterLiteEnabled' ) ) {
			$this->dieWithError( 'apierror-jupyterlite-disabled', 'disabled' );
		}

		$settings = (array)$config->get( 'JupyterLiteSettings' );

		// Defence in depth against a deployment pasting a key in here anyway. The
		// browser must never hold one: the proxy adds it. Dropping the key is better
		// than serving it, and the agent still works - the proxy is what authenticates.
		foreach ( [ 'apiKey', 'api_key', 'apikey', 'secret', 'token' ] as $forbidden ) {
			unset( $settings[$forbidden] );
		}

		$this->getResult()->addValue( null, $this->getModuleName(), [
			'basePath' => $config->get( 'JupyterLiteBasePath' ),
			'settings' => $settings,
		] );
	}

	public function getAllowedParams() {
		return [];
	}

	public function isReadMode() {
		return true;
	}

	protected function getExamplesMessages() {
		return [
			'action=jupyterliteconfig' => 'apihelp-jupyterliteconfig-example',
		];
	}
}
