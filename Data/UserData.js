const randomEmail = getRandomEmail();

export const userData = {
  username : "Mert",
  email:'mert_tester@test.com',
  password : "test@123",
  day: "20",
  month: "3",
  year:"1996",
  firstName:"Mert",
  lastName:"Test",
  company:"Beauty Test LLC",
  streetAddress: "111 AVE",
  unitNo:"123",
  country: "United States",
  state: "New York",
  city: "Brooklyn",
  zip: "12345",
  phone:"1231231212",

  emailRandom : randomEmail,
  passwordRandom : 'testwrongpw'
}

function getRandomEmail() {
  const username = getRandomString(8);
  return username+'@test.com';
}

function getRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}