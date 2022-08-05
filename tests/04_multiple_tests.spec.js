// docs: https://pokeapi.co/docs/v2

const pokemon = require("../api/pokemon");
const expect = require("chai").expect;

describe("pokemon/:name", () => {
   describe("valid :name", () => {
      // Response has to be declared here so we have access to this in the other blocks.
      let response;
      before(async () => {
         response = await pokemon.name({
            "name": "pikachu"
         });
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
   describe("snakecase :name", () => {
      // Response has to be declared here so we have access to this in the other blocks.
      let response;
      before(async () => {
         response = await pokemon.name({
            "name": "Pikachu"
         });
      });
      it("returns a status code of 404", () => {
         expect(response.status).to.equal(404);
      });
   });
   describe("uppercase :name", () => {
      // Response has to be declared here so we have access to this in the other blocks.
      let response;
      before(async () => {
         response = await pokemon.name({
            "name": "PIKACHU"
         });
      });
      it("returns a status code of 404", () => {
         expect(response.status).to.equal(404);
      });
   });
   describe("non-existent :name", () => {
      // Response has to be declared here so we have access to this in the other blocks.
      let response;
      before(async () => {
         response = await pokemon.name({
            "name": "Faz"
         });
      });
      it("returns a status code of 404", () => {
         expect(response.status).to.equal(404);
      });
   });
});
