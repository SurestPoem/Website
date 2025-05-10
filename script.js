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

            // Close when clicking the 'X'
            lightbox.querySelector('.close-btn').addEventListener('click', () => {
                lightbox.remove();
            });

            // Close when clicking outside the .lightbox-content
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.remove();
                }
            });
        });
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const lightbox = document.querySelector('.lightbox');
        if (lightbox) lightbox.remove();
    }
});