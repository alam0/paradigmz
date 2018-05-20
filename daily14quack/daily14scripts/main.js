Button.prototype = Item;
eButton = new Button();
eButton.createButton("Click Here", "theButton");
eButton.addToDocument();

Label.prototype = Item;
elabel = new Label();
elabel.createLabel("guess who", "theLabel");
elabel.addToDocument();

function changeText(args) {
    args[1] = elabel.setText(args[0]);
}

var xhr = new XMLHttpRequest();
xhr.open("GET", "ash.campus.nd.edu:40033/movies/32", true);

xhr.onload = function(e) {
    args = [ xhr.responseText, elabel];
    alert(xhr.responseText);
    eButton.addClickEventHandler(changeText, args);

}

xhr.onerror = function(e) {
    args = [ xhr.statusText, elabel];
    alert(xhr.statusText);
    eButton.addClickEventHandler(changeText, args);

}

xhr.send();

//eButton.addClickEventHandler(changeText, args);
