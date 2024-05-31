//================================== Swiper Config ============================================
const swiper = new Swiper('.swiper',{
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

//================================== Dropdown ============================================
function showDropdown(){
    var dropdown = document.querySelector('.dropdown');
    dropdown.style.display = 'block';
}

function hideDropdown(){
    var dropdown = document.querySelector('.dropdown');
    dropdown.style.display = 'none';
}

//================================== Enviar forms para whatsapp ============================================
function abrirWhatsapp() {
      var nome = document.getElementById("nome").value;
      var telefone = document.getElementById("telefone").value;
      var email = document.getElementById("email").value;
      var msg = document.getElementById("msg").value;
      
      var url = "https://wa.me/5511987105403?text=" // Seu numero
        + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
        + "%0a" // Quebra de linha
        + "*Nome*: " + nome + "%0a" // Dados do formulário
        + "*Telefone*: " + telefone + "%0a"
        + "*E-mail*: " + email + "%0a"
        + "*Mensagem*: " + msg;
      window.open(url, '_blank').focus();
}

 // Inicialize o Fancybox com a opção de botão de fechar
 Fancybox.bind('[data-fancybox="gallery"]', {
  Toolbar: {
      display: [
          { id: "close", position: "right" }
      ]
  },
  closeButton: "inside", // Coloca o botão de fechar dentro da imagem
});

// Copiar email ao clicar
const clipboard = new ClipboardJS('.emailBtn');
const emailElement = document.getElementById('emailBtn');

clipboard.on('success', function(e) {
    // alert("Texto copiado")
  	const originalText = emailElement.innerHTML;

    emailElement.innerHTML = 'Copiado!';
    emailElement.classList.add('copied');
    emailElement.classList.remove('emailBtn');

    setTimeout(() =>{
      emailElement.innerHTML = originalText;
      emailElement.classList.remove('copied');
      emailElement.classList.add('emailBtn');
    }, 2000);

});

clipboard.on('error', function(e) {
    alert("Falha ao copiar texto")
});