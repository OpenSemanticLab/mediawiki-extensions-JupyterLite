# JupyterLite

Serves a [JupyterLite](https://jupyterlite.readthedocs.io/) sandbox from the wiki's own
origin, at `…/w/extensions/JupyterLite/dist/lab/index.html`.

The site itself is built by
[osw-jupyterlite-ai](https://github.com/OpenSemanticLab/osw-jupyterlite-ai) and dropped
into `dist/`; this extension is only the launcher, the per-wiki configuration and the
right that gates them.

## Why same-origin

Because the sandbox is served from the wiki's own origin, the in-browser Python kernel
shares the browser's MediaWiki session. `osw-python` can read and write the wiki with no
credential file, no bot password and no login prompt - requests simply carry the cookie
the user already has.

## What that means, and it is not a footnote

**A notebook opened in the sandbox runs arbitrary Python as the logged-in user.** It can
do anything that user can do, including editing and deleting pages. A link that opens a
notebook is therefore a link that can write to the wiki in the reader's name - closer to
a user script than to a document.

Two controls follow from that, and both are load-bearing:

- **`?fromURL=` is allowlisted to same-origin `img_auth.php` paths.** Unrestricted it
  would pull arbitrary remote content into the wiki's own origin. Enforced in
  `modules/ext.osw.ui.jupyterlite/jupyterlite.js` *and* in the labextension, because a
  crafted link reaches the lab without passing through this extension's JavaScript.
- **Notebooks arriving that way are opened, never run.** The user presses Run.

The `jupyterlite-use` right gates the launcher and the configuration API. It is granted
to `user` by default and not to `*`: an anonymous visitor has no session worth borrowing,
so the sandbox would be useless to them and the surface is better closed.

## Configuration

| | |
| --- | --- |
| `$wgJupyterLiteEnabled` | master switch for the launcher and the config API. The static files are served by the web server regardless. |
| `$wgJupyterLiteBasePath` | where the build is served from. Must stay same-origin with the wiki or the session is not shared and nothing above holds. |
| `$wgJupyterLiteSettings` | defaults for the in-browser agent, e.g. `provider`, `model`, `baseURL`. |

```php
wfLoadExtension( 'JupyterLite' );
$wgJupyterLiteEnabled = true;
$wgJupyterLiteSettings = [
    'provider' => 'azure-foundry-anthropic',
    'model'    => 'claude-sonnet-4-5',
    'baseURL'  => 'https://example.org/llm',
];
```

**Never put an API key in `$wgJupyterLiteSettings`.** It is served to every entitled user
and would land in their browser. The `baseURL` points at a proxy that holds the key
server-side and authenticates the caller by the token the wiki mints. The API module
strips key-shaped fields on the way out, but that is a backstop, not permission.

Settings are applied as *defaults*: a user who has already chosen a provider keeps their
choice, because JupyterLite stores user settings in the browser and they win over
anything shipped with the site.

## For callers

```js
mw.loader.using( 'ext.osw.ui.jupyterlite' ).then( function () {
    mw.osw.jupyterlite.open();                                   // empty sandbox
    mw.osw.jupyterlite.open( { fromURL: fileUrl } );             // with a wiki file
} );
```

`open()` reuses one tab, so a second call focuses the running sandbox instead of booting
a second kernel - a cold start is slow enough to be worth not repeating.
