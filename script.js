


// Get all containers
const containers = document.querySelectorAll('.counter-container');

// Loop through each container
containers.forEach((container) => {
  const minusBtn = container.querySelector('.minus-btn');
  const plusBtn = container.querySelector('.plus-btn');
  const counter = container.querySelector('#counter');

  // Add event listeners
  minusBtn.addEventListener('click', () => {
    const currentValue = parseInt(counter.value);
    if (currentValue > 1) {
      counter.value = currentValue - 1;
    }
  });

  plusBtn.addEventListener('click', () => {
    const currentValue = parseInt(counter.value);
    counter.value = currentValue + 1;
  });
});
