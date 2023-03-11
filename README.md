
<h1 align="center"> Get Cookin </h1>
<h3 align="center"> A recipe-finding web app designed for mobile phones </h3> <br>

![login](https://user-images.githubusercontent.com/36552486/224495383-f33e9a99-f736-4de9-85b6-5392f2d551f6.gif)
![search](https://user-images.githubusercontent.com/36552486/224505807-47540f89-0e3e-475b-97b1-143f8e5e58bc.gif)


## Table of Contents

- [Introduction](#introduction)
  - [Built With](#built-with)
- [Features](#features)
  - [Recipe Search](#recipe-search)
  - [Profile Page](#profile-page)
  - [Save Recipes](#save-recipes)
  - [Authorization](#authorization)
  - [Back End](#back-end)
- [Feedback](#feedback)
- [Contributors](#contributors)
- [Build Process](#build-process)
- [Backers](#backers)
- [Sponsors](#sponsors)
- [Acknowledgments](#acknowledgments)


## Introduction

The goal of Get Cookin is to make delicious recipes available for everyone!  The app allows you to find recipes using ingredients you have at home; think of it as a digital recipe book.  Get Cookin is targeted towards people learning to cook and people who want to eat healthier/eat at home.  So go take a look in your fridge and Get Cookin!


### Built With

- Authorization: 

    <img src="https://user-images.githubusercontent.com/118213399/224507614-d14f07e1-3eaf-407f-afcc-ed4e86c7a573.png" width=30px height=30px>
    **JSON Web Tokens**
    
- Front End:

    <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" width=30px height=30px> **React**

- Back End:

   <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" width=30px height=30px> **NodeJs**

   <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png" width=30px height=30px> **Express**

   <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png" width=30px height=30px> **PostgreSQL**
   
   


## Features

Here are some of the features of Get Cookin:

### Recipe Search

The user is able to search by ingredient and exclude search results by filter. As the user types into the search input or filter input, a useEffect is activated which kicks off a 300ms setTimeout. This setTimeout debounces every time a key is typed, and it if it hits zero the useEffect makes an axios request to the server, which in turn makes an axios request to the Edamam Food API. The resulting response is used to populate the auto-complete functionality on the ingredient search and filter inputs.

When the user hits the 'Search' button, an axios request is sent to the server, which in turn requests the Edamam Recipe API using the search and filter parameters sent along. Before this happens, the user preferences are added to the request as query params. The resulting response is used to populate the recipe card list on the search view.

### Profile Page

The profile page shows the account information like name, email and password, dietary restriction information as well as list of recently visited recipes. The dietary restriction section has a save to profile button which saves any restriction choices made in the checkbox format. There is also a add more restrictions section as well which gives user option to add more restriction.

### Save Recipes

A user is able to save recipes by clicking on the "Save Recipe" button on any recipe card.  The saved recipes are stored on the "Saved Recipes" page.  Clicking on any of the saved recipes will send the user to the specific recipe website.

### Authorization



### Back End

## Feedback

We can delete this if we don't want to use it.

## Contributors

Please visit our contributors pages on GitHub:

[Nathan Love](https://github.com/nathanKimbleLove) <br>
[Andrew Sittner](https://github.com/andrewsittner) <br>
[Deirdre Loyall](https://github.com/dirtOval) <br>
[Robin Kim](https://github.com/robin1004) <br>
[Bryce Anderson](https://github.com/abanderson3) <br>
[Sajana Balal](https://github.com/SajanaB) <br>
[Paul Koski](https://github.com/pwkoski)


## Build Process

- Clone or download the repo
- Install PostgreSQL and create a database to store user and recipe info
- Navigate to the database folder in the repo and run `psql -U yourUsername -d yourDatabase -f "schema.sql"`
- Sign up for Food Database and Recipe Search APIs
- Create a .env file in the root directory of the repo and input the following:
  - `JWT_SECRET='use Node.js crypto function to generate a 64bit key'`
  - `FOOD_ID=yourFoodID`
  - `FOOD_KEY=yourFoodKey`
  - `RECIPE_ID=yourRecipeID`
  - `RECIPE_KEY=yourRecipeKey`
  - `API_URL="https://api.edamam.com/search?app_id=RECIPE_ID&app_key=RECIPE_KEY"`
  - `AUTOCOMPLETE_API_URL='https://api.edamam.com/auto-complete?app_id=FOOD_ID&app_key=FOOD_KEY'`
- `npm install` to install dependencies
- `npm run build` to build the front end
- `npm run serve` to start the server and connect to the database
- Navigate to `http://localhost:3000` to start the app!


## Backers

We can delete this if we don't want to use it.

## Sponsors

We can delete this if we don't want to use it.

## Acknowledgments

- Thanks to Sue Shef for her support and financial backing!
- Made with [Edamam](https://edamam.com)
