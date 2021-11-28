import { createServer } from "miragejs";

const makeServer = ({ environment }) => {
  return createServer({
    environment,

    routes() {
      this.namespace = "api";

      this.post("/auth", () => ({
        auth_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      }));

      this.post("/login", () => ({
        auth_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      }));

      this.get("/teams", () => ({
        teams: [
          {
            number: "1010A",
            name: "Ten Ton Robotics",
            score: 50,
            rank: 1,
            record: "6-0-0",
            wp: 10,
            sp: 50,
            skills: 1,
            skillsScore: 300,
          },
          {
            number: "1010B",
            name: "Ten Ton Robotics",
            score: 49,
            rank: 2,
            record: "5-1-0",
            wp: 9,
            sp: 50,
            skills: 2,
            skillsScore: 290,
          },
          {
            number: "1010X",
            name: "Ten Ton Robotics",
            score: 45,
            rank: 3,
            record: "4-2-0",
            wp: 7,
            sp: 50,
            skills: 3,
            skillsScore: 280,
          },
        ],
      }));

      this.post("/teams", () => ({
        result: 200,
      }));
    },
  });
};

export default makeServer;
