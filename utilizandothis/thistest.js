
let pessoa = {
    nome: "adam",
    idade: 22,
    falar: function() {
        console.log("ola, mundo");
    },
    dizerNome:function(){
        console.log(`Meu nome é ${this.nome}`)
    },
    
    aniversario:function(){
           this.idade += 1 
       }
}
function showName(){
    console.log()
}
pessoa.aniversario();
pessoa.aniversario();
console.log(pessoa.idade)
pessoa.aniversario();
console.log(pessoa.idade)

pessoa.dizerNome();
