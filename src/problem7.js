const getFriendRelationship = (friends) => {
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

const getFriendScore = (scores, user, friends) => {
  const FRIEND_SCORE = 10;
  for (const key in friends) {
    if (key === user) continue;
    const tempPerson = friends[key].filter((person) => person !== user);
    const tempUser = friends[user].filter((person) => person !== key);
    const union = [...tempPerson, ...tempUser];
    const intersection = union.length - new Set(union).size;
    scores[key].friend = intersection * FRIEND_SCORE;
  }
};

const getVisitorScore = (scores, visitors) => {
  for (const person of visitors) {
    scores[person].visit = visitors.filter((p) => p === person).length;
  }
};

const calculateScore = (scores) => {
  for (const person in scores) {
    scores[person].total = scores[person].friend + scores[person].visit;
  }
};

const excludeFriends = (userFriends, scores) => {
  for (const person of userFriends) {
    delete scores[person];
  }
};

const sortScore = (scores) => {
  let scoreList = [];
  for (const person in scores) {
    scoreList.push([person, scores[person].total]);
  }
  scoreList.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    else if (a[1] > b[1]) return -1;
    else {
      if (a[0] < b[0]) return -1;
      else return 1;
    }
  });

  scoreList = scoreList.map((score) => score[0]);
  return scoreList.length < 5 ? scoreList : scoreList.slice(0, 6);
};

const getPeopleList = (user, friends, visitors) => {
  const peopleList = new Set();

  for (const friend of friends) {
    peopleList.add(friend[0]);
    peopleList.add(friend[1]);
  }
  for (const visitor of visitors) {
    peopleList.add(visitor);
  }
  peopleList.delete(user);
  return [...peopleList];
};

function problem7(user, friends, visitors) {
  const classifiedFriends = getFriendRelationship(friends);
  const people = getPeopleList(user, friends, visitors);
  const scores = {};
  people.forEach((person) => {
    scores[person] = { friend: 0, visit: 0, total: 0 };
  });

  getFriendScore(scores, user, classifiedFriends);
  getVisitorScore(scores, visitors);
  calculateScore(scores);
  excludeFriends(classifiedFriends[user], scores);
  return sortScore(scores);
}

module.exports = problem7;
