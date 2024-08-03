const cars = require("../../jsonModels/CarModel");

const getCar = async (req, res) => {
    try {
        const { category } = req.query;

        if(category){
            const allcars = await cars.find({
                category: category
            });

            return res.status(200).send(allcars);
        }
  
        const allcars = await cars.find();
  
        return res.status(200).send(allcars);
    } catch (error) {
        console.log(error)
        return res.status(500).send("Something went wrong while getting cars!");
    }
};

module.exports = {getCar}