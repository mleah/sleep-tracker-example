# Sleep Tracker Example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and initialized with Typescript.  
  
This app also uses [express.js](https://expressjs.com/) to create a test server.

## Setup

Clone the project via your preferred github method.  Navigate to the project directory and install the necessary packages via `npm`.

```cd sleep-tracker-example```  
```npm install && npm run serverSetup```  
  
Note: This installs packages for both the React FE app, and the express server.

## Development

To run the app in development mode, you will need two terminal windows - one to run the FE and one to run the MW/server.

The app has the following commands:

#### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

#### `npm run server`

Runs the test server.  
The server runs at [http://localhost:5000](http://localhost:5000).  
The server does not have live reloading - you will need to stop the server manually and restart if you make changes.  
The frontend is proxied to use port 5000 in the `package.json` file.

#### `npm test`

Launches the test runner in the interactive watch mode.
This sample app has a few tests to run!

## Further directions

My overall approach to this problem was to start with many base features included in React (fetch, useState for state, no UI/component libraries, etc.), and refactor as time was available.  
The code currently isn't utilizing many libraries (beyond what is included in create-react-app and express).  There are a few areas of improvement I would work on if I had more time.

These improvements are listed below, in no specific order:

UI/UX improvements:
* Update the options in the dropdown to format as "XX hours YY minutes" instead of "XX.X hours"
* Update styling
* Utilize a UI library (like MUI), or CSS framework (like Tailwind), depending on the customization of themes

Architecture/Code improvements:
* ~~Extract the duplicated `select` components into a reusable component~~  Completed in time!
* Utilize a library for `fetch`ing (axios, hooks for fetching, etc.)
* As the app grows, include a state management system (I am particular to [redux](https://redux.js.org/) for overall app state, and the build in Context for smaller component state management)
* Only allow a POST to the `/sleepscore` endpoint when a correctly formatted body is included in the request

ToDos in code:
* There is a bug in the options that shows "1 hours" instead of "1 hour" due to my current approach
* Handling of edge cases in the "calculateSleepScore" function

  
  

#### Additional information from Create React App bootstrap

The following information was included in the bootstrapped app README, courtesy of  [Create React App](https://github.com/facebook/create-react-app).

#### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

##### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
