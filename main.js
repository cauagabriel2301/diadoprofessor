document.addEventListener("DOMContentLoaded", function () {
    var mensagem = document.getElementById("mensagem");
    var mostrarMensagemBtn = document.getElementById("mostrarMensagem");

    mostrarMensagemBtn.addEventListener("click", function () {
        mensagem.innerHTML = "Queridos professores, hoje é o dia de celebrar vocês, " +
        "os verdadeiros heróis que moldam mentes e inspiram sonhos. " +
        "Em cada sala de aula, vocês desempenham um papel vital na formação do futuro. " +
        "Seu comprometimento, paixão e dedicação são admiráveis e dignos de reconhecimento. " +
        "Feliz Dia dos Professores!";
    });
});

