
document.querySelector('.dropdown-toggle').addEventListener('click', function(e) {
  e.preventDefault()
  const userMenu = document.querySelector('.user-menu')
  userMenu.classList.toggle('active')
})


document.addEventListener('click', function(e) {
  const profileMenu = document.querySelector('.profile-menu')
  if (!profileMenu.contains(e.target)) {
    document.querySelector('.user-menu').classList.remove('active')
  }
})

function updateUsername() {
  const userData = JSON.parse(localStorage.getItem('userData')) || {}
  const username = userData.username || 'Guest'
  document.getElementById('desktop-username').textContent = username
  document.getElementById('mobile-username').textContent = username
}

updateUsername();