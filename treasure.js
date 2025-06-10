/*Treasure Java Script*/
// Written by Alexis Ouellette

document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const openBtn = document.getElementById('openBtn');
    const errorMessage = document.getElementById('errorMessage');
    const fileLink = document.getElementById('file-link');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const popupVideo = document.getElementById('popupVideo');
    const closePopup = document.getElementById('closePopup');

    openBtn.addEventListener('click', () => {
        const password = passwordInput.value;
        if (password === 'cyber') {
            popupMessage.textContent = "Watch the video to get the code.";
            popup.classList.remove('hidden');
            popupVideo.classList.remove('hidden');
            popupVideo.play();
        } else {
            errorMessage.classList.remove('hidden');
        }
    });

    closePopup.addEventListener('click', () => {
        popup.classList.add('hidden');
        popupVideo.classList.add('hidden');
        popupVideo.pause();
        popupVideo.currentTime = 0;
    });

    // Open a new page after the video is completed
    popupVideo.addEventListener('ended', () => {
        window.location.href = 'Webpage2/lastcode.html';  
    });

    fileLink.addEventListener('click', (event) => {
        event.preventDefault();
        popup.classList.remove('hidden');
        popupMessage.textContent = "Enter the correct password to watch the video.";
    });
});

