/* eslint-env browser */

"use strict";
	const trackingProtection = {};
  trackingProtection.enabled = function(dnt, ua){
  window.dataLayer = window.dataLayer || [];
	let userPrivacySettings = navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack;
	const userAgent = ua || navigator.userAgent;
	const anomalousWinVersions = ["Windows NT 6.1", "Windows NT 6.2", "Windows NT 6.3"];
	const fxMatch = userAgent.match(/Firefox\/(\d+)/);
	const ieRegEx = /MSIE|Trident/i;
	const isIE = ieRegEx.test(userAgent);
  const platform = userAgent.match(/Windows.+?(?=;)/g);
	console.log(`user privacy settings so far: ${userPrivacySettings}`);
	console.log(`user agent is : ${userAgent}`);
	if(isIE&&typeof Array.prototype.indexOf !== "function"){
		return false;
	} else if(fxMatch&&parseInt(fxMatch[1],10)<32){
		userPrivacySettings="Unspecified";
		} 
		else if( isIE && platform&&anomalousWinVersions.indexOf(platform.toString()) !== -1){
			userPrivacySettings="Unspecified";
		}
	else{
		userPrivacySettings = {
			0 : "Disabled",
			1 : "Enabled",
    }[userPrivacySettings] || "Unspecified";}
		return userPrivacySettings === "Enabled"?true:false;
};



/* global ga */
// if (!privacySettingsEnabled()) {
// 	(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
// 	(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),
// 	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
// 	})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");
// }
// if (typeof(ga) !== "undefined") {
// 		ga("create", "UA-77033033-16");
// 		ga("set", "anonymizeIp", true);
// 		ga("send", "pageview");
// } else {
// 	console.warn( // eslint-disable-line no-console
// 		"You have google analytics blocked. We understand. Take a " +
// 		"look at our privacy policy to see how we handle your data."
// 	);
// }

if (trackingProtection && !trackingProtection.enabled()) {
  console.log("privacy settings are enabled");
} else {
	console.log( // eslint-disable-line no-console
		"You have google analytics blocked. We understand. Take a " +
		"look at our privacy policy to see how we handle your data."
	);
}
