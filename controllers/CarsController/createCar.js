const CarModel = require("../../jsonModels/CarModel");

const createCar = async (req, res) => {
    try {
        const seats = [];

        const {
            driver_name,
            date,
            getDate,
            getTime,
            direction_from,
            direction_to,
            plate,
            seat_count,
        } = req.body;
  
        for (let i = 0; i < seat_count; i++) {
            const seat = new SeatsModel({
                seat_id: i + 1,
            });

            seats.push(seat);
        }
  
        const car = new CarModel({
            seats,
            driver_name,
            date: date ? date : new Date(),
            getDate: date && `${useDateFormat(date).getDate()}-${useDateFormat(date).getMonth()}`,
            getTime: date && `${useDateFormat(date).getHours()}:${useDateFormat(date).getMinutes()}`,
            direction_from,
            direction_to,
            plate,
            seat_count,
        });
  
        const cars = await car.save();
  
        return res.status(200).send(cars);
    } catch (error) {
        return res.status(500).send("Something went wrong while creating car!");
    }
};

module.exports = {createCar}