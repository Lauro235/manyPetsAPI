import query from "../connection.js";

const sqlString = `CREATE TABLE IF NOT EXISTS quotes (quote_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, pet TEXT, gender TEXT, name TEXT, breedType TEXT, breed TEXT, size TEXT, age INT, neutered BOOLEAN, price INT, postcode TEXT, houseNumber TEXT, streetName TEXT, city TEXT, policyStart TEXT, policyDate TEXT, quotePrice TEXT, referenceNumber TEXT)`;

async function createTable() {
  const res = await query(sqlString);
  console.log(res.rows[0], "inserted");
}
createTable();
