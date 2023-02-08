import USER from "../models/user.models.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from headers
      token = req.headers.authorization.split(" ")[1];

      //Verify token
      const veryfiedToken = jwt.verify(token, "robert123456");

      //Get user from id
      req.user = await USER.findById(veryfiedToken.id).select("-password");
      next();
    } catch (err) {
      console.error(err.message);
      res.status(401).json({ error: "Brak autoryzacji." });
      throw new Error("Użytkownik nie autoryzowany");
    }
  }

  if (!token) {
    res.status(400);
    throw new Error("Brak tokenu");
  }
});

export default protect;
