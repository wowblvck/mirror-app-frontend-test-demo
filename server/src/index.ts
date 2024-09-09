import jsonServer from "json-server";
import cors from "cors";
import data from "./db";
import { createRandomSettings } from "./settings/generator";

const PORT = process.env.PORT || 4000;

const server = jsonServer.create();
const router = jsonServer.router(data);
const middleware = jsonServer.defaults();

server.use(cors());
server.use(middleware);
server.use((req, res, next) => {
  if (req.method === "GET" && req.path === "/settings") {
    const db = router.db;
    let data = db.get("settings").value();
    data = createRandomSettings();
    res.jsonp(data);
  } else {
    next();
  }
});
server.use(router);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
