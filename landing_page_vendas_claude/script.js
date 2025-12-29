// ========================================
// SMOOTH SCROLL PARA NAVEGAÇÃO
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// EXIBIR RESUMO DA COMPRA
// ========================================
const btnComprar = document.getElementById('btnComprar');
const resumoCompra = document.getElementById('resumoCompra');

if (btnComprar && resumoCompra) {
    btnComprar.addEventListener('click', () => {
        resumoCompra.style.display = 'block';
        
        // Scroll suave até o resumo
        resumoCompra.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });

        // Feedback visual no botão
        btnComprar.textContent = 'Produto Adicionado ✓';
        btnComprar.style.backgroundColor = '#3EA65F';
        
        setTimeout(() => {
            btnComprar.textContent = 'Comprar Agora';
            btnComprar.style.backgroundColor = '';
        }, 2000);
    });
}

// ========================================
// CONFIRMAÇÃO DE PEDIDO
// ========================================
const btnConfirmar = document.querySelector('.purchase__summary-confirm');

if (btnConfirmar) {
    btnConfirmar.addEventListener('click', () => {
        // Simula confirmação (em produção, integraria com gateway de pagamento)
        alert('Obrigado pela sua compra!\n\nVocê receberá um e-mail de confirmação com os detalhes do pedido e o código de rastreamento assim que o produto for despachado.\n\nPrazo de entrega: 2 a 10 dias úteis.');
        
        // Reset do resumo
        if (resumoCompra) {
            resumoCompra.style.display = 'none';
        }
        
        // Scroll para o topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// HEADER FIXO COM SOMBRA AO SCROLL
// ========================================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});