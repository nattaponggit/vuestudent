const i1 = (req, res, next) => {
  if (req.query.token1 == "1234") {
    next();
  } else {
    res.end("Invalid token1");
  }
};

const i2 = (req, res, next) => {
  if (req.query.token2 == "4321") {
    next();
  } else {
    res.end("Invalid token2");
  }
};

module.exports = {
  i1,
  i2,
};
