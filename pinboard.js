window.onload=function(){
	if (location.href.indexOf("www.google.com/search") == -1){
		_url = encodeURIComponent(location.href)
		_description = encodeURIComponent(document.title)
		_dt = new Date().getFullYear().toString() + ('0' + (new Date().getMonth() + 1)).slice(-2) + ('0' + new Date().getDate()).slice(-2) + ' ' + new Date().getFullYear().toString() + ('0' + (new Date().getMonth() + 1)).slice(-2)

		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://api.pinboard.in/v1/posts/add?auth_token=PEGAR_TOKEN_NOS_SETTINGS_DO_SITE&url=" + _url + "&description=" + _description + "&tags=navigation " + _dt, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				response = xhr.responseText;
				document.getElementById("pRiskAnalyse").nextSibling.nextSibling.children[1].innerText = response.replace(/\;/g, "\n").replace(/\"/g,"").replace(/\\/g,"").replace(/\,/g," - ");
			}
		}

		xhr.send();
	}
}