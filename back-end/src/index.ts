import express from "express";
import ip from "ip";
import dotenv from "dotenv";
import cors from "cors";
import Response from "./domain/response";
import httpStatus from "./controller/user.controller";
import userRoutes from "./route/user.route";
import logger from "./util/logger";
import cookieParser from "cookie-parser";
import session from "express-session";
import bodyParser from "body-parser";

dotenv.config();
const PORT = process.env.APP_PORT || 5000;
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(
  session({
    // A secret key used to encrypt the session cookie
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      // Only send cookie over HTTPS
      secure: false,
      // Time is equal to 7 days
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

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
app.use("/users", userRoutes);
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
