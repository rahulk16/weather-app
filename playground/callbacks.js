var getUser = (id, callback) => {
  var user ={
    id:id,
    name:'Thunder'
  };

  setTimeout(() => {
    callback(user);
  },3000);

};

getUser(16,(userObject) => {
  console.log(userObject);
});
