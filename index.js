document.getElementById('dropdown-button').addEventListener('click', function(event) {
  document.getElementById('dropdown-content').classList.toggle('show');
  event.stopPropagation();
});

document.addEventListener('click', function() {
  document.getElementById('dropdown-content').classList.remove('show');
});