import cors from "cors";
import mysql from "mysql";
import express from "express";

//Application Server
const PORT = "3000";
const server = express();
server.use(cors({}));
server.use(express.json())

//Application Database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "barangayiglanotbase"
});

db.connect((error)=>{
    if(error){throw error}
    console.log("Successfully connected to the database.");
    server.listen(PORT, ()=>{
        console.log("The server is listening.")
    });
})

//GET ROUTES
server.get('/residents', (req, res) => {
    const sql = 'SELECT * FROM barangay_residents ORDER BY user_fullname asc';
    db.query(sql, (error, result) =>{
        if(error){return res.json({Error: "Failed to retrive data."})}
        return res.json(result); 
    })
})

server.get('/getUser/:id', (req, res) =>{
    const resident_id = req.params.id;
    const sql = 'SELECT * FROM barangay_residents WHERE id = ?';
    db.query(sql, [resident_id], (error, result)=>{
        if(error){throw error;}
        return res.json(result);
    })

})

server.get('/auth/login', (req, res) => {
    const task = req.body;
    const sql = 'SELECT * FROM admin';
    db.query(sql, [task.id], (error, result) => {
        if(error) return res.json(err);
        return res.json(result);
    });
});

//POST ROUTES
server.post('/residentsadd', (req, res)=>{
    const sql = 'INSERT INTO barangay_residents (`user_fullname`, `sex`, `age`, `birthday`, `purok`, `civil_status`) VALUES (?)';
    const values = [
        req.body.fullname,
        req.body.sex,
        req.body.age,
        req.body.birthday,
        req.body.purok,
        req.body.cstatus
    ]
    db.query(sql, [values], (error, result)=>{
        if(error){return res.json("Error");}
        return res.json("Record Successfully Added");
    })
})

//DELETE ROUTES
server.delete('/residents/:id', (req, res) =>{
    const resident_Id = req.params.id;
    const sql = "DELETE FROM barangay_residents WHERE  id = ?";
    db.query(sql, [resident_Id], (error, result) =>{
        if(error){return res.json(error)}
        return res.json("Record Deleted");
    })
})

//PUT ROUTES
server.put('/residentupdate/:id', (req, res) =>{
    const resident_Id = req.params.id;
    const sql = 'UPDATE barangay_residents SET `user_fullname` = ?, `sex` = ?, `age` = ?, `birthday` = ?, `purok` = ?, `civil_status` = ? WHERE id = ?';
    const values = [
        req.body.uname,
        req.body.usex,
        req.body.uage,
        req.body.ubirthday,
        req.body.upurok,
        req.body.ucstatus
    ]
    db.query(sql, [...values, resident_Id], (error, result)=>{
        if(error){throw error;}
        return res.json("Updated");
    })
})

