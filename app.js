const express = require('express');
const authRoutes = require('./routes/auth-routes');
// Initialise Express Application
const app = express();
app.set('view engine', 'ejs');

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    res.render('index')
})

// Start Server at assigned port
var PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Server created at port ${PORT}`) });