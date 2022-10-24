import Product from "../models/productsModel";

const productController = {
  addNew: async (req, res) => {
    const { name, price } = req.body;

    const product = new Product({ name, price });

    try {
      await product.save();

      res.status(201).json({
        message: "Product saved!",
        product,
      });
    } catch (error) {
      res.status(500).json({
        message: "Failed to save!",
        error,
      });
    }
  },

  getProducts: async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getOneProduct: async (req, res) => {
    try {
      const oneProduct = await Product.findById(req.params.id);

      if (!oneProduct) {
        res.status(404);
      }

      res.status(200).send(oneProduct);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

export default productController;
