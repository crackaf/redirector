
path = window.location.pathname //get current url
path.replace("/redirector/", ""); //removing prefix

fetch('https://ghostoverflow.github.io/redirector/data.json')
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        //document.getElementById("redirectDetail").innerHTML = result;

        

    })
    .catch(error => console.error('Error:', error));
