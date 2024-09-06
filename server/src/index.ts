import jsonServer from "json-server";
import cors from "cors";
import data from "./db";

const PORT = process.env.PORT || 4000;

const server = jsonServer.create();
const router = jsonServer.router(data);
const middleware = jsonServer.defaults();

server.use(cors());
server.use(middleware);
server.use(router);
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
