function createAuthSystem() {
  let users = [
    { name: "admin", password: "admin" },
    { name: "user", password: "user" },
  ];

  return {
    validateCredentiasl: function (name, password) {
      return users.some(
        (user) => user.name === name && user.password === password
      );
    },
    changePassword: function (name, oldPassword, newPassword) {
      let user = users.find((user) => user.name === name);
      if (user && user.password === oldPassword) {
        user.password = newPassword;
        return true;
      }
      return false;
    },
  };
}

const authSystem = createAuthSystem();

//validate credentials
console.log(authSystem.validateCredentiasl("admin", "admin")); // true
console.log(authSystem.validateCredentiasl("admin", "user")); // false

//change password
console.log(authSystem.changePassword("admin", "admin", "admin123"));
console.log(authSystem.validateCredentiasl("admin", "admin")); // false
console.log(authSystem.validateCredentiasl("admin", "admin123")); // true
