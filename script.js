// Анимация появления элементов при скролле
document.addEventListener('DOMContentLoaded', function() {
    // Наблюдатель для анимации появления
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
    
    // Наблюдаем за всеми элементами с классами анимации
    document.querySelectorAll('.fade-in, .slide-up').forEach(element => {
        observer.observe(element);
    });
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Анимация кругов на таймлайне при наведении
    const timelineSteps = document.querySelectorAll('.timeline-step');
    timelineSteps.forEach(step => {
        step.addEventListener('mouseenter', function() {
            const circle = this.querySelector('.step-circle');
            circle.style.transform = 'scale(1.1)';
        });
        
        step.addEventListener('mouseleave', function() {
            const circle = this.querySelector('.step-circle');
            circle.style.transform = 'scale(1)';
        });
    });
    
    // Анимация иконок в карточках проблем
    const painCards = document.querySelectorAll('.pain-card');
    painCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.pain-icon i');
            icon.style.transform = 'scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.pain-icon i');
            icon.style.transform = 'scale(1)';
        });
    });
    
    // Анимация для кнопок при наведении
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Динамическое изменение года в футере
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Анимация для стрелки в блоке решения
    const solutionArrow = document.querySelector('.solution-arrow');
    if (solutionArrow) {
        solutionArrow.addEventListener('click', function() {
            document.querySelector('.process').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Эффект параллакса для hero визуала
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroVisual && window.innerWidth > 768) {
            heroVisual.style.transform = `translateY(-50%) translateY(${scrolled * 0.05}px)`;
        }
    });
});
