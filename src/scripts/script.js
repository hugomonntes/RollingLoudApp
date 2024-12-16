const countries = document.querySelectorAll('.country');

const targetDates = {
    miami: new Date(2025, 2, 23).getTime(),
    germany: new Date(2025, 4, 17).getTime(),
    portugal: new Date(2025, 6, 7).getTime()
};

function updateCountdown(country) {
    const now = new Date().getTime();
    const countryName = country.dataset.country;
    const timeLeft = targetDates[countryName] - now;

    const countdownElement = country.querySelector('.countdown');
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownElement.textContent = `Event started!`;
    }
}

countries.forEach(country => {
    let countdownInterval;

    country.addEventListener('mouseenter', () => {
        const dateElement = country.querySelector('.date');
        const countdownElement = country.querySelector('.countdown');

        dateElement.style.display = 'none';
        countdownElement.style.display = 'block';

        updateCountdown(country);
        countdownInterval = setInterval(() => updateCountdown(country), 1000);
    });

    country.addEventListener('mouseleave', () => {
        const dateElement = country.querySelector('.date');
        const countdownElement = country.querySelector('.countdown');

        countdownElement.style.display = 'none';
        dateElement.style.display = 'block';

        clearInterval(countdownInterval);
    });

    country.addEventListener('click', () => {
        const countryName = country.dataset.country;
        window.location.href = `${countryName}.html`;
    });
});
