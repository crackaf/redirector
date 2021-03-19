/*******************************************************
 * redirector.js
 * javascript
 * March 2021
 * 
 * This scripts fectch the data.json file
 * and grabs the url parameter (something after # or ?)
 * crosscheks the parameter with data.json and if found
 * redirects to the specific address
 * 
 * @author Hunzlah Malik @ghostoverflow
*********************************************************/

path = window.location.search.replace('?', '').replace('#', '').toLowerCase(); //get current url parameters

if (path.length == 0) {
    var timeleft = 3;
    var redirectTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(redirectTimer);
            window.location.href = 'README.md'
        }
        document.getElementById("redirectDetail").innerHTML = "You will be redirected to " + window.location.href + "/README.md in " + timeleft + " seconds.";;
        timeleft -= 1;
    }, 1000);
}
else {
    document.write("Redirect requested for ", path);
    fetch('https://raw.githubusercontent.com/ghostoverflow/redirector/main/data.json')
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (path in data) {

                var timeleft = 3;
                var redirectTimer = setInterval(function () {
                    if (timeleft <= 0) {
                        clearInterval(redirectTimer);
                        window.location.href = data[path]
                    }
                    document.getElementById("redirectDetail").innerHTML = 'You will be redirected to <a href="' + data[path] + '">' + data[path] + '</a> in ' + timeleft + ' seconds.';
                    timeleft -= 1;
                }, 1000);
            }
            else {
                document.getElementById("redirectDetail").innerHTML
                    = 'Could\'nt find the specific adrress. Please contact at <a href="https://github.com/ghostoverflow/redirector/">Github Repo</a>.';
            }
        })
        .catch(error => console.error('Error:', error));
}
