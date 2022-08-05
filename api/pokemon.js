// docs: https://pokeapi.co/docs/v2

// Use Environment Variables in our .env file
require("dotenv").config();

const request = require("supertest")
const url = "https://pokeapi.co/api/v2";

async function name({ "name": name } = {}) {
   const response = await request(url)
      .get("/pokemon/" + name)
      .set("Accept", "application/json");
   if (response.error && process.env.DEBUG == "true") {
      console.error(response.error)
   }
   return response;
};

async function type({ "name": name } = {}) {
   const response = await request(url)
      .get("/type/" + name)
      .set("Accept", "application/json");
   if (response.error && process.env.DEBUG == "true") {
      console.error(response.error)
   }
   return response;
};

async function ability({ "name": name } = {}) {
   const response = await request(url)
      .get("/ability/" + name)
      .set("Accept", "application/json");
   if (response.error && process.env.DEBUG == "true") {
      console.error(response.error)
   }
   return response;
};

async function nature({ "name": name } = {}) {
   const response = await request(url)
      .get("/nature/" + name)
      .set("Accept", "application/json");
   if (response.error && process.env.DEBUG == "true") {
      console.error(response.error)
   }
   return response;
};

async function stats({ "name": name } = {}) {
   const response = await request(url)
      .get("/stats/" + name)
      .set("Accept", "application/json");
   if (response.error && process.env.DEBUG == "true") {
      console.error(response.error)
   }
   return response;
};

module.exports = {
   name,
   type,
   ability,
   nature,
   stats
};