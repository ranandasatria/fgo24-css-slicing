  function showToast(message){
    const toast = document.createElement('div')
    toast.className = 'toast-message'
    toast.textContent = message
    document.body.appendChild(toast)

    setTimeout(()=>{
      toast.remove()
    }, 3000)
  }