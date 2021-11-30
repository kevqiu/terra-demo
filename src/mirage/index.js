import { createServer } from "miragejs";
import { teamsFixture } from "./fixtures";

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
        teams: teamsFixture,
      }));

      this.get("/teams/:number", (_, request) =>
        teamsFixture.find((t) => t.number === request.params.number)
      );

      this.post("/teams", () => ({
        result: 200,
      }));
    },
  });
};

export default makeServer;
