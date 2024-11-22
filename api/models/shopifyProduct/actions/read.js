import { api } from "gadget-server"; // Import Gadget API client

export async function getAllProducts(req, res) {
  try {
    // Truy vấn tất cả các sản phẩm từ bảng shopifyProduct
    const products = await api.shopifyProduct.findMany({
      select: {
        id: true,
        title: true,
        price: true,
        vendor: true,
      },
    });

    // Trả về dữ liệu dưới dạng JSON
    res.json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
