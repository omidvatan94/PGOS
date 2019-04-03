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

To get started with this application, clone the respository to your hard drive. ```CD``` into the project folder ```pgos-backend``` and run ```bundle install```. Once the gems have been installed, run ```rake db:setup``` to establish the database. Make sure you have [postgreSQL](https://postgresapp.com/) installed and already running. Run ```rails start``` once the database has been set up to host the backend on your local server.

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

```git init
git add .
git commit -m "init"
heroku create
git push heroku master
heroku run rake db:migrate
heroku open```

Once this app is deployed and is not being run on the local host, the URLs of the fetch requests localed in the frontend must be changed to accomodate requests to heroku server. Change "http://localhost:3000/api/v1/orders" to "https://pgos-bac-end.herokuapp.com/api/v1/orders/"
