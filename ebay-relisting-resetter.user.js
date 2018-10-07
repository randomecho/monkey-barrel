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

function fieldChange(fieldName, value) {
  let fielded = document.getElementById(fieldName);

  if (fielded) {
    fielded.value = value;
  }
}

fieldChange('Listing.Item.ItemSpecific[Non-Domestic Product]', 'No');
fieldChange('Listing.Item.ItemSpecific[Custom Bundle]', 'No');
fieldChange('Listing.Item.ItemSpecific[Modified Item]', 'No');
fieldChange('format', 'FixedPrice');
fieldChange('duration', 'Days_30');
