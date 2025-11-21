document.addEventListener('DOMContentLoaded', () => {
    console.log('Site carregado com sucesso!');

    // Rolagem suave para links do menu
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 150, // ajusta para header fixo
                    behavior: 'smooth'
                });
            }
        });
    });

    // Validação simples do formulário
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
    });
});
