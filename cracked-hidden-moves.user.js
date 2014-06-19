// ==UserScript==
// @name          Cracked.com hidden moves
// @namespace     randomecho.com
// @description   Hide [MOVED] pitches, cleaning up thread list
// @include       http://www.cracked.com/forums*
// @grant         none
// @copyright     2014 Soon Van
// @author        Soon Van - randomecho.com
// @license       http://opensource.org/licenses/BSD-3-Clause
// @version       0.1
// ==/UserScript==


function hiddenMoves()
{
  var forums = document.getElementById('forums');
  var table = forums.getElementsByTagName('table');

  for (i = 0; i < table.length; i++)
  {
    var table_row = table[i].getElementsByTagName('tr');

    for (j = 0; j < table_row.length; j++)
    {
      var thread = table_row[j];
      var table_cells = thread.getElementsByClassName('windowbg');
    
      for (k = 0; k < table_cells.length; k++)
      {
        var cell = table_cells[k].innerHTML.trim();

        if (cell.indexOf('MOVED:') != -1)
        {
            table_cells[k].parentNode.remove();
        }
      }
    }
  }
}

function readyFire()
{
  var playground_present = document.getElementById('forums');
  if ( ! playground_present)
  {
    setTimeout(function() {readyFire()}, 1000);
  }
  else
  {
    hiddenMoves();
  }
}

window.onload = readyFire();