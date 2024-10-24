document.addEventListener('DOMContentLoaded', function() {
    // Mensagem de boas-vindas ao carregar a página
    console.log('Bem-vindo à Asset Marketing Digital!');
    
    // Efeito simples de animação de rolagem suave para as seções
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Verificação para o botão de login
    const loginButton = document.querySelector('.facebook-login');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            alert('Você está sendo redirecionado para o login com o Facebook.');
        });
    }
});
