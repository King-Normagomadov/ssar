const niceInvoice = require("nice-invoice");

let name= "asir";
let item= "Weapon";
let qty= 102;
let des= "This is for educational purpose";
let num= 213011;

const invoiceDetail = {
    shipping: {
      name: `${name}`,
      address: "12 street kote sangi",
      city: "Kabul",
      state: "Kabul",
      country: "Afghanistan",
      postal_code: 1001
    },
    items: [
      
      {
        item:`${item}`,
        description: `${des}`,
        quantity: `${qty}`,
        price: 0.00,
        tax: ""
      }
    ],
    subtotal: 00,
    total: 00,
    order_number: `${num}`,
    header:{
        company_name: "IT and Communication Departement",
        company_logo: "comp.png",
        company_address: "Nice Invoice. 123 William Street 1th Floor New York, NY 123456"
    },
    footer:{
      text: "This is footer - you can add any text here"
    },
    currency_symbol:".", 
    date: {
      billing_date: "08 August 2020",
      due_date: "10 September 2020",
    }
};

niceInvoice(invoiceDetail, `${name}.pdf`);


