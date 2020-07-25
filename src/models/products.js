"use stric";

export const STATUS = {
  active: "ACTIVE",
  published: "PUBLISHED",
  inactive: "INACTIVE",
};

export class Product {
  constructor(
    id,
    name,
    description,
    quantity,
    warranty,
    price,
    status,
    createAt
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._quantity = quantity;
    this._warranty = warranty;
    this._price = price;
    this.STATUS = status;
    this._createAt = createAt;
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get description() {
    return this._description;
  }
  set description(description) {
    this._description = description;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(quantity) {
    this._quantity = quantity;
  }
  get warranty() {
    return this._warranty;
  }
  set warranty(warranty) {
    this._warranty = warranty;
  }
  get price() {
    return this._price;
  }
  set price(price) {
    this._price = price;
  }
  get status() {
    return this.STATUS;
  }
  set status(status) {
    this.STATUS = status;
  }
  get createAt() {
    return this._createAt;
  }
  set createAt(createAt) {
    this._createAt = createAt;
  }
}
