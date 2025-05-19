function changeText() {
    alert("Sigma Sigma on the wall, whose the skibidiest of them all");
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery-grid img').forEach(img => {
        img.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');

            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close-btn">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;

            document.body.appendChild(lightbox);

            // Close function
            const closeLightbox = () => {
                lightbox.remove();
                document.removeEventListener('keydown', escHandler); // Clean up!
            };

            // Escape key handler
            const escHandler = (e) => {
                if (e.key === 'Escape') {
                    closeLightbox();
                }
            };

            // Close on X
            lightbox.querySelector('.close-btn').addEventListener('click', closeLightbox);

            // Close on background click
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });

            // Attach Escape key listener
            document.addEventListener('keydown', escHandler);
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const targetDate = new Date('2026-05-26T23:59:59'); // Change to your desired date

    const countdown = () => {
        const now = new Date();
        const timeDiff = targetDate - now;

        if (timeDiff <= 0) {
            document.getElementById('countdown').innerHTML = "🎉 Time's up!";
            clearInterval(timerInterval);
            return;
        }

        const seconds = Math.floor((timeDiff / 1000) % 60);
        const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    };

    // Run every second
    const timerInterval = setInterval(countdown, 1000);
    countdown(); // Run immediately so the user sees it right away
});


  // Toggle the theme on button click
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    
    // Apply new theme and save it to localStorage
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });