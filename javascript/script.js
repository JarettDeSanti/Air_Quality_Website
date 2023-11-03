document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  console.log(elems);
  var instances = M.Sidenav.init(elems, 'left');
});