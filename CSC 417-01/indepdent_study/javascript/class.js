class crew {
    constructor(name) {
        this._name = name;
        this._attack = 0;
      }
    get name (){
        return this._name
    }
    get attack() {
        return this._attack
    }

    attackPower(){
        this._attack++
    }
}

let luffy = new crew('Luffy')
console.log(luffy.name)
console.log(luffy.attack)
luffy.attackPower()
luffy.attackPower()
luffy.attackPower()
console.log(luffy.attack)
