const User = require('../model/User');


 const usersController = {

    createUser: async (req, res) => {
     try{

        if(name || email || password === true) {
            return res.status(504).json("User already exist")
        }

        const { name, email, password, } = req.body;
        const newUser = await User.create({ name, email, password, })
        return res.status(200).json(newUser)
     }catch(error) {
        return res.status(504).json({error: 'Failed to create User'})
     }

    },


    // Fuction to getAllUser
    getAllUsers: async (req, res) => {
        try{

           const allUser = await User.findAll();
           return res.status(200).json(allUser);
          
        }catch(error) {
           return res.status(504).json({error: 'Failed to fetch all Users'})
        }
   
       },


     // Get a user by ID
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to retrieve user' });
    }
  },

 }

 module.exports = usersController;