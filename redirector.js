
path = window.location.search.replace('?', ''); //get current url parameters

if (path.length == 0) {
    document.getElementById("redirectDetail").innerHTML
        = "You will be redirected to " + window.location.href + "/README.md in 5 seconds.";
    setTimeout(() => window.location.href = 'README.md', 5000);
}
else {
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
                    = 'Could\'nt find the specific adrress. Please contact at <a href="https://github.com/ghostoverflow/redirector">Github Repo</a>.';
            }
        })
        .catch(error => console.error('Error:', error));
}
