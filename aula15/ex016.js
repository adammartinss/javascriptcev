let num = [5, 8, 2, 9, 3]
num[5] = 6 //coloca um valor na posição manualmente
num.push(7)//empurra diretamente o valor para a ultima posição do array automaticamente

console.log(`esse é o vetor ${num}`)
console.log(`há ${num.length} posiçoes`)
console.log(num[0])
//num.sort() = ordena os elementos do vetor
let pos = num.indexOf(4)//posição do valor 3
if (pos == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor está na posição ${pos}`);
}
