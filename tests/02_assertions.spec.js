// docs: https://pokeapi.co/docs/v2

const request = require("supertest");
const expect = require("chai").expect;
const url = "https://pokeapi.co/api/v2";

describe("pokemon/:name", () => {
   describe("All the assertions are in the one 'it' block", () => {
      it("returns the expected data for 'Pikachu", async () => {
         const response = await request(url)
            .get("/pokemon/pikachu")
            .set("Accept", "application/json");
         expect(response.status).to.equal(200);
         expect(response.body).to.have.property("name", "pikachu");
         expect(response.body).to.have.property("id", 25);
         expect(response.body).to.have.property("height", 4);
         expect(response.body).to.have.property("weight", 60);
         expect(response.body.types[0].type).to.have.property("name", "electric");
      });
   });
   describe("Each assertion is in their own 'it block'", () => {
      // Response has to be declared here so we have access to this in the other blocks.
      let response;
      before(async () => {
         response = await request(url)
            .get("/pokemon/pikachu")
            .set("Accept", "application/json");
      });
      it("returns a status code of 200", () => {
         expect(response.status).to.equal(200);
      });
      it("returns the expected 'name'", () => {
         expect(response.body).to.have.property("name", "pikachu");
      });
      it("returns the expected 'id'", () => {
         expect(response.body).to.have.property("id", 25);
      });
      it("returns the expected 'height'", () => {
         expect(response.body).to.have.property("height", 4);
      });
      it("returns the expected 'weight'", () => {
         expect(response.body).to.have.property("weight", 60);
      });
      it("returns the expected 'type'", () => {
         expect(response.body.types[0].type).to.have.property("name", "electric");
      });
   });
});
