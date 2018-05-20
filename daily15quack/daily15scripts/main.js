// main.js for daily 15
var mid = "32";
Button.prototype = new Item();
var movieButton = new Button();
movieButton.createButton("Click Here", "movieButton");
movieButton.addToDocument();

Label.prototype = new Item();
var movielabel = new Label();
movielabel.createLabel("which movie?", "movieLabel");
movielabel.addToDocument();

var args = ["", movielabel ];
movieButton.addClickEventHandler(getMovie, args);

Button.prototype = new Item();
var ratingButton = new Button();
ratingButton.createButton("Click Me", "ratingButton");
ratingButton.addToDocument();

Label.prototype = new Item();
var ratinglabel = new Label();
ratinglabel.createLabel("I thought the movie was ... ", "ratingLabel");
ratinglabel.addToDocument();

args = ["", ratingLabel];
ratingButton.addClickEventHandler(getRating, args);

Dropdown.prototype = new Item();
var dropdown = new Dropdown();
dropdown.createDropdown(
    {
        "Just Plain Bad" : 1,
        "Not So Good" : 2,
        "OK I guess" : 3,
        "Pretty Good" : 4,
        "Awesome!" : 5
    },
    "theDropdown",
    2
);
dropdown.addToDocument();

Button.prototype = new Item();
var voteButton = new Button();
voteButton.createButton("Vote", "voteButton");
voteButton.addToDocument();
args = [mid, dropdown];
voteButton.addClickEventHandler(putVote, args);

function getMovie(args) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://ash.campus.nd.edu:40033/movies/" + mid, true);
    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            args[0] = xhr.responseText;
            args[1].setText(xhr.responseText); // closures
        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.onerror = function(e) {
        console.error(xhr.statusText);
    };

    xhr.send(null);
}

function getRating(args) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://ash.campus.nd.edu:40033/ratings/" + mid, true);
    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            args[0] = xhr.responseText;
            args[1].setText(xhr.responseText); // closures
        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.onerror = function(e) {
        console.error(xhr.statusText);
    };

    xhr.send(null);
}

function putVote(args) {
    var rating = args[1].getSelected();
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "ash.campus.nd.edu:40033/recommendations/2", true);
    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            var response = xhr.responseText;
        } else {
            console.error(xhr.statusText);
        }
    };

    xhr.onerror = function(e) {
        console.error(xhr.statusText);
    };

    var data = { "movie_id": args[0], "rating": rating.toString() };
    xhr.send(JSON.stringify(data));
}
