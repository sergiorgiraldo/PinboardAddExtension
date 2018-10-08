function check(value) {
	sitesToExclude = ['www.google.com/search', 
			'www.google.com.br/search', 
			'pinboard.in', 
			'whatsapp', 
			'mail.google', 
			'outlook.live', 
			'intranet'];
  
	for (var i = 0; i < sitesToExclude.length; i++) {
	  if (value.indexOf(sitesToExclude[i]) > -1) {
		return false;
	  }
	}
	return true;
  }

window.onload=function(){
	if (check(location.href)){
		_url = encodeURIComponent(location.href)
		_description = encodeURIComponent(document.title)
		_dt = new Date().getFullYear().toString() + ('0' + (new Date().getMonth() + 1)).slice(-2) + ('0' + new Date().getDate()).slice(-2) + ' ' + new Date().getFullYear().toString() + ('0' + (new Date().getMonth() + 1)).slice(-2)

		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://api.pinboard.in/v1/posts/add?auth_token=PEGAR_NO_SITE&url=" + _url + "&description=" + _description + "&tags=navigation " + _dt, true);

		xhr.send();
	}
}
