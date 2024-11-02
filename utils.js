const getCurrentTimeStamps = () => {
  return Math.floor(Date.now() / 1000);
};

const generateNonce = () => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let nonce = "";
  for (let i = 0; i < 10; i++) {
    nonce += chars[Math.floor(Math.random() * chars.length)];
  }
  return nonce;
};

function removeSpecialCharacters(str) {
  return str.replace(/[^\w\s,."'#!]/gi, "");
}

let postTopics = ["Example Topics"];
function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

export {
  getCurrentTimeStamps,
  generateNonce,
  postTopics,
  getRandomNumber,
  removeSpecialCharacters,
};
