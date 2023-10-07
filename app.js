const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
var port = "1000";
app.set('port', port);
module.exports = app;

// Set up EJS templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const projectsRouter = require('./routes/projects');
const servicesRouter = require('./routes/services');
const contactRouter = require('./routes/contact');

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);
app.use('/services', servicesRouter);
app.use('/contact', contactRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
