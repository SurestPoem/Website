function changeText() {
    alert("Sigma Sigma on the wall, whose the skibidiest of them all");
}

function redirect() {
    window.open("https://youtu.be/dQw4w9WgXcQ?si=oJQ871mySUGnJNl9", "_blank");
    document.getElementById("text").innerHTML = "Reddit-ahh humor mb";
}

document.addEventListener('DOMContentLoaded', () => {
    // Ensure it only affects the gallery images
    document.querySelectorAll('.gallery-grid img').forEach(img => {
        img.addEventListener('click', () => {
            let lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.innerHTML = `
                <span class="close-btn">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
            `;
            document.body.appendChild(lightbox);

            // Close the lightbox when clicking the close button
            lightbox.querySelector('.close-btn').addEventListener('click', () => {
                document.body.removeChild(lightbox);
            });
        });
    });
});