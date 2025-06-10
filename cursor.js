let cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', moveCursor)
document.addEventListener('mouseleave', function(event) {
  cursor.style.opacity = 0
})
document.addEventListener('mouseenter', function(event) {
  cursor.style.opacity = 100
})

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.left = `${x}px`
  cursor.style.top = `${y}px`
}