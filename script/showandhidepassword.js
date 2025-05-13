 document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.input-row').forEach(function(row) {
    const input = row.querySelector('input[type="password"]')
    const toggle = row.querySelector('.toggle-password')

    if (!input || !toggle) return

    toggle.addEventListener('click', function() {
      const isPassword = input.getAttribute('type') === 'password'
      input.setAttribute('type', isPassword ? 'text' : 'password')
      toggle.setAttribute('src', isPassword ? '/src/eyeclose.svg' : '/src/eyeopen.svg')
    })
  })
})
