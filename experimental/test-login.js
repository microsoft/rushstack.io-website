console.log('Starting test-login.js');

function htmlEncode(text) {
  const tempDiv = document.createElement('div');
  tempDiv.innerText = text;
  return tempDiv.innerHTML;
}

const rootDiv = document.getElementById('root');

if (!rootDiv) {
  throw new Error('Root div not found');
}

var cookieMap = {};

document.cookie
  .split(';')
  .map(function (part) {
    return part.trim().split('=');
  })
  .forEach(function (pair) {
    cookieMap[pair[0]] = decodeURIComponent(pair[1]);
  });

var loggedInUser = (cookieMap['rscommunity-logged-in-user'] || '').trim();

var serviceUrl = '';
if (document.location.hostname.toUpperCase() !== 'LOCALHOST') {
  serviceUrl = 'https://service.rushstack.io';
}

document.cookie = [
  'rscommunity-login-return-path=' + encodeURIComponent(document.location.pathname),
  'SameSite=Strict',
  'Domain=' + document.location.hostname,
  'Path=/'
].join(';');

if (loggedInUser) {
  // prettier-ignore
  rootDiv.innerHTML = 'You are logged in as <b>' + htmlEncode(loggedInUser) + '</b>.'
    + '<p>'
    + '<a href="' + serviceUrl + '/logout">'
      + 'LOG OUT'
    + '</a>';
} else {
  // prettier-ignore
  rootDiv.innerHTML = 'You are not logged in'
    + '<p>'
    + '<a href="' + serviceUrl + '/login-github">'
      + 'LOG IN'
    + '</a>';
}
