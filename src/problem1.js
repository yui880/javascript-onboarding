function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  const pobiScore = calcScore(pobi);
  const crongScore = calcScore(crong);

  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  if (pobiScore === crongScore) return 0;
}

const calcScore = (pages) => {
  const left = makeDigit(pages[0]);
  const right = makeDigit(pages[1]);

  return Math.max(findMax(left), findMax(right));
};

const makeDigit = (page) => {
  return page.toString().split("").map(Number);
};

const findMax = (nums) => {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const multiple = nums.reduce((acc, cur) => acc * cur, 1);

  return Math.max(sum, multiple);
};

module.exports = problem1;
