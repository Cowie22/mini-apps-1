document.addEventListener('DOMContentLoaded', function() {

  let xTurn = true;
  let count = 1;
  document.addEventListener('click', (event) => {
    count++
    console.log(count)
    if (event.target.matches('.btn')) {
      window.location.reload();
    }
    if (event.target.matches('.square') && event.target.value === undefined && xTurn) {
      event.target.value = 'X'
      event.target.append('X')
      xTurn = false;
    } else if (event.target.matches('.square') && event.target.value === undefined && !xTurn) {
      event.target.value = 'Y';
      event.target.append('Y');
      xTurn = true;
    }
    if (count === 10) {
      alert('Game Complete')
    }
  })
});

