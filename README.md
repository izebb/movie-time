# React app using viaplay api

Movie listing app using the viaplay API.

## Running application

For a quick view on Desktop not fully responsive yet(screen size  of min-width 1200)

[https://movies-viaplay.herokuapp.com/](https://movies-viaplay.herokuapp.com/)

click on each movie to view the description

## Basic commands

Run app

```bash
npm run app
```

To build and start in production mode

```bash
npm run build:start
```

In Development mode simply run

```bash
npm run start:dev
```

Running test

```bash
npm test
```

Linting

```bash
npm run lint
```

or with fix

```bash
npm run lint:fix
```

In production: [http://localhost:8080](http://localhost:8080)
In development: [http://localhost:3000](http://localhost:3000)

## App overview

The application is broken down in various small components containing styled-components.
The app has a single state container use the `useReducer` from react hooks to management state-> so it is redux-ish:)

server.js: is responsible for proxying every request path starting with `/api` to viaplay api(TO AVOID CORS CONFLICTS). It also serves the static files
