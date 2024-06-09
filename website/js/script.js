document.addEventListener('DOMContentLoaded', () => {
    const customizeBtn = document.querySelector('#customizeBtn');
    const carSpec = document.querySelector('#car-spec');
    const carViews = document.querySelectorAll('.car-view');
    const viewButtons = document.querySelectorAll('#view-selector button');
    const colorDropdown = document.querySelector('#color');
    const pausePlayBtn = document.querySelector('#pausePlayBtn');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    let currentViewIndex = 0;
    let isPaused = false;
    const totalViews = carViews.length;

    // Hide specifications initially
    carSpec.style.display = 'none';

    // Display specifications when "Customize Your Car" button is clicked
    customizeBtn.addEventListener('click', () => {
        carSpec.style.display = 'block';
    });

    // Automatically slide images every 5 seconds
    let intervalId = setInterval(() => {
        if (!isPaused) {
            carViews[currentViewIndex].classList.remove('active');
            currentViewIndex = (currentViewIndex + 1) % totalViews;
            carViews[currentViewIndex].classList.add('active');
        }
    }, 5000);

    // View selector functionality
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const viewId = button.getAttribute('data-view');
            carViews.forEach(view => {
                view.classList.remove('active');
            });
            document.getElementById(viewId).classList.add('active');
            currentViewIndex = Array.from(carViews).findIndex(view => view.id === viewId);
        });
    });

    // Change car color
    colorDropdown.addEventListener('change', () => {
        const color = colorDropdown.value;
        carViews.forEach(view => {
            view.querySelector('img').style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        });
    });

    // Pause/Play slideshow
    pausePlayBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        pausePlayBtn.textContent = isPaused ? 'Play' : 'Pause';
    });

    // Previous button functionality
    prevBtn.addEventListener('click', () => {
        carViews[currentViewIndex].classList.remove('active');
        currentViewIndex = (currentViewIndex - 1 + totalViews) % totalViews;
        carViews[currentViewIndex].classList.add('active');
    });

    // Next button functionality
    nextBtn.addEventListener('click', () => {
        carViews[currentViewIndex].classList.remove('active');
        currentViewIndex = (currentViewIndex + 1) % totalViews;
        carViews[currentViewIndex].classList.add('active');
    });
});
