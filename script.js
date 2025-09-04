// Script para la página de felicitación por 9 meses
// Funcionalidades interactivas y efectos visuales

// Crear corazones flotantes
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Crear corazones cada 2 segundos
setInterval(createFloatingHearts, 2000);

// Función para mostrar mensajes de amor aleatorios
function showLove() {
    const messages = [
        "¡Te amo más que ayer pero menos que mañana! 💕",
        "Eres el amor de mi vida 💖",
        "Contigo todo es perfecto ✨",
        "Gracias por estos 9 meses maravillosos 🌟",
        "Eres mi sueño hecho realidad 💫",
        "Cada día contigo es un regalo del cielo 🌈",
        "Tu sonrisa ilumina mi mundo entero ☀️",
        "Eres mi felicidad, mi todo, mi amor 💝"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}

// Función para mostrar mensajes especiales aleatorios
function showSpecialMessage() {
    const specialMessages = [
        "🎵 Cada día contigo es una nueva canción de amor 🎵",
        "🌙 Eres la luz que ilumina mis noches más oscuras 🌙",
        "🌈 Contigo he encontrado todos los colores del arcoíris 🌈",
        "⭐ Eres mi estrella más brillante ⭐",
        "🌹 9 meses de rosas, 9 meses de amor 🌹",
        "🦋 Contigo siento que puedo volar alto 🦋",
        "🌺 Eres la flor más hermosa de mi jardín 🌺",
        "💎 Eres mi tesoro más preciado 💎"
    ];
    
    const randomSpecial = specialMessages[Math.floor(Math.random() * specialMessages.length)];
    alert(randomSpecial);
}


// Efectos de hover en la imagen del paisaje
document.addEventListener('DOMContentLoaded', function() {
    const landscapeImage = document.querySelector('.landscape-image');
    
    if (landscapeImage) {
        landscapeImage.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1)';
            this.style.transform = 'scale(1.05)';
        });

        landscapeImage.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1)';
            this.style.transform = 'scale(1)';
        });
    }
});

// Función para agregar efecto de confeti al hacer clic en los botones
function addConfettiEffect() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        document.body.appendChild(confetti);
        
        const animation = confetti.animate([
            { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        animation.onfinish = () => confetti.remove();
    }
}

// Agregar efecto de confeti a los botones de amor
document.addEventListener('DOMContentLoaded', function() {
    const loveButtons = document.querySelectorAll('.love-button');
    
    loveButtons.forEach(button => {
        button.addEventListener('click', addConfettiEffect);
    });
});

// Función para mostrar un mensaje especial cada cierto tiempo
function showPeriodicMessage() {
    const periodicMessages = [
        "💕 ¿Sabías que cada segundo que paso contigo es un regalo?",
        "🌟 Eres mi inspiración diaria",
        "💖 Gracias por ser exactamente como eres",
        "✨ Contigo todo es posible"
    ];
    
    const randomPeriodic = periodicMessages[Math.floor(Math.random() * periodicMessages.length)];
    
    // Crear una notificación elegante en lugar de un alert
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #fd79a8 0%, #e84393 100%);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        font-size: 14px;
        max-width: 300px;
        animation: slideIn 0.5s ease-out;
    `;
    
    notification.innerHTML = randomPeriodic;
    document.body.appendChild(notification);
    
    // Agregar animación CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Remover la notificación después de 4 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-in';
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// Mostrar mensaje periódico cada 30 segundos
setInterval(showPeriodicMessage, 30000);
