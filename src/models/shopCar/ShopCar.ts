export default class ShopCar {
  static totalPriceForProduct = 0;

  static addProduct(listProducts: any[], payload: any) {
    const index = listProducts.findIndex(
      (item: { productId: any; }) => item.productId === payload.productId
    );

    if (index === -1) {
      payload.qty = 1;
      payload.priceItems = payload.price;
      return [...listProducts, payload];
    }

    listProducts[index].qty = listProducts[index].qty + 1;
    listProducts[index].priceItems = ShopCar.setSumOfProductQuantity(
      listProducts[index]
    );

    return [...listProducts];
  }

  static subtractProduct(listProducts: any[], payload: { productId: any; }) {
    const index = listProducts.findIndex(
      (item: { productId: any; }) => item.productId === payload.productId
    );

    if (listProducts[index].qty === 1) {
      listProducts.splice(index, 1);
      return [...listProducts];
    }

    listProducts[index].qty = listProducts[index].qty - 1;
    listProducts[index].priceItems = ShopCar.setSumOfProductQuantity(
      listProducts[index]
    );
    return [...listProducts];
  }

  static setSumOfProductQuantity(product: { qty: any; price: any; }) {
    const qty = product.qty;
    const price = Number(product.price);
    ShopCar.totalPriceForProduct = qty * price;
    return ShopCar.totalPriceForProduct.toFixed(2);
  }

  static removeProduct(listProducts: any[], payload: { productId: any; }) {
    const index = listProducts.findIndex(
      (item: { productId: any; }) => item.productId === payload.productId
    );

    listProducts.splice(index, 1);
    return [...listProducts];
  }

  static getTotalCar(payload: any[]) {
    const total = payload.reduce(
      (beforeTotal: number, item: { priceItems: any; }) => Number(item.priceItems) + beforeTotal,
      0
    );
    return total.toFixed(2);
  }
}
