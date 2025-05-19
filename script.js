
// untuk membuka dan menutup password //

const showHiddenPassword = (inputId, iconId) => {
  const input = document.getElementById(inputId),
        iconEye = document.getElementById(iconId)

  iconEye.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text'
      iconEye.classList.add('ri-eye-line')
      iconEye.classList.remove('ri-eye-off-line')
    } else {
      input.type = 'password'
      iconEye.classList.remove('ri-eye-line')
      iconEye.classList.add('ri-eye-off-line')
    }
  })
}

showHiddenPassword('password', 'input-icon')

// untuk pop up foto, nama dan quote //

Swal.fire({
  imageUrl: "file:///C:/Users/MCB/Downloads/FOTO%20POP%20UP%20ICT.jpg",
  imageWidth: 300,
  imageHeight: 500,  
  title: "Defael Cedric Metekohy",
  text: "Qui diligit disciplinam, diligit scientiam; qui autem odit increpationes, insipiens est. Terjemahan: Siapa mencintai didikan, mencintai pengetahuan, tetapi siapa membenci teguran, adalah bodoh.",
  footer: '<a href="#">Ganteng doang, due date di cepetin</a>'
});