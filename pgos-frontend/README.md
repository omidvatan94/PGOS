# PGOS: The Front End

This React web app was designed to be a responsive front-end used for creating and viewing work orders for Perfectly Ground pre-packaged coffee. Follow the instructions in pgos-backend for hosting the back-end on your local server.  

## Contents

- [Libraries & Middleware](#libraries--middleware)
- [Installation](#installation)
- [Testing](#testing)
- [Structure](#structure)
- [Components](#components)
- [Trade Offs](#trade-offs)
- [Future Development and Deployment](#future-development-and-deployment)

## Libraries & Middleware

PGOS was built using [create-react-app](https://github.com/facebook/create-react-app) and comes with the dependencies therein. [ReactTable](https://www.npmjs.com/package/react-table) is used for rendering the list of work orders from the database into appropriate columns and cells. [React StarRatingComponent](https://github.com/voronianski/react-star-rating-component) is used for rendering star icons next to work orders that have been marked as "Priority". [React Modal](https://reactcommunity.org/react-modal/) handles rendering a Modal that houses the order form for creating new work orders. Style prop allows Modal to transform size to accomodate adding or removing of form elements in the future. [React Moment](https://www.npmjs.com/package/react-moment) manages the display of current date on the home page.

## Installation

  **Ensure you have first visited the pgos-backend directory for instructions to run local server. Ensure you are in this project's backend directory and that you have run ```rails s``` to start local server**
To get started with PGOS, clone this repository to your hard drive. ```CD``` into the folder ```pgos-frontend``` and run ```npm install```. Once the dependencies have been installed, you can run ```npm start``` to get your app running. Your locally-hosted version of the app, like the live version, will receive information from a Ruby on Rails backend hosted at localhost:3000.

## Testing

In development, run ```npm test``` to open the test suite. Any time a file is changed in the src folder, the test suite will run automatically.

## Structure

The top-level folder of PGOS' frontend includes a `public` folder, which holds the `index.html` file where the app is officially rendered by React, an `src` folder which holds the application itself, and then a few other files: the .gitignore, README, and package.json.

The `src` folder includes two main folders: `containers`, and `components` which organizes the bulk of the app's logic and content. Parent elements can be located in the `containers` folder and their Child elements are located in the `containers` folder. This is organized to ensure that as the project grows, components can be organized by their responsibilities. `index.js` handles how the app is mounted into the `index.html` file in the top-level folder.

## Components

PGOS is composed of three main components:

### App

The `App` component houses the entire application. All other components will be rendered within this component. The corresponding .css file in the `App` folder rules all styling within the app. An informational page, `info.js`, is also stored within this folder.

### Header

This component is responsible for the top-panel that appears when the app is rendered. Header is responsible for rendering the current date, and housing the button for launching the Modal necessary for creating a new work order.

### OrderForm

The `OrderForm` component is rendered within a Modal, and is responsible for capturing the necessary data from user input to create a new Order in the database. When the form fields are changed, the state within the component is updated. Upon successful submission of the form, the state within this component is sent in a POST request to our database, creating a new instance of an Order.

## Trade offs

This React app does not implement Redux, or a CSS framework such as bootstrap. This was done in order to accomodate the 8 hour time limit for this project, as well as to manage the limited components needed to meet deliverables. Redux is excellent at managing react apps with many components, and early implementation of redux assists in managing growth of apps. This app is mostly functional and therefore does not feature much in terms of CSS. Instead, table and modal react components are imported to facilitate functionality of app and meet all deliverables.  

## Future Development and Deployment

Some ideas for features to add in the future:

### Creating a View Button for Rendering a Single Work Order.

Currently there are only Creating and Reading actions supported by this app. In order to support Updating and Deleting actions, we would need to be able to isolate and read a single work order, and render it to the window or in another Modal.

### Deployment

Download Heroku CLI if you have not already by running ```brew tap heroku/brew && brew install heroku```

Then, run ```heroku login``` which will prompt you to enter your credentials, which will be saved for future use.

```cd pgos-frontend
git init
heroku create pgos-frontend --buildpack mars/create-react-app
git add .
git commit -m "Start with create-react-app"
git push heroku master
heroku open```

Here, heroku will go through the build process with you and install npm, node, and yarn, as well as any other packages. Note: If the backend of the project has been deployed to heroku, the fetch requests in this app must have their URLs changed to accomodate fetching from heroku server instead of local server. Change "http://localhost:3000/api/v1/orders" to "https://pgos-bac-end.herokuapp.com/api/v1/orders/"
