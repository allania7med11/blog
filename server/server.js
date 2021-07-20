const dotenv = require("dotenv");
const fs = require("fs")
const path = require("path")
var morgan = require('morgan')
morgan('tiny')
var logger = morgan('combined')
if (process.env.NODE_ENV === "production") {
  dotenv.config();
} else {
  dotenv.config({ path: ".env.dev" });
}

require("dotenv").config();
const app = require("./app");
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
const sequelize = require("./sequelize");
const PORT = process.env.PORT || 8000;

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
}

async function init() {
  await assertDatabaseConnectionOk();

  console.log(`Starting Sequelize + Express  on port ${PORT}...`);

  app.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}.`);
  });
}

init();
