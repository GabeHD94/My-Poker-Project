console.log("Welcome! Buy in is $500!")
console.log("")
console.log("Draw a card, depending on what it is, you will either win or lose money")
console.log("")
console.log("Here are the rules!")
console.log("-If it's higher than 8, you win $500!")
console.log("-If it's higher than 10, you win $1000!")
console.log("-If you get K of Diamonds, you win $2000!")
console.log("-If it's lower than 8, you lose $500!")
console.log("-Aces count as 1")
console.log("")
const menu = prompt("Press enter to draw!");



class Cards {
    constructor () {
        this.suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
        this.value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        this.money = 500
    }
    randomGenerator() {
        let value = this.value[Math.floor(Math.random()*this.value.length)];
        let suit = this.suits[Math.floor(Math.random()*this.suits.length)];
        let thecard = `${value} of ${suit}`
        let wallet = this.money
        if (value > 8) {
            wallet += 500;
        console.log(`${thecard} You Won! You now have $${wallet}`) 
        }else if (value < 8) {
            wallet -= 500
            console.log(`${thecard} You lose! You now have $${wallet}`)
        }
            

    }
}




let thecard = new Cards();
thecard.randomGenerator();
