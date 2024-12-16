const targetDate = new Date(2025, 2, 14).getTime(); // Fecha límite del contador en este caso 14/Marzo/2025 (Marzo es el 2 porque el array comienza en 0 (Enero)).
const countries = document.querySelectorAll('.country');

        /**
         * Actualiza la cuenta atrás desde hoy hasta la targetDay
         */
        function updateCountdown() {
            const now = new Date().getTime(); // Fecha Actual
            const timeLeft = targetDate - now; // Tiempo restante

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = `${days} DAYS ${hours} HOURS ${minutes} MINUTS ${seconds} SECONDS`;
        }
        setInterval(updateCountdown, 0);

        /**
         * Si el div de country tiene el blur, una vez se haga hover se le quita.
         */
        countries.forEach(country => {
            country.addEventListener('mouseover', () => {
                if (!country.classList.contains('unlocked')) {
                    country.classList.add('unlocked');
                }
            });
        });
