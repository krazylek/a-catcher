'use strict';
/*
 * intercept clicks on A elements on the page, usefull for single page app.
 * (Element, function) -> undefined
 */

module.exports = function(root, cb) {   
  root.addEventListener('click', function (ev) {
    if(ev.altKey || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.defaultPrevented)
      return true;
    
    var anchor = traverse(ev.target);
    if(!anchor)
      return true;
 
    ev.preventDefault();
    cb(anchor.href);
  });
};

function traverse(node) {
  if(!node) return;
  if(node.nodeName !== 'A'
    || node.href === undefined
    || location.host !== node.host)
    return traverse(node.parentNode);
  return node;
}
