const button = document.getElementById('myButton');
const message = document.getElementById('message'); // Element to display the message

button.addEventListener('click', () => {
  message.style.display = 'block'; // Show the message element
});

message.style.display = 'none';
message.style.opacity = 0; // Start with opacity 0

button.addEventListener('click', () => {
  let opacity = 0;
  const interval = setInterval(() => {
    opacity += 0.1;
    message.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(interval);
    }
  }, 100);
});
