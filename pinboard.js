window.onload=function(){
	sitesToExclude = ['www.google.com/search', 
			'www.google.com.br/search', 
			'pinboard.in', 
			'whatsapp', 
			'mail.google', 
			'outlook.live', 
			'file://',  
			'intranet'];

	checked = true;

	sitesToExclude.forEach(function (site) {
		if (checked) checked = (location.href.indexOf(site) == -1);
	});

	if (checked){
		_url = encodeURIComponent(location.href)
		_description = encodeURIComponent(document.title)
		_dt = new Date().getFullYear().toString() + ('0' + (new Date().getMonth() + 1)).slice(-2) + ('0' + new Date().getDate()).slice(-2) + ' ' + new Date().getFullYear().toString() + ('0' + (new Date().getMonth() + 1)).slice(-2)

		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://api.pinboard.in/v1/posts/add?auth_token=PEGAR_NO_SITE&url=" + _url + "&description=" + _description + "&tags=navigation " + _dt, true);

		xhr.send();
	}
}
