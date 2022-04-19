const connection = require("../database/connection");
const { createUser, deleteAll, findAll } = require("../database/queries/users");

test("hello", () => {
  const users = [
    {
      firstName: "Farah",
      lastName: "Zaqout",
      age: 28,
      city: "Gaza",
    },
    {
      firstName: "ibrahim",
      lastName: "helou",
      age: 21,
      city: "gazoza",
    },
  ];

  // insert new user
  return findAll([...users]).then((res) => { 
    expect(res.firstName).toBe(users.firstName);
  });
});

afterAll(() => connection.close());

return createUser(user)
.then(( res ) => {
    console.log(res);
    expect(res.firstName).toBe(user.firstName);
    expect(res.lastName).toBe(user.lastName);
  });
});
