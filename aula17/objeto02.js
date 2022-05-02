let carro = {
    marca: 'Tesla',
    modelo:'Model 3',
    cor: 'Branca',
    km: 0,
    andar: function(distancia){
        this.km = this.km + distancia;
        return 'andar';
        return this.km;
    }
};
carro.andar(10)
console.log(carro.km)
