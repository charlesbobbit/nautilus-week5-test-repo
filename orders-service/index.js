// orders-service/index.js

const express = require('express');
const app = express();

const ordersRoutes = require('./routes/ordersRoutes');

app.use('/orders', ordersRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Orders service is running on port ${PORT}`);
});
