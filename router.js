const {getCar} = require('./controllers/CarsController/getCar')
const {createCar} = require('./controllers/CarsController/createCar')

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome to Directions API");
});

router.get("/cars", getCar);
router.post("/car", createCar);

module.exports = router;
