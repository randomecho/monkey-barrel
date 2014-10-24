// ==UserScript==
// @name          Answers on Unanswered questions waiting for an upvote
// @namespace     randomecho.com
// @description   Hides Unanswered questions with zero answers, showing only those needing upvotes
// @include       http://stackoverflow.com/unanswered*
// @include       http://serverfault.com/unanswered*
// @include       http://superuser.com/unanswered*
// @include       http://askubuntu.com/unanswered*
// @include       http://*.stackexchange.com/unanswered*
// @grant         none
// @copyright     2014 Soon Van
// @author        Soon Van - randomecho.com
// @license       http://opensource.org/licenses/BSD-3-Clause
// @version       1.0
// ==/UserScript==

function hideUnanswered()
{
  var all_questions = document.getElementById('questions');
  var questions_list = all_questions.getElementsByClassName('status unanswered');

  for (i = 0; i < questions_list.length; i++)
  {
    var question = questions_list[i];
    question.parentNode.parentNode.parentNode.style.display = 'none';
  }
}

function readyFire()
{
  var footer_present = document.getElementById('footer');
  if ( ! footer_present)
  {
    setTimeout(function() {readyFire()}, 1000);
  }
  else
  {
    hideUnanswered();
  }
}

window.onload = readyFire();