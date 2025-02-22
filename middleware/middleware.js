import jwt from "jsonwebtoken";

const authorizer = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not Authorized" });
    }

    const token = authHeader.split(" ")[1];

    const payload = jwt.verify(token, process.env.SECRET_KEY);

    if (payload) {
      req.user = payload;
      next();
    } else {
      return res.status(400).json({ message: "Not Authorized" });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
};
export { authorizer };
