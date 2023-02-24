const robotFactory = (model, mobile) =>{
    return{
    model: model,
    mobile: mobile,
    beep() {
      return 'Beep Boop'
    }
    }
  }
  
  const tinCan = robotFactory('P-500', true)
  console.log(tinCan.model)
  const stupidBot = robotFactory('P', false)
  console.log(stupidBot.model)
  const moenyBot = robotFactory('Gold-696', true)
  console.log(moenyBot.mobile)