(function () {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

  if (!loggedInUser) {
    window.location.href = '../pages/login.html'
  }
})()