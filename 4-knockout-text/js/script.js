let body = document.body;
let div = document.querySelector('div');

// Detect mouse movement in body element
body.addEventListener('mousemove', e => {
  // Get the Y coordinate of the mouse position
  const yCoord = e.clientY;
  // Get the height of the window in pixels and divide by Y coord
  const yPos = yCoord/window.innerHeight;
  // Set the value of the CSS variable to a percentage
  div.style.setProperty('--bg-pos-y', `${yPos * 100}%`);
});