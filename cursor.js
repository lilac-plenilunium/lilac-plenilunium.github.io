let cursor = document.querySelector('.cursor')
let ursor = document.querySelector('.ursor')

document.addEventListener('mousemove', moveCursor)
document.addEventListener('mouseleave', function(event) {
  cursor.style.opacity = 0
  ursor.style.opacity = 0
})
document.addEventListener('mouseenter', function(event) {
  cursor.style.opacity = 100
  ursor.style.opacity = 100
})

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.left = `${x-5}px`
  cursor.style.top = `${y}px`
  ursor.style.left = `${x-5}px`
  ursor.style.top = `${y}px`
}