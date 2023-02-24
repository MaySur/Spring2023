let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
for(let i in spaceship.crew){

  //console.log(`${i} : ${spaceship.crew[i].name}`)
}

for(let i in spaceship.crew){

    //console.log(`${spaceship.crew[i].name} : ${spaceship.crew[i].degree}`)
  }

  const robot = {
    model: 'B-4MI',
    mobile: true,
    greeting() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
  
  const massProdRobot = (model, mobile) => {
    return {
      model,
      mobile,
      greeting() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
      }
    }
  }
  
  const shinyNewRobot = massProdRobot('TrayHax', true)
  
  const chargingStation = {
    _name: 'Electrons-R-Us',
    _robotCapacity: 120,
    _active: true,
    _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],
  
    set robotCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._robotCapacity = newCapacity;
      } else {
        console.log(`Change ${newCapacity} to a number.`)
      }
    },
    get robotCapacity() {
      return this._robotCapacity;
    }
  }
  