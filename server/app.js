require('dotenv').config();

let express = require('express'); // points to the package in the JSON
let app = express();
let email = require('./controllers/usercontroller')
let experience = require('./controllers/experiencecontroller')
let sequelize = require('./db')

sequelize.sync();

app.use(express.json());
app.use(require('./middleware/headers'));
app.use('/api/email', email);
app.use(require('./middleware/validate-session'));

app.use('/experience', experience)


app.listen(3000, function() {
    console.log('App is listening on 3000.')
});