
path = window.location.search //get current url parameters
path.replace("?", ""); //removing prefix
document.write("Redirect requested for ", path);
fetch('https://ghostoverflow.github.io/redirector/data.json')
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        if (path in data) {
            document.getElementById("redirectDetail").innerHTML
                = "You will be redirected to " + data[path] + " in 5 seconds.";
            setTimeout(() => window.location.href = data[path], 5000);
        }
        else {
            document.getElementById("redirectDetail").innerHTML
                = "Could'nt find the specific adrress. Please contact at https://github.com/ghostoverflow/redirector";
        }
    })
    .catch(error => console.error('Error:', error));
