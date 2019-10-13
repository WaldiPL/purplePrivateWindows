"use strict";

const colors={
	w0:"#ffffff",
	w1:"#f9f9fa",
	p3:"#c069ff",
	p4:"#ad3bff",
	p5:"#9400ff",
	p6:"#8000d7",
	p7:"#6200a4",
	p8:"#440071",
	p9:"#25003e"
};

const theme={
	colors:{
		button_background_active:"#b3b3b399",
		button_background_hover:"#b3b3b366",
		icons:colors.w0,
		frame:colors.p9,

		popup:colors.p7,
		popup_border:colors.p8,
		popup_highlight:colors.p5,
		popup_highlight_text:colors.w0,
		popup_text:colors.w1,

		sidebar:colors.p7,
		sidebar_border:colors.p8,
		sidebar_highlight:colors.p5,
		sidebar_highlight_text:colors.w0,
		sidebar_text:colors.w1,

		tab_background_separator:colors.p6,
		tab_background_text:colors.w1,
		tab_line:colors.p3,
		tab_loading:colors.p3,
		tab_selected:colors.p6,
		tab_text:colors.w0,

		toolbar:colors.p6,
		toolbar_text:colors.w0,
		toolbar_bottom_separator:colors.p8,
		toolbar_top_separator:colors.p8,
		toolbar_vertical_separator:colors.p7,

		toolbar_field:colors.p4,
		toolbar_field_focus:colors.p3,
		toolbar_field_border:colors.p8,
		toolbar_field_border_focus:colors.p8,
		toolbar_field_separator:colors.p3,
		toolbar_field_text:colors.w1,
		toolbar_field_text_focus:colors.w0
	}
};

function updateTheme(win){
	if(win.incognito){
		browser.theme.update(win.id,theme);
	}
}

browser.windows.onCreated.addListener(updateTheme);
