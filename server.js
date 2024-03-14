const app = require("./app/app"); // Ensure this path matches the actual location of your app.js file

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
