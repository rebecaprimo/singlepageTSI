//exercícios 1 e 2
function mostrarLembrete() {
    console.log("Water the plants.");
}

mostrarLembrete();

//exercícios 3 e 4
function saudacaoEmEspanhol(){
    console.log("Buenas tardes.");
}

//exercícios 5, 6, 7
function agradecerCliente(){
    console.log("Thank you for your purchase! We appreciate your business.");
}

agradecerCliente();

let rep = 0;
while (rep < 3) {
    agradecerCliente;
    rep++;
}

//exercícios 8, 9 e 10
function agradecerCliente(nome) {
    console.log("Thank you for your purchase " + nome + "! We appreciate your business.");
}

agradecerCliente("Cole");

//exercício 11
function criarListaDeCompras(item1, item2, item3) {
    console.log("Compre: " + item1 + ", " + item2 + " e " + item3);
}

criarListaDeCompras("Leite", "Pão", "Ovos");

//exercício 12
function contarMonitores(linhas, colunas){
    return linhas * colunas;
}

let numeroDeMonitores = contarMonitores(5, 4);
print(numeroDeMonitores);

function custoDosMonitores(linhas, colunas){
    return contarMonitores() * 200;
}

let custoTotal = custoDosMonitores(5, 4);

//exercício 13
const plantaPrecisaDeAgua = dia =>{
    if (dia == "Wednesday"){
        return true;
    } else {
        return false;
    }
}

plantaPrecisaDeAgua("Tuesday");