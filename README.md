# MyReads Project

Myreads App is a book shelf app which allows users to interact with their personal library,
There are three sections for the shelf :

1. Currently Reading
2. Want To Read
3. Read

The three sections are divided as if a user is currently reading a book he/she can put the book in the shelf of currently reading ,if he/she wants to read it later they can put it in want to read shelf and if they already read that book they can put it in read shelf.

For moving the book they have provided a button which includes some option,the button is available below each and every book which allows you to move the book from current shelf to other,In case if a user wants to remove the book from shelf he/she can select "None" option available in button
The button also includes 4 options:

Move To:
1. Currently Reading
2. Want To Read
3. Read
4. None 

There is a search button down below ,by clicking that button a user can move to the search page and be able to search a book which he/she wants to read ,all the books which are available on the search page have button which allows you to move the book in the shelf.


To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

The Project Dependencies include:
PropTypes : npm install --save prop-types
React-Router-DOM : npm install --save react-router-dom


## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML and render method and some function like getting books on shelf from API ,changing shelf function some Route Methods which allow user to explore from one page to the other.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── Books.js # Contains all the code which displays the book as well as the properties of the book and buttons.
    ├── List.js # The code in this file helps in displaying the shelf and function which is allowing to move the book in a specific shelf
    ├── Search.js # Contains the code for searching a query if found that move the book to the specific shelf
   
* There is a backend server BooksAPI which is allowing the app to connect to the server for fetching data etc.


