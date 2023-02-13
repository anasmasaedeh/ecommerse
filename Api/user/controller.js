const  User  = require('./userModel');

async function createUser(req, res) {
  try {
    const user = await User.create(req.body)

    res.json({success:true,user:user});
    res.status(201)

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
      const userObject = user.toJSON();
      delete userObject.password;
      res.json(userObject)    } 
      else {
      res.status(404).send();
    }
  } catch (error) {
    res.status(400).send(error);
  }
}
async function updateUserById(req, res) {
  try {
    let user = await User.findByPk(req.params.id);
    const updatedbody=req.body
    user={...user, updatedbody}
    if (user) {
      // Destructure the fields that you want to update from req.body
      const { name, email, phoneNumber, nationality } = req.body;
      // Use the destructured fields to update the user
      const updated_user= await User.update(user,{where:{id:req.params.id}});
      // Find the updated user and send it as a response
      res.json({ success: true, user: updated_user });
    } else {
      res.status(404).send();
    }
  } catch (error) {
    console.log({error})
    res.status(400).json(error);
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