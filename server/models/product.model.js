import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
}, {
  versionKey: false
})

const Product = mongoose.model("Product", ProductSchema)

export { Product }