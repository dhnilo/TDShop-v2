const orders = [
  {
    _id: {
      $oid: "654d64fc7cc800ddc2bf63d3",
    },
    user: {
      $oid: "654d14225bfeefa0116592b0",
    },
    orderItems: [
      {
        name: "Logitech G-Series Gaming Mouse",
        qty: 1,
        image: "/images/mouse.jpg",
        price: 49.99,
        product: {
          $oid: "654d14225bfeefa0116592b7",
        },
        _id: {
          $oid: "654d64fc7cc800ddc2bf63d4",
        },
      },
      {
        name: "Under Armour Football Shoulder Pads",
        qty: 2,
        image: "/images/shoulderpads.jpg",
        price: 249.99,
        product: {
          $oid: "654d14225bfeefa0116592be",
        },
        _id: {
          $oid: "654d64fc7cc800ddc2bf63d5",
        },
      },
      {
        name: "The Pyschology of Money",
        qty: 1,
        image: "/images/psychologyofmoney.jpeg",
        price: 19.99,
        product: {
          $oid: "654d14225bfeefa0116592c5",
        },
        _id: {
          $oid: "654d64fc7cc800ddc2bf63d6",
        },
      },
    ],
    shippingAddress: {
      address: "807 S 6th Street",
      city: "Kirksville",
      postalCode: "63127",
      country: "United States",
    },
    paymentMethod: "PayPal",
    itemsPrice: 569.96,
    taxPrice: 85.49,
    shippingPrice: 0,
    totalPrice: 655.45,
    isPaid: true,
    isDelivered: false,
    createdAt: {
      $date: "2023-11-09T23:02:20.119Z",
    },
    updatedAt: {
      $date: "2023-11-09T23:02:55.123Z",
    },
    __v: 0,
    paidAt: {
      $date: "2023-11-09T23:02:55.119Z",
    },
    paymentResult: {
      id: "7T5758811V444543T",
      status: "COMPLETED",
      update_time: "2023-11-09T23:02:54Z",
      email_address: "sb-uaubp27576775@business.example.com",
    },
  },
];

const fs = require("fs");

var fields = Object.keys(orders[0]);
var csv = orders.map(function (row) {
  return fields
    .map(function (fieldName) {
      return JSON.stringify(row[fieldName] || "");
    })
    .join(",");
});
csv.unshift(fields.join(",")); // add header column
csv = csv.join("\r\n");

fs.writeFile("orders.csv", csv, function (err) {
  if (err) throw err;
  console.log("File saved!");
});
