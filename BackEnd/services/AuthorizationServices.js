const Authorization = (req, res, next) => {
  if (req.session && req.session.tokens) {
    next();
  } else {
    console.log(req.session.tokens);

    console.log("Unauthorized access attempt:", req.originalUrl);
    res.status(401).json({ message: "Unauthorized. Please log in." });
  }
};

module.exports.Authorization = Authorization;
