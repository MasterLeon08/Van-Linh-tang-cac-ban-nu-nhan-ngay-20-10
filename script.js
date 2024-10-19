function showGreeting() {
    // Hiển thị lời chúc
    document.getElementById('greeting').classList.remove('hidden');

    // Tạo hiệu ứng mưa trái tim
    const duration = 5 * 1000; // Thời gian mưa kéo dài 5 giây
    const animationEnd = Date.now() + duration;

    const defaults = { 
        startVelocity: 20, 
        spread: 360, 
        ticks: 60, 
        zIndex: 0, 
        shapes: ['heart'], // Hình dạng các hạt mưa (trái tim)
        colors: ['#ff69b4', '#ff1493', '#ff6ec7'] // Màu sắc các hạt
    };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.9), y: 0 } }));
    }, 250);
}
