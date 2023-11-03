document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, 'left');
});

$(':radio').change(function() {
  console.log('New star rating: ' + this.value);
});