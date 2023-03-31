const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');
app.set('views','views')

app.use('/admin',adminRoutes.routes)

app.use(shopRoutes);

app.listen(3000);

