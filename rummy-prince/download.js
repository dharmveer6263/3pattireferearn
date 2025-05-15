function copyText(text, callback) {
	var tag = document.createElement('input');
	tag.setAttribute('id', 'cp_hgz_input');
	tag.value = text;
	document.getElementsByTagName('body')[0].appendChild(tag);
	document.getElementById('cp_hgz_input').select();
	document.execCommand('copy');
	document.getElementById('cp_hgz_input').remove();
	if (callback) { callback(text) }
}
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) { return pair[1]; }
	}
	return ("");
}
 async function DownSoft() {
	let mylink
	let downFlag = await getQueryVariable("c")
	if (downFlag && downFlag != '') {
		mylink = "https://rummyprince.org/Apk/RummyPrince.apk"
	}else{
		mylink = "https://rummyprince.org/Apk/RummyPrince.apk"
	}
	var u = navigator.userAgent;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	let gameId = getQueryVariable("from_gameid")
	let code = getQueryVariable("channelCode")
	let copyObj = {
		from_gameid:"8947009",
		channelCode:"100000"
	}
	let copyStr = JSON.stringify(copyObj)
	copyText( copyStr, function (){console.log('copy successful',copyStr)})
	if (isAndroid) {
		window.location.href = mylink
	}
	else if (isiOS) {
		window.location.href = "https://rummyprince.co.in/ios.html"
	}
	else {
		window.location.href = mylink
	}
}