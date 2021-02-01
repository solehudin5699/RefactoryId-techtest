const data = require("./data.json");

//1.	Find users who doesn't have any phone numbers.
const userWithoutPhone = data.filter((user) => {
  return !user.profile.phones.length;
});

// console.log(userWithoutPhone);

//2.	Find users who have articles.
const userHaveArticle = data.filter((user) => {
  return user["articles:"].length;
});
// console.log(userHaveArticle);

//3.	Find users who have "annis" on their name.
const userAnnis = data.filter((user) => {
  return user.profile.full_name.toLowerCase().includes("annis");
});
// console.log(userAnnis);

//4.	Find users who have articles on year 2020.
const haveArticle2020 = data.filter((user) => {
  return user["articles:"].some(
    (item) => Number(item.published_at.substring(0, 4)) === 2020
  );
});
// console.log(haveArticle2020);

//5.	Find users who are born on 1986.
const born1986 = data.filter((user) => {
  return Number(user.profile.birthday.substring(0, 4)) === 1986;
});
// console.log(born1986);

//6.	Find articles that contain "tips" on the title.
const articlesByTitle = data
  .filter((user) => {
    return (
      user["articles:"].length &&
      user["articles:"].some((item) =>
        item.title.toLowerCase().includes("tips")
      )
    );
  })
  .map((user) =>
    user["articles:"].filter((article) =>
      article.title.toLowerCase().includes("tips")
    )
  );
let finalResult = [];
articlesByTitle.map((article) => {
  for (let i = 0; i < article.length; i++) {
    finalResult.push(article[i]);
  }
});
// console.log(finalResult);

//7.	Find articles published before August 2019.
const articlesByDate = data
  .filter((user) => {
    return user["articles:"].length;
  })
  .map((user) =>
    user["articles:"].filter((article) => article.published_at < "2019-08")
  );
let result = [];
articlesByDate.map((article) => {
  for (let i = 0; i < article.length; i++) {
    result.push(article[i]);
  }
});
console.log(result);
