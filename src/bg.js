browser.runtime.onInstalled.addListener(onInstalled);
browser.windows.onCreated.addListener(updateTheme);

const themes={
	light:{
		images:{
			headerURL:"",
		},
		colors:{
			accentcolor:"#e3e4e6",
			textcolor:"#18191a",
			toolbar:"#f5f6f7",
			toolbar_text:"#18191a",
			toolbar_field:"#fff",
			toolbar_field_text:"#000"
		}
	},
	dark:{
		images: {
			headerURL: "",
		},
		colors: {
			accentcolor:"#0c0c0d",
			textcolor:"#f9f9fa",
			toolbar:"#323234",
			toolbar_text:"#f9f9fa",
			toolbar_field:"#474749",
			toolbar_field_text:"#f9f9fa"
		}
	},
	priv:{
		images: {
			headerURL: "",
		},
		colors: {
			accentcolor:"#25003e",
			textcolor:"#fff",
			toolbar:"#8000d7",
			toolbar_text:"#fff",
			toolbar_field:"#9933df",
			toolbar_field_text:"#fff"
		}
	}
};

function onInstalled(details){
	if(details.reason==="install"){
		browser.storage.local.set({theme:"default"});
		browser.runtime.openOptionsPage();
	}
}

function updateTheme(win){
	if(win.incognito){
		browser.theme.update(win.id,themes["priv"]);
		updateCurrentWindows();
	}
}

function updateCurrentWindows(){
	browser.storage.local.get("theme").then(result=>{
		if(result.theme==="lwt")return;
		browser.windows.getAll().then(wins=>{
			wins.forEach(win=>{
				if(!win.incognito){
					if(result.theme==="default")
						browser.theme.reset(win.id);
					else
						browser.theme.update(win.id,themes[result.theme]);
				}
			});
		});
	});
}
