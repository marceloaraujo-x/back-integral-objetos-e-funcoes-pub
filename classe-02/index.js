const carro = {
    ligado: false,
    valocidade: 0,
    ligar: function () {
        if (this.ligado) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            console.log(`Carro ligado. Velocidade: ${this.valocidade}`);
        }
    },
    desligar: function () {
        if (!this.ligado) {
            console.log("Este carro já está desligado.");
        } else {
            this.ligado = false;
            this.valocidade = 0;
            console.log(`Carro desligado. Velocidade ${this.valocidade}`);
        }
    },
    acelerar: function () {
        if (!this.ligado) {
            console.log("Não é possível acelerar um carro desligado.");
        } else {
            this.valocidade += 10;
            console.log(`Carro ligado. Velocidade: ${this.valocidade}`);
        }
    },
    desacelerar: function () {
        if (!this.ligado) {
            console.log("Não é possível desacelerar um carro desligado.");
        } else {
            this.valocidade -= 10;
            console.log(`Carro ligado. Velocidade: ${this.valocidade}`);
        }
    }
};
carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();