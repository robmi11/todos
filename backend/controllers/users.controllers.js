import asyncHandler from "express-async-handler";
import USER from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * @description   Register New User
 * @route         POST /api/v1/users
 * @access        Public
 */
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Proszę podać nazwę i/lub adres e-mail i/lub hasło.");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Check if e-mail already exist in db
  if (await USER.findOne({ email })) {
    res.status(400);
    throw new Error(`Użytkownik o podanym adresie ${email} już istnieje.`);
  }

  const newUser = await USER.create({
    name,
    email,
    password: hashedPassword,
  });

  if (!newUser) {
    res.status(500);
    throw new Error("Nie zarejestrowano użytkownika");
  }

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
    token: jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    }),
  });
});

/**
 * @description User Login
 * @route       POST /api/v1/users
 * @access      Public
 */
export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Check for valid inputs
  if (!email || !password) {
    res.status(400);
    throw new Error("Brak adresu e-mail i/lub hasła");
  }

  //Check if user exist and if yes if password is correct
  const user = await USER.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      }),
    });
  } else {
    res.status(401);
    throw new Error("Brak autoryzacji");
  }
});
