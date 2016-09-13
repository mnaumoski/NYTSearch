// setup variables
// ==============================
var queryTerm = "";
var numRecords = 0;
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
    $.ajax({ url: queryURL, type: 'GET', })
        .done(function(NYTData) {
            for (var i = 0; i < numArticles; i++) {
                // logging to console
                console.log("===Headline===");
                console.log(NYTData.response.docs[i].headline.main);
                console.log(NYTData.response.docs[i].web_url);
                console.log(NYTData.response.docs[i].byline.original);
                console.log(NYTData.response.docs[i].section_name);
                console.log(NYTData.response.docs[i].pub_date);
            }


            // logging to console
            console.log(numArticles);
            console.log(NYTData);
            console.log(queryURL);
        });
}

// main processes
// ==============================
$("#searchBtn").on('click', function() {
    // add search term
    var queryTerm = $("#search").val().trim();
    // the new URL includes the search term
    var newURL = queryURLBase + "&q=" + queryTerm;
    // add the number of records to retrieve
    var numRecords = $("#numRecords").val();
    // add start date
    startyear = $("#startYear").val().trim();
    // add end date
    endYear = $("#endYear").val().trim();

    if (parseInt(startYear)) {
        startyear = $("#startYear").val().trim() + "0101";
        // include start date into the url
        newURL = newURL + "&begin_date=" + startYear;
    }

    if (parseInt(endYear)) {
        endYear = $("#endYear").val().trim() + "0101";
        // include end date into the url
        newURL = newURL + "&end_year=" + endYear;
    }

    runQuery(numRecords, newURL);

    return false;
});
// 1. Capture user input and convert to variables
// 2. Run AJAX call to NYTimes
// 3. Break down the object response into usable fields
// 4. Dynamically generate html

// 5. Deal with edge cases - bugs or something unexpected
