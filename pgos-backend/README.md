# PGOS: The Back End

This Rails app was deisgned to handle the database and API for PGOS, a system designed to house a list of work orders for Perfectly Ground Coffee, and for creating new work orders

## Contents

- [Essential Gems](#essentual-gmes)
- [Installation](#installation)
- [Testing](#testing)
- [Models](#models)
- [Future Development](#future-development-and-deployment)

## Essential Gems

This app was created by running ```rails new pgos-backend --api --database=postgresql```, which prepared the application to perform as an API and to be configured for postgreSQL databases. `rack-cors` is used to allow Cross-Origin Resource Sharing, making cross-origin requests possible. The `gaurd-rspec` gem allows for the `rspec` test suite to be run automatically during development.

## Installation

To get started with this application, fork and clone the respository to your hard drive. ```CD``` into the project folder and run ```bundle install```. Once the gems have been installed, run ```rake db:setup``` to establish the database. Make sure you have [postgreSQL](https://postgresapp.com/) installed and already running. Run ```rails start``` once the database has been set up to host the backend on your local server.

## Testing

This app's tests are run with rspec. In order to run the test suite, run ```rspec```. In development, if you wish to run the test suite automatically, run ```guard```. The ``guard-rspec`` gem allows for the test suite to run automatically whenever the files being watched are saved.

## Models

There is one model that PGOS utilizes:


### Order

The ```Order``` model handles the main functionality of our app, which is to view lists of all instances of Orders and to create new ones. The Order model creates new instances of work orders based on user input on the frontend, and will successful create an instance of an Order once all validations are passed.

## Future Development and Deployment

### Secure Login

Adding password encryption, getting an SSL certificate, and handling sessions with JSON Web Tokens is the next feature to be implimented.

### Deployment

```git init
git add .
git commit -m "init"
heroku create
git push heroku master
heroku run rake db:migrate
heroku open```
