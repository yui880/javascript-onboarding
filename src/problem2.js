function problem2(cryptogram) {
  const stack = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; i++) {
    if (stack[stack.length - 1] !== cryptogram[i]) {
      stack.push(cryptogram[i]);
      continue;
    }
    while (stack[stack.length - 1] !== cryptogram[i]) {
      i++;
    }
    stack.pop();
  }
  return stack.join("");
}

module.exports = problem2;
