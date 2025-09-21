const {User} = require("../models");

const CreateUser = async (req,res) => {
    try {
        const data = req.body;
        console.log(data ,!data.age ,!data.firstName);
        if(!data.firstName || !data.age ){
            return res.status(400).json({error : "firstName and age are required"});
        }
        
        const user = await User.create(req.body); 
        
        
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    } 
  }

  const GetAllUser = async (req,res) => {
  try{
const users = await User.findAll();
res.status(200).json(users);
  }catch(error){
    res.status(400).json({ error: error.message }); 
  }
}

  const UpdateUser = async (req,res) => {
    try{
  const {id} = req.params;  
  const data = req.body;
  const user = await User.update(data , {where : {id}});  
  res.status(200).json(user);
    }
    catch(error){
      res.status(400).json({ error: error.message }); 
    } 
    }

    const DeleteUser = async (req,res) => {
      try{
    const {id} = req.params;      
    const user = await User.destroy({where : {id}});  
    res.status(200).json({message : "user deleted successfully"});
      }   
      catch(error){
        res.status(400).json({ error: error.message }); 
      }
      }


module.exports ={ 
CreateUser,
GetAllUser,
UpdateUser,
DeleteUser
}
