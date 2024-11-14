const targetDate = new Date(2025, 2, 14).getTime();
const countries = document.querySelectorAll('.country');

        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = 
                `${days} DAYS ${hours} HOURS ${minutes} MINUTS ${seconds} SECONDS`;
        }
        setInterval(updateCountdown, 0);

        countries.forEach(country => {
            country.addEventListener('mouseover', () => {
                if (!country.classList.contains('unlocked')) {
                    country.classList.add('unlocked');
                }
            });
        });
