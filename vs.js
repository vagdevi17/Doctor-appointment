// JavaScript code to handle the booking button click event
document.addEventListener('DOMContentLoaded', function() {
    const bookingBtn = document.getElementById('bookingBtn');
  
    bookingBtn.addEventListener('click', function() {
      const urlParams = new URLSearchParams(window.location.search);
      const param = urlParams.get('param');
  
      if (param === 'booking') {
        // Redirect to a booking page or perform booking-related actions
        alert('Redirecting to booking page...');
        // Replace the alert with actual booking logic or page redirection
      }
    });
  });
 // JavaScript code for toggling answer boxes
 const questionButtons = document.querySelectorAll('.question-btn');

questionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.dataset.target;
        const answerBox = document.getElementById(target);

        // Toggle active class for the clicked answer box and button
        answerBox.classList.toggle('active');
        button.classList.toggle('open');

        // Close other answer boxes except the clicked one
        questionButtons.forEach(otherButton => {
            const otherTarget = otherButton.dataset.target;
            if (otherButton !== button && otherTarget !== target) {
                const otherAnswerBox = document.getElementById(otherTarget);
                otherAnswerBox.classList.remove('active');
                otherButton.classList.remove('open');
            }
        });
    });
});
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const formData = new FormData(this);
  const formDataObject = {};
  formData.forEach((value, key) => {
      formDataObject[key] = value;
  });

  // Here you can send formDataObject to the server for further processing
  console.log(formDataObject); // Replace this with your backend logic
});