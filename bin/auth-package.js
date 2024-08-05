#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");

// Determine the directory where index.js is located
const scriptDir = __dirname;

// Determine the current working directory where the package is being installed
const targetDir = process.cwd();

// Define files to copy with their source and destination paths
const filesToCopy = [
  {
    src: path.join(scriptDir, "templates/index.js"),
    dest: path.join(targetDir, "index.js"),
  },
  {
    src: path.join(scriptDir, "templates/.env"),
    dest: path.join(targetDir, ".env"),
  },
  {
    src: path.join(scriptDir, "templates/src/config/connectMongoDB.js"),
    dest: path.join(targetDir, "auth-package/src/config/connectMongoDB.js"),
  },
  {
    src: path.join(scriptDir, "templates/src/controllers/authController.js"),
    dest: path.join(
      targetDir,
      "auth-package/src/controllers/authController.js"
    ),
  },
  {
    src: path.join(scriptDir, "templates/src/models/User.js"),
    dest: path.join(targetDir, "auth-package/src/models/User.js"),
  },
  {
    src: path.join(scriptDir, "templates/src/routes/authRoutes.js"),
    dest: path.join(targetDir, "auth-package/src/routes/authRoutes.js"),
  },
  {
    src: path.join(scriptDir, "templates/src/middlewares/protectRoute.js"),
    dest: path.join(targetDir, "auth-package/src/middlewares/protectRoute.js"),
  },
  {
    src: path.join(scriptDir, "templates/src/utils/generateToken.js"),
    dest: path.join(targetDir, "auth-package/src/utils/generateToken.js"),
  },
];

// Function to copy files
const copyFiles = () => {
  try {
    filesToCopy.forEach(({ src, dest }) => {
      fs.ensureDirSync(path.dirname(dest)); // Ensure destination directory exists
      fs.copyFileSync(src, dest);
      // console.log(`Copied ${src} to ${dest}`);
    });

    console.log(
      "Authentication files created successfully in auth-package folder."
    );
  } catch (err) {
    console.error("Error copying files:", err);
  }
};

// Create auth-package directory if it doesn't exist
if (!fs.existsSync(path.join(targetDir, "auth-package"))) {
  fs.mkdirSync(path.join(targetDir, "auth-package"));
}

// Copy files
copyFiles();
