// paradigms.js for daily15
function Item() {
    this.addToDocument = function () {
        document.body.appendChild(this.item);
    }
};

function Label() {
    this.createLabel = function(text, id) {
        this.item = document.createElement("p");
        this.item.setAttribute("id", id);
        this.item.innerHTML = text;
    },

    this.setText = function(text) {
        this.item.innerHTML = text;
    }
};

function Button() {
    this.createButton = function(text, id) {
        this.item = document.createElement("button");
        this.item.setAttribute("id", id);
        this.item.innerHTML = text;
    },

    this.addClickEventHandler = function(handler, args) {
        this.item.onmouseup = function() {
            handler(args);
        }
    }
};

function Dropdown() {
    this.createDropdown = function(dict, id, selected) {
        // dict is dictionary with value/text pairs
        // id is the id attribute of the dropdown
        // selected is the value of the default selected option
        this.item = document.createElement("select");
        this.id = id;

        for (var x in dict) {
            if (dict.hasOwnProperty(x)) {
                var tmp = document.createElement("option");
                // copy what HTML is expecting, do it on the fly
                tmp.setAttribute("value", x);
                var string = document.createTextNode(x);
                tmp.appendChild(string);
                tmp.setAttribute("text", dict[x]);
                // adding input element to form
                this.item.appendChild(tmp);
            }
        }
        this.item.selectedIndex = selected;
    },

    this.getSelected = function() {
        var dropdown = this.item;
        var text = dropdown.options[dropdown.selectedIndex].text;
        // returns value of the currently selected option in the dropdown box
        return text;
    }

};
