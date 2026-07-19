# Static Site Build Process
_Transform source files into a browser-ready preview._

This package contains the source site in [`src/`](./src/) and a small Gulp
build that produces the deployable files in [`dist/`](./dist/).

## Installation

Ensure you have a recent version of [node & npm](https://nodejs.org/en/download/) or [yarn](https://yarnpkg.com/en/docs/install) installed.

All of the following steps run on the command line within this directory. You can substitute `npm` for `yarn` depending on your preferences.

Install all the necessary packages:

```
npm install
```

## Build

To build for distribution:

```
npm run build
```

All of the final output will be dropped into the [/dist/](./dist) folder.

## Server

Run a local server that will automatically compile your code & refresh when you save a change!

```
npm run serve
```

---

## Folder Structure

```
/exported-item/
|-- /build/ - Build scripts
|  |-- gulpfile.js - The tasks for the main build process
|  |-- util.js - Utilities used by the tasks
|
|-- /src/ - Site source
|  |-- index.template.html - The document shell and metadata
|  |-- index.partial.html - The semantic page content
|  |-- style.css - Design tokens, layout, and interaction states
|  |-- /assets/ - Local profile artwork and favicon
|
|-- /dist/ - The compiled output after running `npm run build`
|  |-- index.html
|  |-- style.css
|  |-- /assets/
```