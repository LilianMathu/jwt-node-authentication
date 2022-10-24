import Product from "../models/productsModel";

const productController = {
  addNew: async (req, res) => {
    const { name, price } = req.body;

    try {
      const product = new Product({ name, price });

      const saveProduct = await product.save();

      res.status(200).json({
        message: "Product saved!",
        saveProduct,
      });
    } catch (error) {
      res.status(401).json({
        message: "Failed to save!",
      });
    }
  },
};

export default productController;
