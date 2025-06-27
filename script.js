document.addEventListener('DOMContentLoaded', () => {
    const dvdLogo = document.getElementById('dvd-logo');
    const container = document.getElementById('dvd-container');

    let x = 0; // Initial X position
    let y = 0; // Initial Y position
    let dx = 2; // X direction speed (pixels per frame)
    let dy = 2; // Y direction speed (pixels per frame)

    // Adjust speed for different screen sizes if needed
    // You might want to make dx, dy relative to viewport dimensions
    const speedMultiplier = Math.min(window.innerWidth, window.innerHeight) / 500;
    dx *= speedMultiplier;
    dy *= speedMultiplier;

    const colors = [
        'red', 'blue', 'green', 'purple', 'orange', 'cyan', 'magenta', 'yellow', 'lime'
    ];
    let currentColorIndex = 0;

    function getRandomColor() {
        let newColorIndex;
        do {
            newColorIndex = Math.floor(Math.random() * colors.length);
        } while (newColorIndex === currentColorIndex); // Ensure color changes
        currentColorIndex = newColorIndex;
        return colors[currentColorIndex];
    }

    function animate() {
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const logoWidth = dvdLogo.offsetWidth;
        const logoHeight = dvdLogo.offsetHeight;

        // Update position
        x += dx;
        y += dy;

        // Boundary checks and bounce
        if (x + logoWidth > containerWidth) {
            x = containerWidth - logoWidth;
            dx *= -1;
            dvdLogo.style.backgroundColor = getRandomColor();
        } else if (x < 0) {
            x = 0;
            dx *= -1;
            dvdLogo.style.backgroundColor = getRandomColor();
        }

        if (y + logoHeight > containerHeight) {
            y = containerHeight - logoHeight;
            dy *= -1;
            dvdLogo.style.backgroundColor = getRandomColor();
        } else if (y < 0) {
            y = 0;
            dy *= -1;
            dvdLogo.style.backgroundColor = getRandomColor();
        }

        // Apply new position
        dvdLogo.style.transform = `translate(${x}px, ${y}px)`;

        requestAnimationFrame(animate);
    }

    // Initialize position randomly
    x = Math.random() * (container.offsetWidth - dvdLogo.offsetWidth);
    y = Math.random() * (container.offsetHeight - dvdLogo.offsetHeight);
    dvdLogo.style.backgroundColor = getRandomColor(); // Set initial random color

    animate(); // Start the animation
});