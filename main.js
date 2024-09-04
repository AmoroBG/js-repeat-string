const repeatString = (string, times) => {
  if (times < 0) return "ERROR";
  let repeatedString = "";
  for (let i = 1; i <= times; i++) {
    repeatedString += string;
  }
  console.log(repeatedString);
  return repeatedString;
};

repeatString("hello", 1);
