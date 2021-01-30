// ==UserScript==
// @name         eBay - Skip extra-charge, unused options
// @namespace    randomecho.com
// @version      0.4
// @description  Lock out options not necessarily used like Subtitle, Gallery
// @author       Soon Van - randomecho.com
// @match        https://bulksell.ebay.com/ws/eBayISAPI.dll?SingleList*
// @license      http://opensource.org/licenses/BSD-3-Clause
// @grant        none
// ==/UserScript==

function lockoutField(fieldName) {
  let fielded = document.getElementById(fieldName);

  if (fielded) {
    fielded.value = '';
    fielded.readOnly = true;
    fielded.disabled = true;
  }
}

function setLockouts() {
    lockoutField('bold');
    lockoutField('editpane_subtitle');
    lockoutField('galleryPlus');
}

setLockouts();

const resetLockouts = function() {
    setTimeout(setLockouts, 7000);
};

const editPaneContainer = document.getElementById('editpane_cnt');
editPaneContainer.addEventListener("change", resetLockouts, false);
