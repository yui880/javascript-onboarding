function problem7(user, friends, visitors) {
  const classifiedFriends = classifyFriends(friends);
  const friendScore = findMutualFriends(user, classifiedFriends);
  const visitorScore = countVisitors(visitors);
  const totalScore = calcScore(friendScore, visitorScore);
  const excludedScore = excludeFriends(classifiedFriends[user], totalScore);
  const sortedScore = sortScore(excludedScore);
  return sortedScore;
}

const classifyFriends = (friends) => {
  const friendsObj = {};
  for (const friend of friends) {
    !friendsObj[friend[0]]
      ? (friendsObj[friend[0]] = [friend[1]])
      : friendsObj[friend[0]].push(friend[1]);
    !friendsObj[friend[1]]
      ? (friendsObj[friend[1]] = [friend[0]])
      : friendsObj[friend[1]].push(friend[0]);
  }
  return friendsObj;
};

const findMutualFriends = (user, friends) => {
  const countObj = {};
  for (const key in friends) {
    if (key === user) continue;
    const tempPerson = friends[key].filter((person) => person !== user);
    const tempUser = friends[user].filter((person) => person !== key);
    const union = [...tempPerson, ...tempUser];
    const intersection = union.length - new Set(union).size;
    countObj[key] = intersection;
  }
  delete countObj[user];
  return countObj;
};

const countVisitors = (visitors) => {
  const countObj = {};
  for (const person of visitors) {
    countObj[person] = visitors.filter((p) => p === person).length;
  }
  return countObj;
};

const calcScore = (friendScore, visitorScore) => {
  const totalScore = {};
  const score = [];
  for (const friend in friendScore) {
    totalScore[friend] = friendScore[friend] * 10;
  }
  for (const visitor in visitorScore) {
    if (totalScore[visitor]) totalScore[visitor] += visitorScore[visitor];
    else totalScore[visitor] = visitorScore[visitor];
  }
  for (const key in totalScore) {
    score.push([key, totalScore[key]]);
  }
  return score;
};

const excludeFriends = (friends, score) => {
  for (const person of friends) {
    score = score.filter((s) => s[0] !== person);
  }
  return score;
};

const sortScore = (score) => {
  const ranked = [];
  score.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] <= b[1]) return 1;
  });
  for (let i = 0; i < 5; i++) {
    if (!score[i]) continue;
    if (score[i][0] === 0) continue;
    ranked.push(score[i][0]);
  }
  return ranked;
};

// problem7(
//   "mrko",
//   [
//     ["donut", "andole"],
//     ["donut", "jun"],
//     ["donut", "mrko"],
//     ["shakevan", "andole"],
//     ["shakevan", "jun"],
//     ["shakevan", "mrko"],
//   ],
//   ["bedi", "bedi", "donut", "bedi", "shakevan"],
// );

module.exports = problem7;
