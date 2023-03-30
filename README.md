# Olio Takehome Task

This is a little react app which displays a list of articles fetched on load, with a simple detail view. It was bootstrapped using create-react-app.

## Getting Started

### Prerequisites

In order to run this project, you must first have Node and yarn installed.

This app displays a google map element, so you will need a google maps API key to view it in your browser. Instructions on how to get one of those for yourself can be found [here](https://developers.google.com/maps/documentation/javascript/get-api-key)


### Setup

Create a `.env.local` file in the root of your project, and place your Google maps API key here, under the key `REACT_APP_GOOGLEMAPS_API_KEY`, there is an example file in the project called `.env.example`


### Installation

Ensuring that you're in the project directory, run

`$ yarn` 

to install the project dependencies.


### Running locally

In the project directory, you can run:

` $ yarn start`

Which runs the app in the development mode.\
whereupon you can open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make any edits.

### Tests

You can also run

`$ yarn test`

Which will launch the test runner in watch mode.
