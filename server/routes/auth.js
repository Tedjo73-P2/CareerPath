import { auth } from "../config/firebase.js";

export const handleRegister = async (req, res) => {
  try {
    const { email, password, fullName, userType } = req.body;

    // Create user in Firebase Auth
    const userRecord = await auth.createUser({
      email,
      password,
      displayName: fullName,
    });

    // Set custom claims for user role
    await auth.setCustomUserClaims(userRecord.uid, { role: userType });

    // Return user data
    res.status(201).json({
      success: true,
      userId: userRecord.uid,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // This is handled by Firebase client SDK
    // Server would verify the token sent by client
    res.json({
      success: true,
      message: "Login handled by Firebase client SDK",
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const handleLogout = async (req, res) => {
  try {
    // Logout is handled by client
    res.json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
