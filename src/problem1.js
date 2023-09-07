const makeDigit = (page) => {
  return page.toString().split("").map(Number);
};

const findMax = (nums) => {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  const multiple = nums.reduce((acc, cur) => acc * cur, 1);

  return Math.max(sum, multiple);
};

const calculateScore = (pages) => {
  const left = makeDigit(pages[0]);
  const right = makeDigit(pages[1]);

  return Math.max(findMax(left), findMax(right));
};

const getPageIsValid = (pages) => {
  const [left, right] = pages;
  if (right - left !== 1) return false;
  if (right === 1 || left === 400) return false;
  return true;
};

function problem1(pobi, crong) {
  if (!getPageIsValid(pobi) || !getPageIsValid(crong)) return -1;

  const pobiScore = calculateScore(pobi);
  const crongScore = calculateScore(crong);

  if (pobiScore > crongScore) return 1;
  if (pobiScore < crongScore) return 2;
  if (pobiScore === crongScore) return 0;
}

module.exports = problem1;
