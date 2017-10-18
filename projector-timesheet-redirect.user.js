// ==UserScript==
// @name          Projector Redirect back into timesheet
// @namespace     randomecho.com
// @description   Redirect to timesheet page after being logged out or on the dashboard
// @include       https://*.projectorpsa.com/Home/PageNotAuthorized
// @include       https://*.projectorpsa.com/Home/Sorry
// @include       https://*.projectorpsa.com/dashboard
// @grant         none
// @copyright     2017 Soon Van
// @author        Soon Van - randomecho.com
// @license       http://opensource.org/licenses/BSD-3-Clause
// @version       1.0
// ==/UserScript==

var url = document.location;

if (url.pathname.indexOf('PageNotAuthorized') !== -1 ||
  url.pathname.indexOf('Sorry') !== -1) {
  document.getElementsByClassName('primary-confirm')[0].click();
}

if (url.pathname.indexOf('dashboard') !== -1) {
  url.href = '/timesheet';
}
