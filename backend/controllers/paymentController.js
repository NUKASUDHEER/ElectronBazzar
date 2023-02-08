// const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// const stripe = require("stripe")('sk_test_51LqJnvSBuUZFH6sKVUHXe8ZoHLn40xPvOMGQPazI3qTh4OgS6xo1qEMuRHR3fgsKV3o3DJMPIivGAySiUX1UzMLw00glu9he99');

// exports.processPayment = catchAsyncErrors(async (req, res, next) => {
//   const myPayment = await stripe.paymentIntents.create({
//     amount: req.body.amount,
//     currency: "inr",
//     metadata: {
//       company: "Ecommerce",
//     },
//   });

//   res
//     .status(200)
//     .json({ success: true, client_secret: myPayment.client_secret });
// });

// exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
//   console.log('hi');
//   res.status(200).json({ stripeApiKey: 'pk_test_51LqJnvSBuUZFH6sKUK9g9O7hmixf9SYX2Ojn9A3864c6xAoQ3lRgUMHJFLtpmTR1B0i7Ie4RfN9x0AZHosN4OiUm00od56xCN6' });
// });
