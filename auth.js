// Carregar usuários do localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem("usuarios") || "[]");
}

// Salvar usuário
function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem("usuarios", JSON.stringify(users));
}

// CADASTRO
if (document.getElementById("btnCadastrar")) {
    document.getElementById("btnCadastrar").onclick = () => {
        const nome = nomeCadastro.value;
        const email = emailCadastro.value;
        const senha = senhaCadastro.value;

        saveUser({ nome, email, senha, bio: "Sem biografia ainda." });

        alert("Cadastro realizado!");
        window.location.href = "login.html";
    };
}

// LOGIN
if (document.getElementById("btnEntrar")) {
    btnEntrar.onclick = () => {
        const email = emailLogin.value;
        const senha = senhaLogin.value;

        const users = getUsers();

        const user = users.find(u => u.email === email && u.senha === senha);

        if (user) {
            localStorage.setItem("userLogado", JSON.stringify(user));
            window.location.href = "perfil.html";
        } else {
            alert("Usuário ou senha incorretos.");
        }
    };
}
