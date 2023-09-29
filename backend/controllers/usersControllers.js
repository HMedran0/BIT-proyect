const usersController = {
    createUser: (req, res)=>{res.json({msg: "C"})},

    readUser: (req, res)=>{res.json({msg: "R"})},

    readAllUsers: (req, res)=>{res.json({msg: "R"})},

    updateUser: (req, res)=>{res.json({msg: "U"})},

    deleteUser: (req, res)=>{res.json({msg: "D"})}
};

module.exports = usersController;