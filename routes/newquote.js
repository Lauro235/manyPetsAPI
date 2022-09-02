import express from "express";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ price: "£120" });
});

export default router;


// {
//   pet: “dog”, 	//cat
//   gender: “male”,	//female
//   name: “Pablo”,
//   breedType: “Pedigree”,	//cross, mixed
//   breed: “Whippet”,	//list → api
//   size: “small”,		// small, medium, large
//   age: 10,		// max 20 years and 11 months
//   neutered: true/false,
//   price: 100,
//   postcode: se1ae2,
//   housenumber: 10
//   policyStartDate: DD/MM/YYYY
//   noofpets: 1
//   }
  