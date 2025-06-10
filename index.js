//JS for the treasure chest video 
//Written by Alexis Ouellette
document.getElementById('openBtn').addEventListener('click', function() {
    const password = document.getElementById('password').value;
    const correctPassword = 'Cyber'; 
    
    if (password === correctPassword) {
        document.getElementById('popup').classList.remove('hidden');
        document.getElementById('popupMessage').textContent = 'Congratulations!';
        document.getElementById('popupVideo').classList.remove('hidden');
        document.getElementById('popupVideo').play(); // Start the video automatically 
        document.getElementById('errorMessage').classList.add('hidden'); // Hide error message 
    } else {
        document.getElementById('errorMessage').classList.remove('hidden'); // Show error message if wrong
    }
});

document.getElementById('closePopup').addEventListener('click', function() {
    closePopup();
});

document.getElementById('popupVideo').addEventListener('ended', function() {
    closePopup();
});

//close the popup when done
function closePopup() {
    document.getElementById('popup').classList.add('hidden');
    document.getElementById('popupVideo').classList.add('hidden');
    document.getElementById('popupVideo').pause(); // Pause the video when popup is closed
    document.getElementById('popupVideo').currentTime = 0; // Reset the video to the beginning
}
