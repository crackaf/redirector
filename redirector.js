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

path = window.location.search.replace('?', '').replace('#', ''); //get current url parameters

if (path.length == 0) {
    setInterval(() => {
        sec = 3;
        document.getElementById("redirectDetail").innerHTML = "You will be redirected to " + window.location.href + "/README.md in " + sec + " seconds.";
        sec -= 1;
    }, 1000);
    setTimeout(() => window.location.href = 'README.md', 3000);
}
else {
    document.write("Redirect requested for ", path);
    fetch('https://ghostoverflow.github.io/redirector/data.json')
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            if (path in data) {
                setInterval(() => {
                    sec = 3;
                    document.getElementById("redirectDetail").innerHTML = 'You will be redirected to <a href="' + data[path] + '">' + data[path] + '</a> in ' + sec + ' seconds.'; 
                    sec -= 1;
                }, 1000);

                setTimeout(() => window.location.href = data[path], 3000);
            }
            else {
                document.getElementById("redirectDetail").innerHTML
                    = 'Could\'nt find the specific adrress. Please contact at <a href="https://github.com/ghostoverflow/redirector/">Github Repo</a>.';
            }
        })
        .catch(error => console.error('Error:', error));
}
