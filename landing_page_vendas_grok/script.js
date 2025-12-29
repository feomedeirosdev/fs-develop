// Contador simples de oferta (24h a partir de agora)
function startCountdown() {
    const end = new Date().getTime() + 24 * 60 * 60 * 1000;
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = end - now;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').textContent = 'Oferta encerrada';
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('countdown').textContent =
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Modal resumo da compra
const modal = document.getElementById('modal');
const openBtn = document.getElementById('open-modal');
const closeBtn = document.getElementById('close-modal');

openBtn.onclick = () => modal.classList.add('modal--active');
closeBtn.onclick = () => modal.classList.remove('modal--active');
window.onclick = (e) => {
    if (e.target === modal) modal.classList.remove('modal--active');
};

startCountdown();