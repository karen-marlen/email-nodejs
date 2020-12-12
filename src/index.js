// ====== inicialización del proyecto ======
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// ===== configurar proyecto =====
app.listen(3000, () => {

})