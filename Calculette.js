class Calculette {

    constructor(nombre1, nombre2) {
        this.nombre1 = this.checkIsNaNState(nombre1);
        this.nombre2 = this.checkIsNaNState(nombre2);
    }n

    checkIsNaNState(value)
    {
        if(isNaN(value)) throw new TypeError('This value is not a number')
        return value
    }
    add() {
        return this.nombre1 + this.nombre2;
    }

    subnotract() {
        return this.nombre1 - this.nombre2;
    }

    times() {
        return this.nombre1 * this.nombre2;
    }

    divide() {
        return this.nombre1 / this.nombre2;
    }

    modulo() {
        return this.nombre1 % this.nombre2;
    }
}