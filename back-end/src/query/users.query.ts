const QUERY = {
  SELECT_USERS: `SELECT * FROM users ORDER BY created_at DESC LIMIT $1 OFFSET`,
  SELECT_USER: `SELECT * FROM users WHERE id = $1`,
  CREATE_USER: `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
  UPDATE_USER: `UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4`,
  DELETE_USER: `DELETE FROM users WHERE id = $1`,
};

export default QUERY;
