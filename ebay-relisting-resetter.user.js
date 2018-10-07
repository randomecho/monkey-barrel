// ==UserScript==
// @name         eBay - Reset fields for fixed-priced items
// @namespace    randomecho.com
// @version      0.1
// @description  Reset fields more typical of plain month-long fixed-priced items
// @author       Soon Van - randomecho.com
// @match        https://bulksell.ebay.com/ws/eBayISAPI.dll?*
// @license      http://opensource.org/licenses/BSD-3-Clause
// @grant        none
// ==/UserScript==

function fieldNope(fieldName) {
  let fielded = document.getElementById(fieldName);

  if (fielded) {
    fielded.value = 'No';
  }
}

function fieldChoice(fieldName, value) {
  let fielded = document.getElementById(fieldName);

  if (fielded) {
    fielded.value = value;
  }
}

fieldNope('Listing.Item.ItemSpecific[Non-Domestic Product]');
fieldNope('Listing.Item.ItemSpecific[Custom Bundle]');
fieldNope('Listing.Item.ItemSpecific[Modified Item]');

fieldChoice('format', 'FixedPrice');
fieldChoice('duration', 'Days_30');
