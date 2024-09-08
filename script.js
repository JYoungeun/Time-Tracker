const dayButton = document.getElementById('buttonDaily');
const weekButton = document.getElementById('buttonWeekly');
const monthButton = document.getElementById('buttonMonthly');

document.addEventListener('DOMContentLoaded', () => {
    weekButton.click();
    handleButtonClick(weekButton);
});

function removeHighlight() {
    dayButton.classList.remove('clicked');
    weekButton.classList.remove('clicked');
    monthButton.classList.remove('clicked');
}

function handleButtonClick(button) {
    removeHighlight();
    button.classList.add('clicked');
}

dayButton.addEventListener('click', () => {
    handleButtonClick(dayButton)
    document.getElementById('work-time').innerHTML = "5hrs";
    document.getElementById('work-previous').innerHTML = "Previous Day - 7hrs";
    document.getElementById('play-time').innerHTML = "1hr";
    document.getElementById('play-previous').innerHTML = "Previous Day - 2hrs";
    document.getElementById('study-time').innerHTML = "0hrs";
    document.getElementById('study-previous').innerHTML = "Previous Day - 1hr";
    document.getElementById('exercise-time').innerHTML = "1hr";
    document.getElementById('exercise-previous').innerHTML = "Previous Day - 1hr";
    document.getElementById('social-time').innerHTML = "1hr";
    document.getElementById('social-previous').innerHTML = "Previous Day - 3hrs";
    document.getElementById('self-care-time').innerHTML = "0hrs";
    document.getElementById('self-care-previous').innerHTML = "Previous Day - 1hr";
});

weekButton.addEventListener('click', () => {
    handleButtonClick(weekButton)
    document.getElementById('work-time').innerHTML = "32hrs";
    document.getElementById('work-previous').innerHTML = "Previous Week - 36hrs";
    document.getElementById('play-time').innerHTML = "10hrs";
    document.getElementById('play-previous').innerHTML = "Previous Week - 8hrs";
    document.getElementById('study-time').innerHTML = "4hrs";
    document.getElementById('study-previous').innerHTML = "Previous Week - 7hrs";
    document.getElementById('exercise-time').innerHTML = "4hrs";
    document.getElementById('exercise-previous').innerHTML = "Previous Week - 5hrs";
    document.getElementById('social-time').innerHTML = "5hrs";
    document.getElementById('social-previous').innerHTML = "Previous Week - 10hrs";
    document.getElementById('self-care-time').innerHTML = "2hrs";
    document.getElementById('self-care-previous').innerHTML = "Previous Week - 2hrs";
});

monthButton.addEventListener('click', () => {
    handleButtonClick(monthButton)
    document.getElementById('work-time').innerHTML = "103hrs";
    document.getElementById('work-previous').innerHTML = "Previous Month - 128hrs";
    document.getElementById('play-time').innerHTML = "23hrs";
    document.getElementById('play-previous').innerHTML = "Previous Month - 29hrs";
    document.getElementById('study-time').innerHTML = "13hrs";
    document.getElementById('study-previous').innerHTML = "Previous Month - 19hrs";
    document.getElementById('exercise-time').innerHTML = "11hrs";
    document.getElementById('exercise-previous').innerHTML = "Previous Month - 18hrs";
    document.getElementById('social-time').innerHTML = "21hrs";
    document.getElementById('social-previous').innerHTML = "Previous Month - 23hrs";
    document.getElementById('self-care-time').innerHTML = "7hrs";
    document.getElementById('self-care-previous').innerHTML = "Previous Month - 11hrs";
});