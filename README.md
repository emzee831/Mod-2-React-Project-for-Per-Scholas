
## Stock Market and Cryptocurrency app/blog using React and Redux.

## Minimum Project Requirements
. Project must be approved by Instructor approval at the start of project week
. Project code is pushed to a public Git repository
. The code should be written in ES6 as much as possible
. Use the create-react-app generator to start your project 
. Makes use of React Router (install react-router-dom), and Redux (install redux react-redux)
. There should be 2 container components 
. There should be 5 stateless components
. There should be 3 or more routes
.The Application must make use of react-router and proper RESTful routing 
.Your client-side application should handle the display of data with minimal data manipulation
. Uses CSS to style your application
. Frontend uses AJAX (fetch) requests 
. Application has at least 2 unique APIs (should be related in some way)
. Has README.md file at the root of repository
. readme file clearly documents the purpose of the project as a problem statement
. readme file clearly documents the target end user for this project

## Libraries used in this project.
Plotly.js
Axios
react-router-dom
Redux
Redux-dev tools-extension


This project is intended for anyone interested in the stock market and cryptocurrency market. To run this application simply run the command npm start on your console and all the dependencies will run that is needed. The two APIs used for this project are newsapi.org and twelvedata.com. The first two pages display the current news in the stock market and cryptocurrency market, along with displaying some ticker symbols of some companies on the stock market, the price that is displayed on the page is based on when the API fetch was dispatched. Also, the first two pages are the only components that are using Redux to pass along the APIs data to react. The third page is a graph line chart using the Plotly Javascript library, you can enter the exact ticker symbol for a stock market company or cryptocurrency and the application will fetch the price information from the twelve data API. It displays the price for the last two years of the company you have entered in the search bar, you can also zoom into the graph for a more detailed look. 

