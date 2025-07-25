function fibs(n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }
  res = [0, 1];
  for (let i = 3; i <= n; i++) {
    res.push(res.at(-1) + res.at(-2));
  }
  return res;
}

function fibsRec(n) {
  console.log("This was implemented recursively.");
  if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  }
  res = fibsRec(n - 1);
  res.push(res.at(-1) + res.at(-2));
  return res;
}

console.log(fibsRec(8));
