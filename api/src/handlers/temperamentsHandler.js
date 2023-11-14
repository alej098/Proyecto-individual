const {getAllTemperaments}= require('../controllers/temperaments')


const getTemperamentsHandler= async (req,res)=>{
    try {
        const response= await getAllTemperaments()
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports={getTemperamentsHandler}