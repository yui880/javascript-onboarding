function problem5(money) {
  const coin = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];

  for (let i = 0; i < coin.length; i++) {
    const count = Math.floor(money / coin[i]);
    answer.push(count);
    money = money - coin[i] * count;
  }
  return answer;
}

module.exports = problem5;
