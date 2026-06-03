import { faker } from "@faker-js/faker";

export const generateStoreItems = (numEntries, avatarList, catList) => {
  const storeItems = [];
  console.log(avatarList);
  // Helper function to randomly pick an array element
  const arrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < numEntries; i++) {
    storeItems.push({
      id: faker.string.uuid(),
      Photo: arrayElement(avatarList),
      category: arrayElement(catList),
      amount: parseFloat("123.45"),

      // amount: faker.finance.amount({
      //   min: 100,
      //   max: 10000,
      //   dc: 2,
      // }),
      productName: arrayElement([
        "sports wear",
        "Uniform",
        "Shirt",
        "Shorts",
        "Sucks",
        "Barret",
        "Books",
        "BackPack",
        "Pen",
        "Pencil",
        "Ruler",
        "Cardigan",
        "Trousers",
      ]),
      // TransactionID: faker.string.numeric({ length: { min: 10, max: 15 } }), // '197089478'
      Purpose: arrayElement(["Accessories", "Books", "Uniforms"]),
    });
  }
  return storeItems;
};
