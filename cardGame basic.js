//Andrew. This is a card game inside of 1 object. Start the game by calling the different methods of the gameDeck object.


const gameDeck = {
  deck: [],
  cardSuits: ['hearts', 'diamonds', 'spades', 'clubs'],
  cardValue: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  makeDeck() {
    const {
      deck,
      cardSuits,
      cardValue
    } = this;
    for (let suit of cardSuits) {
      for (let card of cardValue) {
        deck.push({
          card,
          suit
        });
      }
    }
  },
  pickedDeck: [],
  pickCard() {
    const {
      deck,
      pickedDeck
    } = this;
    let chosenCard = deck.pop();
    console.log(`Dealt card : ${chosenCard}`);
    pickedDeck.push(chosenCard);
    console.log(`Number of cards in pickedDeck: ${pickedDeck.length}`);
    console.log(pickedDeck);
  },
  currentCard() {
    const {
      pickedDeck
    } = this;
    console.log(pickedDeck[pickedDeck.length - 1]);
  },
  shuffleCards() {
    const {
      deck
    } = this;
    for (let a = deck.length - 1; a > 0; a--) {
      let b = Math.floor(Math.random() * (a + 1));
      [deck[a], deck[b]] = [deck[b], deck[a]];
    }
  }

}