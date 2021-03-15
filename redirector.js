

function start() {
    path = window.location.pathname //get current url
    path.replace("/redirector/", ""); //removing prefix

    //loading json data
    loadFile("data.json")
}

function loadFile(file) {

    fr = new FileReader();
    fr.onload = receivedText;
    fr.readAsText(file);


    // const reader = new FileReader();
    // reader.addEventListener(file, (event) => {
    //     const result = event.target.result;
    // });
    // reader.readAsDataURL(file);

    // console.log(reader)

    function receivedText(e) {
        let lines = e.target.result;
        var newArr = JSON.parse(lines);
    }
}
