document.addEventListener('DOMContentLoaded', () => {
    
    const redesSociais = {
        instagram: "https://www.instagram.com/neymarjr/",
        youtube: "https://www.youtube.com/user/neymarjr",
        facebook: "https://pt-br.facebook.com/neymarjr/events/"
    };

    
    function abrirLink(escolha) {
        switch (escolha) {
            case 1:
                window.open(redesSociais.instagram, '_blank');
                break;
            case 2:
                window.open(redesSociais.facebook, '_blank');
                break;
            case 3:
                window.open(redesSociais.youtube, '_blank');
                break;
            default:
                alert("Escolha inválida.");
                break;
        }
    }

    
    const escolha = parseInt(prompt("Escolha a rede social para acessar:\n1: Instagram\n2: Facebook\n3: YouTube"), 10);
    abrirLink(escolha); 
});
