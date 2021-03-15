
path = window.location.pathname //get current url
path.replace("/redirector/", ""); //removing prefix

fetch('https://ghostoverflow.github.io/redirector/data.json')
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        //document.getElementById("redirectDetail").innerHTML = result;
        if (path in data) {
            document.getElementById("redirectDetail").innerHTML = "You will be redirected to " + data[path] + " in 5 seconds.";
            setTimeout(() => window.location.href = data[path], 5000);

        }
        else {

        }
    })
    .catch(error => console.error('Error:', error));
