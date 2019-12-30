const mysqlConnection = require('../database');

const calendarController = {};

calendarController.getEvents = async (req, res) =>{
    try {
        await mysqlConnection.query('select * from events', (err, rows, fields)=>{
            if(!err){
                res.json(rows)
            }else{
                res.json({ response: "err.message" });
            }
        });
    } catch (error) {
        res.json({ response: "error.message" });
    }
    
}

module.exports = calendarController;