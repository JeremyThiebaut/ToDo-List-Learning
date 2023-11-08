import express from "express";
import ip from "ip";
import dotenv from "dotenv";
import cors from "cors";
import Response from "./domain/response";
import httpStatus from "./controller/user.controller";
import userRoutes from "./route/user.route";
import logger from "./util/logger";

dotenv.config();
const PORT = process.env.APP_PORT || 5000;
const app = express();
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.send(
    new Response(
      httpStatus.OK.code,
      httpStatus.OK.status,
      "Todo API v1.0.0 is running",
      null
    )
  );
});
app.all("*", (req, res) => {
  res
    .status(httpStatus.NOT_FOUND.code)
    .send(
      new Response(
        httpStatus.NOT_FOUND.code,
        httpStatus.NOT_FOUND.status,
        "Route not found",
        null
      )
    );
});

app.listen(PORT, () => {
  logger.info(`Server is running on http://${ip.address()}:${PORT}`);
});
