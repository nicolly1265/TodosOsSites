const usuarios = [ 
    // criando uma lista(array)
    {nome: "Carlos", idade: 32 },
    {nome: "Ana", idade: 28 },
    {nome: "Felipe", idade: 40}
];
// Encontrando um objeto - o find vai buscar - === exatamente igual
const ana = usuarios.find(usuario => usuario.nome === "Ana");
console.log(ana);

// Filtrando objetos
const usuariosAcimaDe30 = usuarios.filter(usuario => usuario.idade > 30);
console.log(usuariosAcimaDe30);

// Ordenando objetos por idade
const usuariosOrdenandoPorIdades = usuarios.sort((a, b) => b.idade - a.idade);
console.log(usuariosOrdenandoPorIdades);


// Ordenando objetos por idade
const usuariosOrdenandoPorIdade = usuarios.sort((a, b) => a.idade - b.idade);
console.log(usuariosOrdenandoPorIdade);