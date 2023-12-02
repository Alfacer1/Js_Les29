class User {
    constructor(id, name, age) {
      this.id = id;
      this.name = name;
      this.age = age;
    }
  }
  
  const usersArray = [
    new User("id0", "Іван", 25),
    new User("id1", "Марія", 30),
  ];

  const usersObject = usersArray.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
  
  console.log(usersObject);
  