// Function to move the DODGER to the left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 4}px`;
    }
  }
  
  // Function to move the DODGER to the right
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 4}px`;
    }
  }
  
  // Export the functions
  module.exports = {
    moveDodgerLeft,
    moveDodgerRight
  };
  