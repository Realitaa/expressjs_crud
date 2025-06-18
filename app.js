import express from "express"
import dotenv from "dotenv"
import { database } from "./models/index.js"
import route from "./routes/router.js"

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use("/api/v1", route)

try {
    await database.authenticate();
    console.log("Database connected successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})