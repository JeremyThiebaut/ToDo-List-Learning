const QUERY = {
  INSERT_USER: `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
  SELECT_USER_BY_EMAIL_AND_PASSWORD: `SELECT id, username, email FROM users WHERE email = ? AND password = ?`,
};

export default QUERY;
