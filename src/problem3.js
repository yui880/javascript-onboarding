function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += calcApplause(i);
  }
  return answer;
}

const calcApplause = (num) => {
  const regex = /[^369]/g;
  return num.toString().replace(regex, "").length;
};

module.exports = problem3;
