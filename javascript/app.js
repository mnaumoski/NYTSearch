// setup variables
// ==============================
var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

var apiKey = "e0130c2a061f49eca6cca1992cc2d736";
// URL Base
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey;

// variable to track the number of articles (1, 5, or 10)
var articleCounter = 0;
// setup functions
// ==============================

function runQuery(numArticles, queryURL) {
  // AJAX FUnction
  $.ajax({url: queryURL, type: 'GET', })
    .done(function(NYTData) {
      // logging to console
      console.log(NYTData);
    });
}

// main processes
// ==============================
$("#searchBtn").on('click', function() {
    runQuery(10, "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=e0130c2a061f49eca6cca1992cc2d736&q=obama&begin_date=19990101&end_date=20100101");
    return false;
  });
  // 1. Capture user input and convert to variables
  // 2. Run AJAX call to NYTimes
  // 3. Break down the object response into usable fields
  // 4. Dynamically generate html

// 5. Deal with edge cases - bugs or something unexpected