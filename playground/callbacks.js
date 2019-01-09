var getUser = (id, callback) => {
  var user ={
    id:id,
    name:'Thunder'
  };
  callback(user)
};

getUser(16,(userObject) => {
  console.log(userObject);
});
