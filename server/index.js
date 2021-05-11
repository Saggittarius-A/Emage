const express = require("express");
const path = require("path");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const nodemailer = require("nodemailer");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const { encrypt, decrypt } = require("./encrypt");
require("dotenv").config();

app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Shruti@2002",
  database: "photographer",
});

//User Registration
app.post("/addUser", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = encrypt(password);

  db.query(
    "INSERT INTO users(name, email, password, iv) VALUES (?,?,?,?)",
    [name, email, hashedPassword.password, hashedPassword.iv],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("successfully added");
      }
    }
  );
});

// update users
app.put("/updateUser", (req, res) => {
  const UId = req.body.UId;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const sqlUpdate =
    "UPDATE users SET name = ?, email = ?, password = ? WHERE iduser = ?";

  db.query(sqlUpdate, [name, email, password, UId], (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

// get user details
app.get("/getUsers", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// delete userss
app.delete("/deleteUsers/:Uid", (req, res) => {
  const UId = parseInt(req.params.Uid);

  const sqlDelete = "DELETE FROM users WHERE iduser = ?";

  db.query(sqlDelete, UId, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

app.post("/decryptpassword", (req, res) => {
  res.send(decrypt(req.body));
});
// user authentication for login
app.post("/login", (req, res) => {
  const userNameReg = req.body.userNameReg;
  const userPasswordReg = req.body.userPasswordReg;
  const hashedPassword = encrypt(userPasswordReg);
  db.query(
    "SELECT * FROM users WHERE email = ? ",
    [userNameReg],
    (err, result) => {
      if (err) {
        res.send({ error: err });
      }
      if (result.length > 0) {
        const p={
          iv: result[0].iv,
          password: result[0].password,
        }
        const k=decrypt(p);
        if(k==userPasswordReg){
        res.send(result);
      }else{
        console.log("Password incorrect");}
      } else {
        res.send({ message: "wrong username and passowrd" });
      }
    }
  );
});

// app.post("/setuserid", (req, res) => {

//   const sqlDelete = " SELECT get_id() ";

//   db.query(sqlDelete, UId, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// });

//upload images
app.post("/picture", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "no file",
      });
    } else {
      const { picture } = req.files;

      picture.mv("../client/public/uploads/" + picture.name);
      res.send({
        status: true,
        message: "uploaded",
      });
    }
  } catch (e) {
    res.send(500).send(e);
  }
});

// send entered product details to the database
app.post("/addProducts", (req, res) => {
  const prImage = req.body.prImage;
  const iduser= req.body.iduser;
  db.query(
    "INSERT INTO products(prImage, iduser) VALUES (?,?)",
    [prImage, iduser],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("successfully added");
      }
    }
  );
});

// update products
app.put("/updateProducts", (req, res) => {
  const prid = req.body.prid;
  const prPrice = req.body.prPrice;
  //const prImage = req.body.prImage;

  const sqlUpdate =
    "UPDATE products SET  price = ?, WHERE idproducts = ?";

  db.query(
    sqlUpdate,
    [ prPrice, prid],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

// get products
app.get("/getProducts/:id", (req, res) => {
  const Id = parseInt(req.params.id);
  db.query(`SELECT * FROM products WHERE iduser = ${Id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getProduct", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// delete products
app.delete("/deleteProducts/:prid", (req, res) => {
  const prId = parseInt(req.params.prid);

  const sqlDelete = "DELETE FROM products WHERE idproducts = ?";

  db.query(sqlDelete, prId, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

// add to cart

app.post("/addToCart", (req, res) => {
  const prPrice = req.body.PrPrice;
  const prid = req.body.prId;
  const userid = req.body.userid;
  const total = req.body.total;
  const qty = req.body.PrQty;
  const size = req.body.size;
  const prImage = req.body.prImage;

  db.query(
    "INSERT INTO cart_items( price, qty, iduser, total, idproduct, size) VALUES (?,?,?,?,?,?)",
    [ prPrice, qty, userid, total, prid, size],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("successfully added");
      }
    }
  );
});

// getCart items
app.get("/getCart/:id", (req, res) => {
  const Id = parseInt(req.params.id);

  db.query(`SELECT * FROM cart_items WHERE iduser = ${Id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/getgallery/:id", (req, res) => {
  const Id = parseInt(req.params.id);

  db.query(`SELECT * FROM products WHERE iduser = ${Id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// delete cart item
app.delete("/deleteCartItem/:ctid", (req, res) => {
  const ctId = parseInt(req.params.ctid);

  const sqlDelete = "DELETE FROM cart_items WHERE idcart_items = ?";

  db.query(sqlDelete, ctId, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// add bills
app.post("/addBill", (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const district = req.body.district;
  const contact = req.body.contact;
  const date = req.body.date;
  const paymode = req.body.paymode;
  const total = req.body.total;
  const userid = req.body.userid;
  const status = req.body.status;

  db.query(
    "INSERT INTO billing_details(name, adrs, district, contactNumber, iduser, date, total, paymode, status) VALUES (?,?,?,?,?,?,?,?,?)",
    [name, address, district, contact, userid, date, total, paymode, status],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("successfully added");
      }
    }
  );
});

// get bill id
app.get("/getbillno/:id", (req, res) => {
  const Id = parseInt(req.params.id);

  db.query(
    `SELECT * FROM billing_details WHERE iduser = ${Id}`,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//get price_chart
app.get("/getPricechart", (req, res) => {
  db.query("SELECT * FROM price_chart", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//delete a size from price_chart
app.delete("/deletesize/:idsize", (req, res) => {
  const idsize = parseInt(req.params.idsize);

  const sqlDelete = "DELETE FROM price_chart WHERE idsize = ?";

  db.query(sqlDelete, idsize, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});
//Add a new Size
app.post("/addSize", (req, res) => {
  const size = req.body.size;
  const Price = req.body.Price;

  db.query(
    "INSERT INTO price_chart(size, Price) VALUES (?,?)",
    [ size, Price],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("successfully added");
      }
    }
  );
});

// update Size
app.put("/updateSize", (req, res) => {
  const idsize = req.body.idsize;
  const size = req.body.size;
  const Price = req.body.Price;

  const sqlUpdate =
    "UPDATE size_chart SET size = ?, Price = ? WHERE idsize = ?";

  db.query(sqlUpdate, [size, Price, idsize], (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

// send order details
app.post("/sendOrderDetails", (req, res) => {
  const product_name = req.body.PrName;
  const product_price = req.body.PrPrice;
  const product_qty = req.body.PrQty;
  const product_total = req.body.prTotal;
  const bill_id = req.body.billid;
  const date = req.body.date;
  const paymode = req.body.paymode;
  const total = req.body.total;
  const userid = req.body.userid;
  const size = req.body.PrSize;

  db.query(
    "INSERT INTO orders(date, bill_id, iduser, bill_amount, paymode, pr_name, pr_price, pr_qty, pr_total, size) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [
      date,
      bill_id,
      userid,
      total,
      paymode,
      product_name,
      product_price,
      product_qty,
      product_total,
      size,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("successfully added");
      }
    }
  );
});

// delete cart
app.delete("/deleteCart/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const sqlDelete = "DELETE FROM cart_items WHERE iduser = ?";

  db.query(sqlDelete, id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

app.post("/addCard", (req, res) => {
  const name = req.body.cardname;
  const number = req.body.cardNum;
  const exp = req.body.exp;
  const cvv = req.body.cvv;
  const userid = req.body.userid;

  db.query(
    "INSERT INTO payment_details(card_number, year, cvv, holder_name, iduser) VALUES (?,?,?,?,?)",
    [number, exp, cvv, name, userid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("successfully added");
      }
    }
  );
});

//get order details
app.get("/getorders/:id", (req, res) => {
  const Id = parseInt(req.params.id);

  db.query(`SELECT * FROM orders WHERE iduser = ${Id}`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// get bill details
app.get("/getbilling", (req, res) => {
  db.query("SELECT * FROM billing_details", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// update status
app.put("/updateStatus", (req, res) => {
  const id = req.body.billId;
  const status = req.body.status;

  const sqlUpdate = "UPDATE billing_details SET status = ? WHERE bill_id = ?";

  db.query(sqlUpdate, [status, id], (err, result) => {
    console.log(id);
    if (err) {
      console.log(err);
    }
  });
});

//get order details
app.get("/getbilledItems", (req, res) => {
  db.query("SELECT * FROM orders", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});




//Emailer


let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
 });

 transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
 });
 app.post("/send", (req, res) => {
  const email = req.body.email;
  const subject = req.body.subject;
  const text = req.body.text; 
  console.log(text);
  let mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Emaze order",
    text: text,
  };
 
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log(email);
      console.log("Email sent successfully");
      res.json({ status: "Email sent" });
    }
  });
 });

app.listen(3001, () =>{ 
  console.log("Server running");
})