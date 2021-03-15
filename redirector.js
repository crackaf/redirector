

function start() {
    path = window.location.pathname //get current url
    path.replace("/redirector/", ""); //removing prefix

    //loading json data
    readTextFile("data.json", function (text) {
        var data = JSON.parse(text);
        console.log(data);

    });

}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
