// const cetakStruk = (warung, tanggal, kasir) => {
//   //Nama warung
//   let rowWarung;
//   if (warung.length < 30) {
//     let space = 15 - Math.floor(warung.length / 2);
//     rowWarung = " ".repeat(space) + warung;
//   } else {
//     rowWarung = warung.substring(0, 30);
//   }
//   //Tanggal
//   let rowTanggal = `Tanggal : ${" ".repeat(
//     20 - tanggal.length
//   )}${tanggal.substring(0, 20)}`;
//   //Nama Kasir
//   let rowKasir = `Nama Kasir : ${" ".repeat(
//     17 - kasir.length
//   )}${kasir.substring(0, 17)}`;
//   //Baris pemisah
//   let rowPemisah = "=".repeat(30);
//   console.log(rowWarung);
//   console.log(rowTanggal);
//   console.log(rowKasir);
//   console.log(rowPemisah);
// };
// cetakStruk("Warung Makan Sederhana", "21/21/2020", "Jaya Bakti Polisi");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let numOrder;
// rl.on("line", (answer) => {
//   numOrder = Number(answer);
//   let products = [];
//   for (let i = 1; i <= Number(numOrder); i++) {
//     let nameProduct;
//     rl.on("line", (answer) => {
//       nameProduct = answer;
//     });
//     let priceProduct;
//     rl.on("line", (answer) => {
//       priceProduct = answer;
//     });
//     products.push({ nameProduct, priceProduct });
//   }
//   // rl.close();
// });
const readline = require("readline");
const cetakStruk = async () => {
  const rl = await readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let numOrder;
  let a = await rl.question("What is your favorite food? ", (answer) => {
    numOrder = answer;
  });
  // let products = [];
  console.log(numOrder);
  // for (let i = 1; i <= Number(numOrder); i++) {
  //   rl.setPrompt(`Nama produk ${i} : `);
  //   let nameProduct = rl.getPrompt();

  //   rl.setPrompt(`Harga ${i} :`);
  //   let priceProduct = rl.getPrompt();

  //   let productOrdered = { nameProduct, priceProduct };
  //   products.push(productOrdered);
  // }
  // let numOrder = prompt("Berapa jumlah jenis makanan yang diorder");
};
cetakStruk();

// console.log("I will now ask you for your name.");
// process.stdin.setEncoding("utf8");
// var name;
// process.stdin.on("readable", function () {
//   name = process.stdin.read();
//   if (name !== null) {
//     console.log("Hello ".concat(name, ". How are you"));
//     process.exit();
//   }
// });
