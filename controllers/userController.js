import userModel from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken.js";

const userRegisterControl = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide name,email,password" });
    }

    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailValid.test(email)) {
      return res.status(400).json({ message: "Invalid Email Address" });
    }

    const user = await userModel.findOne({ email });

    if (user) {
      return res.json({ message: "Already Registerd Email" });
    }

    const salt = await bcryptjs.genSalt(10);

    const hashPassword = await bcryptjs.hash(password, salt);

    const payload = {
      name,
      email,
      password: hashPassword,
    };

    const newUser = new userModel(payload);

    await newUser.save();

    return res.json({
      message: "User register successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
};

const userlogincontrol = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email,password" });
    }
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User Not Register" });
    }

    const checkPassword = await bcryptjs.compare(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({ message: "Check your password" });
    }
    const accesstoken = await generateToken(user._id);

    return res.json({
      message: "User login successfully!",
      accesstoken,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
    });
  }
};

const userInfo = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await userModel.findById(userId).select("-password");
    res.json({
      message: "User retrieved successfully!",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
};
export { userRegisterControl, userlogincontrol, userInfo };
