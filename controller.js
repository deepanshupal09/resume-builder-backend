const pool = require('./db')
const queries = require('./queries')

const getData = (req,res) => {
    console.log("here")
    pool.query(queries.getData,(error,results)=> {
        if(error) throw error
        res.status(200).json(results.rows);
    })
}

const getUserByEmail = (req,res) => {
    const email = req.headers.email;
    pool.query(queries.getUserByEmail,[email],(error,results)=>{
        if (error) throw error

        res.status(200).json(results.rows);
    })
}

const addUser = (req,res) => {
    const {email,name,picture,password} = req.body;

    console.log(`email: ${email} name: ${name} pic: ${picture}`)

    pool.query(queries.getUserByEmail,[email],(error,results)=> {
        if(results.rowCount > 0) {
            console.log("user already exists");
            res.send("user already exists");
        } else {
            pool.query(queries.addUser, [email,name,picture,password], (error,results) => {
                if (error) throw error
                res.status(201).send("User added successfully");
            })
        }
    })

}


const updateDetailsByDetailId = (req, res) => {
    const { email, details, detailId, modified } = req.body;
    console.log("detailId: ", detailId)

    console.log(`Updating details: ${details} for detailId: ${detailId} for email: ${email}`)

    pool.query(queries.updateDetailsByDetailId, [details, detailId, email, modified], (error, results) => {
        if (error) throw error;
        res.status(200).send("Details updated successfully");
    });
}
const deleteDetailsByDetailId = (req, res) => {
    const { email,detailId } = req.body;
    console.log(`Deleteing for detailId: ${detailId} for email: ${email}`)

    pool.query(queries.deleteDetailsByDetailId, [detailId, email,], (error, results) => {
        if (error) throw error;
        res.status(200).send("Details deleted successfully");
    });
}

const addDetails =(req,res) => {
    console.log(req.body);
    const {email, detailId, details, modified} = req.body;
    pool.query(queries.addDetails, [email, detailId, details, modified], (error,results)=>{
        if(error) throw error
        res.status(201).send("Details added successfully!")
    })
}

const getAllDetailsByEmail =(req,res) => {
    const email = req.headers.email;
    console.log("email: ",email);
    // res.send("abc");
    pool.query(queries.getAllDetailsByEmail,[email],(error,results)=>{
        if (error) throw error

        res.status(200).json(results.rows);
    })
}

const getDetailsByDetailId = (req, res) => {
    const email = req.headers.email;
    const detailid = req.headers.detailid;
    console.log(email,  detailid);
    
    pool.query(queries.getDetailsByDetailId, [email, detailid], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            return; // Return to avoid executing further code
        }
        
        res.status(200).json(results.rows);
    });
};


const deleteUserAndDetails = (req, res) => {
    const email = req.body.email;
    console.log(`Deleting user and details for email: ${email}`)

    pool.query(queries.deleteUserFromUsers, [email], (error, results) => {
        if (error) throw error;
        pool.query(queries.deleteUserFromDetails, [email], (error, results) => {
            if (error) throw error;
            res.status(200).send("User and details deleted successfully");
        });
    });
}

const updatePasswordFromUsers = (req, res) => {
    const { password,email } = req.body;
    console.log(`password: ${password}`);

    pool.query(queries.updatePasswordFromUsers, [password, email], (error, results) => {
        if (error) throw error;
        res.status(200).send("Password changed successfully");
    });
}


module.exports = {
    getData,
    getUserByEmail,
    addUser,
    updateDetailsByDetailId,
    getDetailsByDetailId,
    getAllDetailsByEmail,
    addDetails,
    deleteDetailsByDetailId,
    deleteUserAndDetails,
    updatePasswordFromUsers
}