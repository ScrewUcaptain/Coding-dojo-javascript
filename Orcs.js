class Creature {
    constructor(name,age,strength) {
        this.name = name
        this.age = age
        this.strength = strength
    }

    saySomething(words) {
        console.log(this.name + " says " + words)
    }

    identity() {
        console.log(`
      NOM : ${this.name},
      AGE : ${this.age},
      STRENGTH : ${this.strength}`
      );
    }
}

class Orc extends Creature {
    constructor(name, age, strength) {
        super(name,age,strength)
    }

    scream(words) {
        console.log(words.toUpperCase())
    } 

    bite(someone) {
        console.log(`${this.name} bite ${someone}`)
    }
}

class Urukhai extends Orc {
    constructor(name, strength) { 
    super(name, null, strength + 10)
    }

    kill (someone) {

        if (!(someone instanceof Creature)) {
            throw new Error("`someone` is not a Creature");
        }

        console.log(`${this.name} killed ${someone.name}`)
    }
    
}

class ChiefOrc extends Orc {
    constructor(isChief) {
        super(name, age, strength + 2)
        
        this.isChief = isChief
        
    }

    giveOrder(someone) {
        console.log(`${this.name} gave an order to ${someone}`)
    }

}

let bill = new Orc("Bill", 25, 40)

console.log(bill.identity())