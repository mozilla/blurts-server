function doXHR(aURL, aBodyObj, aAlertText, aDebug=true) {
  return new Promise((resolve) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (aAlertText) {
          alert(aAlertText);
        }
        if (aDebug) {
          let responseDumpElt = document.getElementById("responseDump");
          responseDumpElt.appendChild(
            document.createTextNode(xhr.response));
          responseDumpElt.appendChild(
            document.createElement("hr"));
          responseDumpElt.appendChild(
            document.createElement("br"));
        }
        resolve(xhr.response);
      }
    };
    xhr.open("POST", aURL, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(aBodyObj));
  });
}

function addUser() {
  doXHR("/user/add",
        { email: document.getElementById("addUserField").value })
    .then(function() {
      alert("A verification link has been emailed to the specified address.");
    });
}

function removeUser() {
  doXHR("/user/remove",
        { email: document.getElementById("removeUserField").value });
}

function simulateBreach() {
  doXHR("/user/breached",
        { emails: document.getElementById("breachUsersInput").value.split(",").map(e => e.trim()) });
}

function clearUserList() {
  doXHR("/user/reset", {});
}

function dumpUserList() {
  doXHR("/user/list", {});
}

function doOauth() {
  window.open("/oauth/init");
}
