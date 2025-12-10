// Минимальный JavaScript для интерактивности
document.addEventListener('DOMContentLoaded', function() {

    // Анимация курсора в терминале
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = (cursor.style.opacity === '0' ? '1' : '0');
        }, 500);
    }

    // Плавное появление секций при скролле
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Назначаем анимацию на секции
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Простое изменение статуса в заголовке для "живости"
    const statusLabel = document.querySelector('.status-label');
    if (statusLabel) {
        const originalText = statusLabel.textContent;
        const statusVariants = ['Доступен для проектов', 'Открыт к предложениям', 'В сети'];
        
        setInterval(() => {
            if (Math.random() > 0.9) {
                const randomStatus = statusVariants[Math.floor(Math.random() * statusVariants.length)];
                statusLabel.textContent = randomStatus;
                
                setTimeout(() => {
                    statusLabel.textContent = originalText;
                }, 2000);
            }
        }, 8000);
    }

    // Плавный скролл для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
