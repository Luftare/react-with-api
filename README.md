# create-react-app with API

An example of using an express API with create-react-app. What is essentially done:

- include proxy in the react app's package.json file
- handle cors at the API (this example is using 'cors' express middleware)

In this example the create-react-app's built-in dev server is used but any hosting server will work with the API as long as the proxy is defined in the client's package.json file.

## Install

```
npm install
cd client
npm install
```

## Develop

```
npm run dev
```

API is running on port 3001 and the site is hosted on port 3000.
