function findMaxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = -1;
    let buyDay = -1;
    let sellDay = -1;
  
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
        buyDay = i;
      } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
        sellDay = i;
      }
    }
  
    if (maxProfit === -1) {
      return -1;
    } else {
      return `Buy on day ${buyDay + 1} at price ${prices[buyDay]}
  Sell on day ${sellDay + 1} at price ${prices[sellDay]}
  Max profit: ${maxProfit}`;
    }
  }