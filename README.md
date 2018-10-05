# create-react-app with api example

An example of using an express API with create-react-app. The key things to do to enable it are:

- Include proxy in the react app's package.json file
- Handle cors at the API (This example is using 'cors' express middleware)

In this example the create-react-app's built-in dev server is used but any hosting server will work with the api as long as the proxy is defined in the client's package.json file.

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
