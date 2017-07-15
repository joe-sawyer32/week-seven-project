const jwt = require("jsonwebtoken");
const jwtConfig = require("./tokenConfig");

var checkAuth = (req, res, next) => {
  var token = req.headers["x-access-token"];
  if (token) {
    jwt.verify(token, jwtConfig.secret, (error, decoded) => {
      if (error) {
        return res.status(401).send("Error in verifying token:", error);
      } else {
        req.decoded = decoded.username;
        return next();
      }
    });
  } else {
    res.status(401).send("You are not authorized for this request");
  }
};

module.exports = checkAuth;
