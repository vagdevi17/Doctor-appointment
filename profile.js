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