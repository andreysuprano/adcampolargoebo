const mercadopago = require('mercadopago');

exports.getGlobalId = () => {
  mercadopago.configure({
    access_token: 'TEST-8990299850686526-092619-02ec8fcb2801e4c4f302560d829e1ada-201829909'
  });
  
  const preference = {
    items: [
      {
        title: 'Inscrição EBO-2020',
        unit_price: 70.00,
        quantity: 1,
      }
    ]
  };

    mercadopago.preferences.create(preference)
    .then(function(response){
      global.id = response.body.id;
    }).catch(function(error){
      console.log(error);
    });

    return global.id;
}