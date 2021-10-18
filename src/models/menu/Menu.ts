import Api from "@/api/Api";
let products:any;
export default class Menu {
  static api = Api.getInstance();
  static BASE_URL = Menu.api.http.defaults.baseURL
    ? Menu.api.http.defaults.baseURL
    : "/";
  static _url(url: any) {
    return [Menu.BASE_URL].concat(url).join("/");
  }

  static findAllTypes(params: any) {
    return Menu.api.get(Menu.BASE_URL + "/types", { params: params });
  }

  static findAllPorducts(params: any) {
    return Menu.api.get(Menu.BASE_URL + "/products", { params: params });
  }

  static async getList(params: any) {
    const types = await Menu.findAllTypes(params);
    const menu = await Menu.findAllPorducts(params);
    return Menu.list(types, menu);
  }

  static list(types: any, menuData: any[]) {
    menuData.map((menu) => {
      const product = {
        ...menu,
        price: Number(menu.price).toFixed(2),
      };
      Menu.createAndOrderForTypesList(types, product, menu);
    });
    return products;
  }

  static createAndOrderForTypesList(types: any[], product: any, menu: { typeId: any; }) {
    return types.map((type) => {
      if (menu.typeId === type.id) {
        if (products[type.name] === undefined) {
          products[type.name] = [];
        }
        products[type.name] = [...products[type.name], product];
      }
    });
  }
}
