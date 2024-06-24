const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const {engine} = require('express-handlebars');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const { join } = require('path');

const errorController = require('./controllers/error');

// const routes = require('./routes');
const app = express();

// app.engine('handlebars', engine({defaultLayout: 'main-layout'}));
// app.set('view engine', 'pug');
// app.set('view engine', 'handlebars');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));

// Allows to use files statically in code such as css,inages etc. 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes); 

app.use(errorController.get404page);

// const server = http.createServer(app);

app.listen(3000);