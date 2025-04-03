function bestPokerHand(cards) {
  // Make sure there are exactly 5 cards
  if (cards.length !== 5) {
    throw new Error("A poker hand must contain exactly 5 cards");
  }

  // A valid card must be a number 1-10 followed by one of the letters: H, S, C or D
  const cardRegex = /^(10|[1-9])[HSCD]$/;
  cards.forEach((card) => {
    if (!cardRegex.test(card)) {
      throw new Error(`Invalid card format: ${card}`);
    }
  });

  // Get the card values and symbols
  const values = cards.map((card) => card.slice(0, -1));
  const symbols = cards.map((card) => card.slice(-1));

  // Count how many times each value appears
  const valueCount = {};
  values.forEach((value) => {
    if (!valueCount[value]) {
      valueCount[value] = 1;
    } else {
      valueCount[value]++;
    }
  });

  // Count how many times each symbol appears
  const symbolCount = {};
  symbols.forEach((symbol) => {
    if (!symbolCount[symbol]) {
      symbolCount[symbol] = 1;
    } else {
      symbolCount[symbol]++;
    }
  });

  const isFlush = Object.values(symbolCount).includes(5);
  const valueOccurrences = Object.values(valueCount).sort((a, b) => b - a);

  if (isFlush) return "Flush";
  if (valueOccurrences.includes(3)) return "Three of a Kind";
  if (valueOccurrences.includes(2)) return "Pair";

  return "High Card";
}

console.log(bestPokerHand(["10C", "4C", "2C", "7C", "9C"]));
console.log(bestPokerHand(["5H", "3C", "1S", "5D", "5S"]));
console.log(bestPokerHand(["4D", "6D", "8H", "1S", "8C"]));
console.log(bestPokerHand(["3H", "2D", "8C", "5S", "9H"]));
