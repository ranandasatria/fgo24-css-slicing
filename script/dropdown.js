
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

document.addEventListener('DOMContentLoaded', function () {
  const logoutBtn = document.querySelector('.logout')

  if (logoutBtn) {
    logoutBtn.addEventListener('click', function (e) {
      e.preventDefault() 
      localStorage.removeItem('loggedInUser') 
      window.location.href = '../index.html' 
    })
  }
})


function updateUsername() {
  const userData = JSON.parse(localStorage.getItem('loggedInUser')) || {}
  const username = userData.username || ''
  document.getElementById('desktop-username').textContent = username
  document.getElementById('mobile-username').textContent = username
}


function updateNavbarProfilePicture() {
  const userData = JSON.parse(localStorage.getItem('loggedInUser')) || {}
  const navbarProfileDiv = document.querySelector('.profileWizard')
  const profilePreviewDiv = document.getElementById('profile-preview')

  if (navbarProfileDiv) {
    if (userData.profilePicture) {
      navbarProfileDiv.style.backgroundImage = `url('${userData.profilePicture}')`
    } else {
      navbarProfileDiv.style.backgroundImage = 'none'
    }
  }

  if (profilePreviewDiv) {
    if (userData.profilePicture) {
      profilePreviewDiv.style.backgroundImage = `url('${userData.profilePicture}')`
    } else {
      profilePreviewDiv.style.backgroundImage = 'none'
    }
  }
}

updateUsername()
updateNavbarProfilePicture()