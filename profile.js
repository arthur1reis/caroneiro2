const usuario = JSON.parse(localStorage.getItem("userLogado"));

if (!usuario) {
    window.location.href = "login.html";
}

document.getElementById("nomePerfil").textContent = usuario.nome;
document.getElementById("bioPerfil").textContent = usuario.bio;
document.getElementById("fotoPerfil").src = "https://source.unsplash.com/200x200/?person";
