// Минимальные интерактивные эффекты
document.addEventListener('DOMContentLoaded', function() {

    // Анимация мигающего курсора в терминале
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = (cursor.style.opacity == '0' ? '1' : '0');
        }, 500);
    }

    // Плавное появление секций при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Случайный шум для статуса (для атмосферы)
    const statusText = document.querySelector('.status-text');
    const statuses = ['ONLINE', 'ACTIVE', 'STEALTH', 'SYNCING', 'PHANTOM'];
    if (statusText) {
        setInterval(() => {
            if (Math.random() > 0.7) {
                const oldText = statusText.textContent;
                statusText.textContent = statuses[Math.floor(Math.random() * statuses.length)];
                setTimeout(() => {
                    statusText.textContent = oldText;
                }, 200);
            }
        }, 3000);
    }

    // Эффект при наведении на кнопку CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(90deg, #6a11cb, #b967ff)';
        });
        ctaButton.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(90deg, #b967ff, #6a11cb)';
        });
    }
});
