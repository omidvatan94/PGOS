# PGOS

PGOS is a frontend and backend application designed for managing orders for Perfectly Ground pre-packaged coffee. The frontend and backend can be found in their respective directories within this repository, and this README will go over architecture and installation instructions to run this app on your local environment. 

# PGOS: The Back End

This Rails app was designed to handle the database and API for PGOS, a system designed to house a list of work orders for Perfectly Ground Coffee, and for creating new work orders

## Contents

- [Essential Gems](#essentual-gmes)
- [Installation](#installation)
- [Testing](#testing)
- [Models](#models)
- [Trade Offs](#trade-offs)
- [Future Development](#future-development-and-deployment)

## Essential Gems

This app was created by running ```rails new pgos-backend --api --database=postgresql```, which prepared the application to perform as an API and to be configured for postgreSQL databases. `rack-cors` is used to allow Cross-Origin Resource Sharing, making cross-origin requests possible. The `gaurd-rspec` gem allows for the `rspec` test suite to be run automatically during development.

## Installation

To get started with this application, fork and clone the respository to your hard drive. ```CD``` into the project folder and run ```bundle install```. Once the gems have been installed, run ```rake db:setup``` to establish the database. Make sure you have [postgreSQL](https://postgresapp.com/) installed and already running. Run ```rails start``` once the database has been set up to host the backend on your local server.

## Testing

This app's tests are written with rspec and the test suite can be run by running ```rspec```. In development, if you wish to run the test suite automatically, run ```guard```. The ``guard-rspec`` gem allows for the test suite to run automatically whenever the files being watched are saved.

## Models

There is one model that PGOS utilizes:


### Order

The ```Order``` model handles the main functionality of our app, which is to view lists of all instances of Orders and to create new ones. The Order model creates new instances of work orders based on user input on the frontend, and will successful create an instance of an Order once all validations are passed.

## Trade offs

Although MySQL is simple and easy to use, postgreSQL allows for deployment of the app to heroku, which allows it ot be run on servers other than the local server. Secondly, Rails can render views for our app based on controller actions, but our app will behave as an API and will require requests from a frontend to which it will render JSON. Although rendering views through rails could be sufficient to meet the deliverables of this project, having a React front end will allow for a more dynamic UI, file structure organization, and overall, harnessing the power of React.

## Future Development and Deployment

### Secure Login

Adding password encryption, getting an SSL certificate, and handling sessions with JSON Web Tokens is the next feature to be implemented. This would also require the creation of a more complex relationship structure with a model for Users and a join table.

### Deployment

Download Heroku CLI if you have not already by running ```brew tap heroku/brew && brew install heroku```

Then, run ```heroku login``` which will prompt you to enter your credentials, which will be saved for future use.
``git init
git add .
git commit -m "init"
heroku create
git push heroku master
heroku run rake db:migrate
heroku open``

Once this app is deployed and is not being run on the local host, the URLs of the fetch requests localed in the frontend must be changed to accomodate requests to heroku server. Change "http://localhost:3000/api/v1/orders" to "https://pgos-bac-end.herokuapp.com/api/v1/orders/"

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
To get started with PGOS, fork this repository and clone it to your hard drive. CD into the folder and run ```npm install```. Once the dependencies have been installed, you can run ```npm start``` to get your app running. Your locally-hosted version of the app, like the live version, will receive information from a Ruby on Rails backend hosted at localhost:3000.

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

`cd pgos-frontend
git init
heroku create pgos-frontend --buildpack mars/create-react-app
git add .
git commit -m "Start with create-react-app"
git push heroku master
heroku open``

Here, heroku will go through the build process with you and install npm, node, and yarn, as well as any other packages. Note: If the backend of the project has been deployed to heroku, the fetch requests in this app must have their URLs changed to accomodate fetching from heroku server instead of local server. Change "http://localhost:3000/api/v1/orders" to "https://pgos-bac-end.herokuapp.com/api/v1/orders/"
