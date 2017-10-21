(function(){
	translate();
	document.addEventListener("DOMContentLoaded",restoreOptions);
	document.getElementById("optionsForm").addEventListener("change",saveOptions);
})();

function saveOptions(){
	browser.storage.local.set({theme:document.getElementById("theme").value});
}

function restoreOptions(){
	browser.storage.local.get("theme").then(result=>{
		document.getElementById("theme").value=result.theme;
	});
}

function translate(){
	document.getElementById("h2options").textContent=i18n("options");
	document.getElementById("labelTheme").textContent=i18n("theme");
	let theme=document.getElementById("theme").options;
		theme[0].text=i18n("defaultTheme");
		theme[1].text=i18n("lightTheme");
		theme[2].text=i18n("darkTheme");
		theme[3].text=i18n("lwtTheme");
}

function i18n(e,s1){
	return browser.i18n.getMessage(e,s1);
}
