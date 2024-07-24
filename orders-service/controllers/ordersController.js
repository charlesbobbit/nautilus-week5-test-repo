// orders-service/controllers/ordersController.js

exports.getOrders = (req, res) => {
    res.send('Get all orders');
  };
  
  exports.getOrder = (req, res) => {
    const orderId = req.params.id;
    res.send(`Get order with id ${orderId}`);
  };
  
  exports.createOrder = (req, res) => {
    const { body } = req;
    res.send(`Create order: ${JSON.stringify(body)}`);
  };
  
  exports.updateOrder = (req, res) => {
    const orderId = req.params.id;
    const { body } = req;
    res.send(`Update order with id ${orderId}: ${JSON.stringify(body)}`);
  };
  
  exports.deleteOrder = (req, res) => {
    const orderId = req.params.id;
    res.send(`Delete order with id ${orderId}`);
  };
  