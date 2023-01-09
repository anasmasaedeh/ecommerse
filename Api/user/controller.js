const { User } = require('./userModel');
async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).send(error);
  }
}
async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(400).send(error);
  }
}
async function getUserById(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    res.status(400).send(error);
  }
}
async function updateUserById(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.json(user);
    } else {
      res.status(404).send();
    }
  } catch (error) {
    res.status(400).send(error);
  }
}
async function deleteUserById(req, res) {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id
      }
    })
        if (user) {
         res.status(200).send();
       } else {
         res.status(404).send();
       }
     } catch(error)  {
       res.status(400).send(error);
     };
   }

module.exports={
    createUser,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById
}