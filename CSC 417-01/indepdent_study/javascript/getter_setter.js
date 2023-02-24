const name = {
    _birthname : '',
    firstName : 'Sanji',
    lastName : 'Vinsmoke',
    get fullName(){
        if (this.firstName && this.lastName){
            return `${this.lastName}, ${this.firstName}`
        }
    }
}
name.fullName
/*
const crew = {
    _future_crew : 'Yamato',
    _crewmate: '',
    set crewmate (name) { 
        for (i in ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji', 'Chopper', 'Robin', 'Franky', 'Brook', 'Jimbie']){
            if (i === name){
                this._crewmate = name
                return `${this._crewmate} is a Strawhat!`
            }else if (name === this._future_crew){
                return 'Shhhh no spoilers'
                
            }else{
                return 'Not a Straw Hat'
                
            }
        }
    }


}
crew.crewmate = 'Luffy'
console.log(crew._crewmate)
*/

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
  
    set numOfSensors (num){
      if (typeof num === 'number' && num >= 0){
        this._numOfSensors = num
      } else{
        console.log('Pass in a number that is greater than or equal to 0')
      }
  
      }
    
  }
  
  robot.numOfSensors = 100
  
  console.log(robot.numOfSensors)
  
  
  