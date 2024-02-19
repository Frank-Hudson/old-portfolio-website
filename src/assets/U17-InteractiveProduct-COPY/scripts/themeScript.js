// JavaScript Document
const docMain = document.body;
// let docBicuit = document.cookie;

// setCookie("isdark", "");

function toggleTheme() {
	const themeText = document.getElementById("theme-txt");

    docMain.classList.toggle("darkmode");
    if (themeText.innerText == "Light") {
        themeText.innerText = "Dark";
		// setCookie("isdark", true);
    } else {
        themeText.innerText = "Light";
		// setCookie("isdark", false);
    }
}

function pageLoad() {
	// let isDark = getCookie("isdark");

	if (isDark == "true") {
		docMain.classList.add("darkmode");
	} else {
		docMain.classList.remove("darkmode");
	}
}


// COOKIES
// function getCookie(name) {
// 	let cookieName = name + "=";
// 	let decodedCookie = decodeURIComponent(docBicuit);
// 	let cookieArray = decodedCookie.split(';');

// 	for (let i = 0; i < cookieArray.length; i++) {
// 		let curCookie = cookieArray[i];
// 		while (curCookie.charAt(0) == ' ') {
// 			curCookie = curCookie.substring(1);
// 		}
// 		if (curCookie.indexOf(name) == 0) {
// 			return curCookie.substring(cookieName.length, curCookie.length);
// 		}
// 	}
// 	return "";
// }

// function setCookie(name, value, expiry=null) {
// 	if (! expiry === null) {
// 		const curDate = new Date();
// 		curDate.setTime(curDate.getTime() + (expiry*24*3600*1000))
// 		let expiry = "expires=" + curDate.toUTCString();
// 		docBicuit = name + "=" + value + ";" + expiry;
// 	} else {
// 		docBicuit = name + "=" + value + ";";
// 	}
// }
