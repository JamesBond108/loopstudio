document.getElementById('dropdown-menu').addEventListener('click', function () {
    document.getElementById('loop-all').style.display = "none"
    document.getElementById('end').style.display = "none"
    document.getElementById('mobile-menu').style.display = "block"
});

document.getElementById('cancel').addEventListener('click', function () {
    document.getElementById('loop-all').style.display = "block"
    document.getElementById('end').style.display = "block"
    document.getElementById('mobile-menu').style.display = "none"
});
let rotationAngle = 0;

function turnAround() {
  // Incrementing the rotation angle on each click
  rotationAngle += 180;

  // Applying the rotation using CSS transform property
  document.getElementById('turningObject').style.transform = `rotate(${rotationAngle}deg)`;
}
turnAround()
