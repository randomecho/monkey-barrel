// ==UserScript==
// @name          Goodreads high count giveaways
// @namespace     randomecho.com
// @description   Remove First Reads giveaways offering a low number of books
// @include       https://www.goodreads.com/giveaway*
// @exclude       https://www.goodreads.com/giveaway/show/*
// @grant         none
// @copyright     2014 Soon Van
// @author        Soon Van - randomecho.com
// @license       http://opensource.org/licenses/BSD-3-Clause
// @version       1.1
// ==/UserScript==

var minimumBooks = 10;

function wipeOut(minimumBooks)
{
  var listBooks = document.getElementsByClassName('giveawayListItem');
  listBooks = Array.prototype.slice.call(listBooks);

  for (i = 0; i < listBooks.length; i++) {
    var bookEntry = listBooks[i];

    // Drill down to the right side of the entry
    var giveawayDetails = bookEntry.querySelectorAll('div.giveawayDetails');
    giveawayDetailItem = Array.prototype.slice.call(giveawayDetails); // Convert into array

    // Look for the "Availability" block
    var giveawayAvailability = giveawayDetailItem[0].childNodes[3].innerText.trim();
    giveawayCopies = giveawayAvailability.split('\n');

    // Grab the number from the "X copies available" text
    var copiesCount = parseInt(giveawayCopies[1].replace(/cop(ies|y)/i, ''));

    // Hide those with copies less than minimumBooks
    if (copiesCount < minimumBooks) {
      bookEntry.style.display = 'none';
    }
  }
}

function readyFire()
{
  var footerIsLoaded = document.getElementsByClassName('footer');

  if (!footerIsLoaded) {
    setTimeout(function() {readyFire()}, 1000);
  } else {
    wipeOut(minimumBooks);
  }
}

window.onload = readyFire();
