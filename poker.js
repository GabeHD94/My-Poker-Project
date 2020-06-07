class Cards {
    constructor () {
        this.suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
        this.value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    }
    randomGenerator() {
        let value = this.value[Math.floor(Math.random()*this.value.length)];
        let suit = this.suits[Math.floor(Math.random()*this.suits.length)];
        return `${value} of ${suit}`
        }

    theBots() {
        let name = "R2D2"
        let card = randomGenerator()
        return name + card;
    }

}


let randoCard = new Cards()
console.log(randoCard.theBots())
// console.log("R2D2:",randoCard.randomGenerator())
// console.log("Alexa:",randoCard.randomGenerator())
// console.log("Vincent Van Gogh Bot:",randoCard.randomGenerator())