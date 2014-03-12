// ==UserScript==
// @name          Goodreads giveaways arrow pager
// @namespace     randomecho.com
// @description   Navigate giveaway pages with left and right arrow keys
// @include       https://www.goodreads.com/giveaway*
// @include       http://www.goodreads.com/giveaway*
// @grant         none
// @copyright     2014 Soon Van
// @author        Soon Van - randomecho.com
// @license       http://opensource.org/licenses/BSD-3-Clause
// @version       1.0
// ==/UserScript==

function arrowPager(e)
{
  var pager_class = '';

  if (e.keyCode == 37)
  {
    pager_class = 'previous_page';
  }
  else if (e.keyCode == 39)
  {
    pager_class = 'next_page';
  }

  if (pager_class != '')
  {
    // There should be only one link classed as either, so grab it
    var pager_node = document.getElementsByClassName(pager_class);
    
    if (typeof(pager_node[0]) != 'undefined')
    {
      page_url = pager_node[0].getAttribute('href');

      // First and last pager links will not have a URL set
      if (page_url)
      {
        document.location = page_url;
      }
    }
  }
}

document.addEventListener('keydown', arrowPager, false);