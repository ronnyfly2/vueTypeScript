/* eslint-disable */

export default class ShopCarItems {
  static SHOPCAR_DATA = "SHOPCAR_ITEMS";
  static TOTAL_CAR = "SHOPCAR_TOTAL";

  static setShopCarData(ShopCarData: any[]) {
    let serializedShopCarData = JSON.stringify(ShopCarData);
    localStorage.setItem(ShopCarItems.SHOPCAR_DATA, serializedShopCarData);
  }

  static setTotalCar(TotalCar: any) {
    let serializedTotal = JSON.stringify(TotalCar);
    localStorage.setItem(ShopCarItems.TOTAL_CAR, serializedTotal);
  }

  static getTotalCar() {
    let serializedTotal = localStorage.getItem(ShopCarItems.TOTAL_CAR);
    if (serializedTotal === null) return 0;

    return JSON.parse(serializedTotal);
  }

  static getShopCarData() {
    let serializedShopCarData = localStorage.getItem(ShopCarItems.SHOPCAR_DATA);
    if (serializedShopCarData === null) return [];

    return JSON.parse(serializedShopCarData);
  }

  static clear() {
    localStorage.removeItem(ShopCarItems.SHOPCAR_DATA);
  }
}
