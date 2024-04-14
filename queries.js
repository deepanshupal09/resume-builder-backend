const getData = "SELECT * FROM users"
const getUserByEmail = "SELECT * FROM users WHERE email=$1"
const addUser = "INSERT INTO users (email,name,picture,password) VALUES ($1,$2,$3,$4)"
const getDetailsByDetailId = "SELECT * FROM details where email=$1 and detailid=$2"
const getAllDetailsByEmail = "SELECT * FROM details where email=$1"
const addDetails = "INSERT INTO details (email, detailId, details, modified) VALUES ($1,$2,$3,$4)" 
const updateDetailsByDetailId = "UPDATE details SET details=$1,modified=$4 WHERE detailid=$2 and email=$3"
const deleteDetailsByDetailId = "DELETE FROM details WHERE detailid=$1 and email=$2;"
const deleteUserFromUsers = "DELETE FROM users WHERE email=$1";
const deleteUserFromDetails = "DELETE FROM details WHERE email=$1";
const updatePasswordFromUsers = "UPDATE users SET password=$1 WHERE email=$2"



module.exports = {
    getData,
    getUserByEmail,
    addUser,
    getDetailsByDetailId,
    getAllDetailsByEmail,
    addDetails,
    updateDetailsByDetailId,
    deleteDetailsByDetailId,
    deleteUserFromUsers,
    deleteUserFromDetails,
    updatePasswordFromUsers,
}