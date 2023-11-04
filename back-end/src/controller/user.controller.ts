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

export const getUsers = async (req: any, res: any) => {
  logger.info(`${req.method} - ${req.originalUrl} - fetching all users`);
  database.query(QUERY.SELECT_USERS, (err: any, results: any) => {
    if (!results) {
      res
        .status(httpStatus.OK.code)
        .send(
          new Response(
            httpStatus.OK.code,
            httpStatus.OK.status,
            "No users found",
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
            { users: results }
          )
        );
    }
  });
};

export const createUser = async (req: any, res: any) => {
  logger.info(`${req.method} - ${req.originalUrl} - creating a user`);
  database.query(
    QUERY.CREATE_USER,
    Object.values(req.body),
    (err: any, results: any) => {
      if (!results) {
        logger.error(err.message);
        res
          .status(httpStatus.INTERNAL_SERVER_ERROR.code)
          .send(
            new Response(
              httpStatus.INTERNAL_SERVER_ERROR.code,
              httpStatus.INTERNAL_SERVER_ERROR.status,
              "User creation failed",
              null
            )
          );
      } else {
        const user = {
          id: results.insertId,
          ...req.body,
          created_at: new Date(),
        };
        res
          .status(httpStatus.CREATED.code)
          .send(
            new Response(
              httpStatus.CREATED.code,
              httpStatus.CREATED.status,
              "User created successfully",
              { user }
            )
          );
      }
    }
  );
};

export const getUser = async (req: any, res: any) => {
  logger.info(`${req.method} - ${req.originalUrl} - fetching a user`);
  database.query(
    QUERY.SELECT_USER,
    [req.params.id],
    (err: any, results: any) => {
      if (!results[0]) {
        res
          .status(httpStatus.NOT_FOUND.code)
          .send(
            new Response(
              httpStatus.NOT_FOUND.code,
              httpStatus.NOT_FOUND.status,
              `User by id ${req.params.id} not found`,
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
              results[0]
            )
          );
      }
    }
  );
};

export const updateUser = async (req: any, res: any) => {
  logger.info(`${req.method} - ${req.originalUrl} - updating a user`);
  database.query(
    QUERY.SELECT_USER,
    [req.params.id],
    (err: any, results: any) => {
      if (!results[0]) {
        res
          .status(httpStatus.NOT_FOUND.code)
          .send(
            new Response(
              httpStatus.NOT_FOUND.code,
              httpStatus.NOT_FOUND.status,
              `User by id ${req.params.id} not found`,
              null
            )
          );
      } else {
        logger.info(`${req.method} - ${req.originalUrl} - updating a user`);
        database.query(
          QUERY.UPDATE_USER,
          [...Object.values(req.body), req.params.id],
          (err: any, results: any) => {
            if (!err) {
              res
                .status(httpStatus.OK.code)
                .send(
                  new Response(
                    httpStatus.OK.code,
                    httpStatus.OK.status,
                    `User by id ${req.params.id} updated successfully`,
                    { id: req.params.id, ...req.body }
                  )
                );
            } else {
              logger.error(err.message);
              res
                .status(httpStatus.INTERNAL_SERVER_ERROR.code)
                .send(
                  new Response(
                    httpStatus.INTERNAL_SERVER_ERROR.code,
                    httpStatus.INTERNAL_SERVER_ERROR.status,
                    "User updation failed",
                    null
                  )
                );
            }
          }
        );
      }
    }
  );
};

export const deleteUser = async (req: any, res: any) => {
  logger.info(`${req.method} - ${req.originalUrl} - deleting a user`);
  database.query(
    QUERY.DELETE_USER,
    [req.params.id],
    (err: any, results: any) => {
      if (results.affectedRows > 0) {
        res
          .status(httpStatus.OK.code)
          .send(
            new Response(
              httpStatus.OK.code,
              httpStatus.OK.status,
              `User by id ${req.params.id} deleted successfully`,
              results[0]
            )
          );
      } else {
        res
          .status(httpStatus.NOT_FOUND.code)
          .send(
            new Response(
              httpStatus.NOT_FOUND.code,
              httpStatus.NOT_FOUND.status,
              `User by id ${req.params.id} not found`,
              null
            )
          );
      }
    }
  );
};

export default httpStatus;
