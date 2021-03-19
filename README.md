# Redirector
Redirector for my personal sites. Uses url parameter to check key in data.json, it redirects to the respective value.

<div id="code-element"></div>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
      axios({
      method: 'get',
      url: 'https://raw.githubusercontent.com/ghostoverflow/redirector/main/data.json'
       })
      .then(function (response) {
         document.getElementById("code-element").innerHTML = response.data;
      });
</script>
