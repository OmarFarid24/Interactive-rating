alert ("In javascript")
document.addEventListener('DOMContentLoaded', () => {

    const ratingButtons = document.querySelectorAll('.button_container_number');
    const submitButton = document.querySelector('.submit_container');
    const containerOne = document.querySelector('.container_one');
    const containerTwo = document.querySelector('.container_two');
    const selectedRatingText = document.querySelector('.thank_you--button');
    
    let selectedRating = null;

    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            ratingButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedRating = button.textContent;
        });
    });

    submitButton.addEventListener('click', () => {
        if (selectedRating) {
            selectedRatingText.textContent = selectedRating;
            containerOne.style.display = 'none';
            containerTwo.style.display = 'flex';
        } else {
            alert('Please select a rating');
        }
    });
});
