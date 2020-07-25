import { Product, STATUS } from "./models/products";
var dateFormat = require("dateformat");

export let Products = new Array();
export async function fillData() {
  for (let index = 1; index <= 10; index++) {
    Products.push(
      new Product(
        index,
        `Product${index}`,
        `Description${index}`,
        index,
        `Warranty${index}`,
        index * 100,
        STATUS.inactive,
        dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT")
      )
    );
  }
}
