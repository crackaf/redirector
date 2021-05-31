/*******************************************************
 * @file redirector.js
 * @language javascript
 * @date March 2021
 * 
 * @summary This scripts fectch the data.json file
 * and grabs the url parameter (something after # or ?)
 * crosscheks the parameter with data.json and if found
 * redirects to the specific address
 * 
 * @author Hunzlah Malik @ghostdart
 * @async
*********************************************************/

// get current url parameters
path = window.location.search.replace('?', '').replace('#', '').toLowerCase();

if (path.length == 0) { // if there is no parameter
    var timeleft = 3; // countdown
    var redirectTimer = setInterval(function () {
        if (timeleft <= 0) { // countdown is 0
            clearInterval(redirectTimer);
            window.location.href = 'README.md' // redirect to README file
        }
        document.getElementById("redirectDetail").innerHTML = "You will be redirected to " + window.location.href + "/README.md in " + timeleft + " seconds."; // show countdown and link
        timeleft -= 1;
    }, 1000);
}
else { // there is parameter
    document.write("Redirect requested for ", path);
    fetch('https://github.com/ghostdart/redirector/blob/c6485b3c722cca63b7f5a676ff5cc909c8de8f2d/data.json') // fetch the parameter->link file
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (path in data) { // parameter is found in data.json
                var timeleft = 3; // countdown
                var redirectTimer = setInterval(function () {
                    if (timeleft <= 0) { // countdown is 0
                        clearInterval(redirectTimer);
                        window.location.href = data[path] // redirect to specific address
                    }
                    document.getElementById("redirectDetail").innerHTML = 'You will be redirected to <a href="' + data[path] + '">' + data[path] + '</a> in ' + timeleft + ' seconds.';
                    timeleft -= 1;
                }, 1000);
            }
            else { // parameter not found in data.json
                document.getElementById("redirectDetail").innerHTML
                    = 'Could\'nt find the specific adrress. Please contact at <a href="https://github.com/ghostdart/redirector/">Github Repo</a>.';
            }
        })
        .catch(error => console.error('Error:', error));
}
