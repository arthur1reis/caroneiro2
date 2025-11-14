const mensagens = document.getElementById("mensagens");
const btnEnviar = document.getElementById("btnEnviar");
const msgInput = document.getElementById("msgInput");

btnEnviar.onclick = () => {
    const texto = msgInput.value.trim();
    if (texto === "") return;

    const div = document.createElement("div");
    div.className = "msg";
    div.textContent = texto;
    mensagens.appendChild(div);

    msgInput.value = "";
    mensagens.scrollTop = mensagens.scrollHeight;
};
