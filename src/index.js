// ====== inicialización del proyecto ======
const express = require('express');
const app = express();
const path = require('path');


app.use(express.urlencoded({extended: false}));
app.use(express.json()); // datos en formato json

// ==== import index.js desde router
app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));



// ===== configurar proyecto =====
app.listen(3000, () => {

})