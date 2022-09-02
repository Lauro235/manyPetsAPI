import express from "express";
const router = express.Router();

const basePrice = 120;
const lowerPriceBreeds = ["Beagle", "Husky", "German Shepherd"];
const higherPriceAddress = ["London", "Birmingham", "Manchester"];

/* POST new quote. */
router.post("/", function (req, res, next) {
  // location

  // if age <=5 add 5%, age <= 10 add 10%
  let totalPrice = basePrice;
  const age = req.body.age;
  if (age <= 5) {
    totalPrice += (basePrice / 20) * age;
  } else if (age <= 10) {
    totalPrice += (basePrice / 10) * age;
  }

  // check the breed, if it's included in the array, apply a 10% discount
  const breed = req.body.breed;
  if (lowerPriceBreeds.includes(breed)) {
    totalPrice -= totalPrice / 10;
  }

  const location = req.body.city;
  if (higherPriceAddress.includes(location)) {
    totalPrice += totalPrice * 0.15;
  }

  res.json({ price: totalPrice });
});

export default router;

// 120 base price
// 4 years old --> 24 --> 144
// Beagle --> 10% discount --> 144 - 14.4 = 129.6
// London --> 15% increase --> 19.44 + 129.6 = 149.04

// {
//  numberofpets: 3,
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
//   streetName: "Breamer Ave",
//   city: London
//   policyStartDate: DD/MM/YYYY
//   noofpets: 1
//   }
// {
//   postcode: nw100dp,
//   housenumber: 14
// }
