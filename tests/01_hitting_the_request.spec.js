// docs: https://pokeapi.co/docs/v2

const request = require("supertest");
const expect = require("chai").expect;
const url = "https://pokeapi.co/api/v2";

// Below are three different ways of hitting the same request
// The official docs uses promises
// I'm curious what you guys reads easier.

describe("pokemon/:name", () => {
   it("uses callbacks", (done) => {
      request(url)
         .get("/pokemon/pikachu")
         .set("Accept", "application/json")
         .expect(200)
         .end((error, response) => {
            if (error) return done(error);
            expect(response.body).to.have.property("name", "pikachu");
            expect(response.body).to.have.property("id", 25);
            return done();
         });
   });
   it("uses promises", (done) => {
      request(url)
         .get("/pokemon/pikachu")
         .set("Accept", "application/json")
         .expect(200)
         .then((response) => {
            expect(response.body).to.have.property("name", "pikachu");
            expect(response.body).to.have.property("id", 25);
            done();
         })
         .catch(error => done(error));
   });
   it("uses async/await", async () => {
      const response = await request(url)
         .get("/pokemon/pikachu")
         .set("Accept", "application/json");
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("name", "pikachu");
      expect(response.body).to.have.property("id", 25);
   });
});
