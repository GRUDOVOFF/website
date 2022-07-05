<p align="center">
 <img src="https://raw.githubusercontent.com/pkosiec/website/main/src/static/img/logo.png" width="75">
</p>

# Paweł Kosiec - Personal Website

This repository contains source code of the Paweł Kosiec's personal website. To see it live, navigate to the [kosiec.dev](https://kosiec.dev) address.

## Development

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
