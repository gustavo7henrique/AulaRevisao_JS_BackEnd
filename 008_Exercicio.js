const usuario = "gustavoh";
const senha = 22;

if (usuario == "gustavoh" && senha != 22) {
    console.log(`Senha Inválida`);
    
} else if (usuario != "gustavoh" && senha == 22) {
    console.log(`Usuário Inválido`);
    
} else {
    console.log(`Usuário logado!`);
    
};