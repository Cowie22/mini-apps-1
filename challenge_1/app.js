document.addEventListener('DOMContentLoaded', function() {

  document.addEventListener('click', (event) => {
    if (event.target.matches('.btn')) {
      window.location.reload();
    }
    if (event.target.matches('.square') && event.target.value === undefined) {
      event.target.value = 'X'
      event.target.append('X')
    }
  })
});

