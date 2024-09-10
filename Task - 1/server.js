import express from "express";
import dotenv from "dotenv";
import sql from "mssql";

const app = express();
const PORT = process.env.PORT;

dotenv.config({});

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: { encrypt: true, truestServerCertifcte: true },
};

async function getProducts() {
  try {
    sql.connect(config);
    const dbRequest = new sql.Request();
    await dbRequest.query("SELECT * FROM CELEBAL.PRODUCTS");
  } catch (error) {
    console.log(error);
  }
}

app.get("/products", async () => {
  try {
    const data = await getProducts();
    res.status(200).json({
      data: data,
      error: {},
      message: "Products fetched",
      success: true,
    });
  } catch (error) {
    res.status(200).json({
      data: {},
      error: error.message,
      success: false,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
