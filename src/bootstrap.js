/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/. */

let {interfaces: Ci, utils: Cu, classes: Cc} = Components;

Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource:///modules/RecentWindow.jsm");

const dump = Cu.reportError;

const XMLHttpRequest = Components.Constructor("@mozilla.org/xmlextras/xmlhttprequest;1");

function initSiteList() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (this.readyState == 4 && this.status == 200) {
      let sites = JSON.parse(xhr.responseText);
      siteSet = new Set(sites.map(site => site.Domain));
      startObserving();
    }
  };
  xhr.open("GET", "https://stage.haveibeenpwned.com/api/v2/breaches", true);
  xhr.send();
}

var kNotificationTopic = "link-visited";
var observerAdded = false;

var obs = {
  observe: function(sub, topic, data) {
    if (topic != kNotificationTopic) {
      return;
    }
    sub.QueryInterface(Ci.nsIURI);
    warnIfNeeded(sub.host);
  }
}

function startObserving() {
  Services.obs.addObserver(obs, kNotificationTopic);
  observerAdded = true;
}

function stopObserving() {
  if (observerAdded) {
    Services.obs.removeObserver(obs, kNotificationTopic);
  }
}

var siteSet = new Set();
var warnedHostSet = new Set();

function warnIfNeeded(host) {
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  if (!warnedHostSet.has(host) && siteSet.has(host)) {
    let doc = RecentWindow.getMostRecentBrowserWindow().document;
    let nb = doc.getElementById("high-priority-global-notificationbox");
    nb.appendNotification("You visited hacked site " + host + "!", "breachalerts", "", nb.PRIORITY_WARNING_MEDIUM);
    warnedHostSet.add(host);
  }
}

function startup(aData, aReason) {
  initSiteList();
}

function shutdown(aData, aReason) {
  stopObserving();
}

function install(aData, aReason) {}
function uninstall(aData, aReason) {}
