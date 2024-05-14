const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const {engine} = require('express-handlebars');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const { join } = require('path');

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

app.use('/admin', adminData.routes);
app.use(shopRoutes); 

app.use((req, res, next) => {
    // res.status(404).send("<h1>Page Not Found</h1>");
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

// const server = http.createServer(app);

app.listen(3000);