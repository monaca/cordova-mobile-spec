var VERSION='2.5.0';
var PLAT = /Android/.exec(navigator.userAgent) ? 'android' : 'ios';

var scripts = document.getElementsByTagName('script');
var currentPath = scripts[scripts.length - 1].src;
var platformCordovaPath = currentPath.replace("cordova.js", "cordova." + PLAT + ".js");
var versionCordovaPath = currentPath.replace("cordova.js", "cordova-" + VERSION + ".js");
var cordovaPath = versionCordovaPath;

(function() {
 var xhr = new XMLHttpRequest();
 xhr.open("GET", platformCordovaPath, false);
 xhr.onreadystatechange = function() {
 if (this.readyState == this.DONE && this.responseText.length > 0) {
 cordovaPath = platformCordovaPath;
 }
 };
 xhr.send(null);
 })();

if (!window._doNotWriteCordovaScript) {
    document.write('<script type="text/javascript" charset="utf-8" src="' + cordovaPath + '"></script>');
}

function backHome() {
	if (window.device && device.platform && device.platform.toLowerCase() == 'android') {
        navigator.app.backHistory();
	}
	else {
	    window.history.go(-1);
	}
}