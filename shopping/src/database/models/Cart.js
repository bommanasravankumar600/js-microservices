const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    customerId: { type: String },
    items: [
      {
        product: {
          _id: { type: String, require: true },
          name: { type: String },
          banner: { type: String },
          desc: { type: String },
          type: { type: String },
          unit: { type: Number },
          price: { type: Number },
          supplier: { type: String },
        },
        unit: { type: Number, require: true },
      },
    ],
  },
  {
    toJson: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", CartSchema);
