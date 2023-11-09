import database from "../config/mysql.config.ts";
import Response from "../domain/response.ts";
import logger from "../util/logger.ts";
import QUERY from "../query/users.query.ts";

const httpStatus = {
  OK: { code: 200, status: "OK" },
  CREATED: { code: 201, status: "CREATED" },
  NO_CONTENT: { code: 204, status: "NO CONTENT" },
  BAD_REQUEST: { code: 400, status: "BAD REQUEST" },
  NOT_FOUND: { code: 404, status: "NOT FOUND" },
  INTERNAL_SERVER_ERROR: { code: 500, status: "INTERNAL SERVER ERROR" },
};

export const getUserLogged = async (req: any, res: any) => {
  logger.info(`${req.method} - ${req.originalUrl} - fetching a user`);
  if (!req.session.user) {
    res
      .status(httpStatus.NOT_FOUND.code)
      .send(
        new Response(
          httpStatus.NOT_FOUND.code,
          httpStatus.NOT_FOUND.status,
          `User not found`,
          null
        )
      );
  } else {
    res
      .status(httpStatus.OK.code)
      .send(
        new Response(
          httpStatus.OK.code,
          httpStatus.OK.status,
          "Users fetched successfully",
          req.session.user
        )
      );
  }
};

export const loginUser = async (req: any, res: any) => {
  logger.info(
    `${req.method} - ${req.originalUrl} - fetching a user by email and password`
  );
  database.query(
    QUERY.SELECT_USER_BY_EMAIL_AND_PASSWORD,
    [req.body.email, req.body.password],
    (err: any, results: any) => {
      if (!results[0]) {
        res
          .status(httpStatus.NOT_FOUND.code)
          .send(
            new Response(
              httpStatus.NOT_FOUND.code,
              httpStatus.NOT_FOUND.status,
              `User by email ${req.body.email} not found`,
              null
            )
          );
      } else {
        req.session.user = results[0];
        res
          .status(httpStatus.OK.code)
          .send(
            new Response(
              httpStatus.OK.code,
              httpStatus.OK.status,
              "Users fetched successfully",
              req.session.user
            )
          );
      }
    }
  );
};

export const logoutUser = async (req: any, res: any) => {
  logger.info(`${req.method} - ${req.originalUrl} - logout user`);
  req.session.user = null;
  res
    .status(httpStatus.OK.code)
    .send(
      new Response(
        httpStatus.OK.code,
        httpStatus.OK.status,
        "User logout successfully",
        null
      )
    );
};

export const registerUser = async (req: any, res: any) => {
  logger.info(`${req.method} - ${req.originalUrl} - create a user`);
  database.query(
    QUERY.INSERT_USER,
    [req.body.username, req.body.email, req.body.password],
    (err: any, results: any) => {
      if (err) {
        res
          .status(httpStatus.BAD_REQUEST.code)
          .send(
            new Response(
              httpStatus.BAD_REQUEST.code,
              httpStatus.BAD_REQUEST.status,
              err,
              null
            )
          );
      } else {
        res.status(httpStatus.CREATED.code);
        loginUser(req, res);
      }
    }
  );
};

export default httpStatus;
