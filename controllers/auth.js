const User = require("../models/User");
const { BadRequestError, UnauthenticatedError } = require("../errors");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  //   if (!name || !email || !password) {
  //     throw new BadRequestError("Please provide name,email & Password");
  //   }
  const user = await User.create({ ...req.body });

  //   res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.getName() }, token: user.createJWT() });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email & password");
  }
  const user = await User.findOne({ email });
  //compare password

  if (!user) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid credentials");
  }
  //   const token = user.createJWT();
  //   res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.getName() }, token: user.createJWT() });
};

module.exports = { register, login };
