const calSupply = (age, amountPerDay) =>{
    let amount = (100- age) * (amountPerDay*365)
    return `You will need ${amount} to last until the ripe old age of ${100}`
}

console.log(calSupply(21, 5))