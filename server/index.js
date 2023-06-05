const dotenv = require("dotenv");
const path = require("path");
const app = require("./config/init");
// const { OAuth2Client } = require("google-auth-library");

require("dotenv").config({
  path: path.join("config/.env"),
});
const getRoutes = require("./routes/getRoutes");
const postRoutes = require("./routes/postRoutes");


getRoutes()
postRoutes();




// const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);




app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server is ready at http://localhost:${process.env.PORT || 5000}`
  );
});

