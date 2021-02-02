const readline = require("readline");

const cetakIdentitas = (warung, tanggal, kasir) => {
  //Nama warung
  let rowWarung;
  if (warung.length < 30) {
    let space = 15 - Math.floor(warung.length / 2);
    rowWarung = " ".repeat(space) + warung;
  } else {
    rowWarung = warung.substring(0, 30);
  }
  //Tanggal
  let rowTanggal = `Tanggal : ${" ".repeat(
    20 - tanggal.length
  )}${tanggal.substring(0, 20)}`;
  //Nama Kasir
  let rowKasir = `Nama Kasir : ${" ".repeat(
    17 - kasir.length
  )}${kasir.substring(0, 17)}`;
  //Baris pemisah
  let rowPemisah = "=".repeat(30);
  console.log(rowWarung);
  console.log(rowTanggal);
  console.log(rowKasir);
  console.log(rowPemisah);
};

const cetakProduk = (produk) => {
  produk.split("|").map((item) => {
    let lengthDot =
      30 - 2 - item.split("=")[0].length - item.split("=")[1].length;
    let dots = ".".repeat(lengthDot);
    let formatCetak = `${item.split("=")[0]}${dots}Rp${item.split("=")[1]}`;
    return console.log(formatCetak);
  });
  let harga = produk.split("|").map((item) => item.split("=")[1]);
  let hargaTotal = harga.reduce(
    (total, value) => Number(total) + Number(value)
  );
  let formatCetakTotal = `Total${".".repeat(
    30 - 7 - hargaTotal.toString().length
  )}Rp${hargaTotal}`;
  console.log("");
  console.log(formatCetakTotal);
};

const cetakStruk = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  console.log("Tuliskan detail data yang akan dicetak...");
  rl.question(
    "FORMAT->namawarung,tgl,kasir,produk1=harga1|produk2=harga2|produk3=harga3 dan seterusnya sejumlah produk yang dirder : ",
    (answer) => {
      numOrder = answer;
      //namawarung,tgl,kasir,product=harga|product=harga|product=harga
      let namaWarung = answer.split(",")[0];
      let tanggal = answer.split(",")[1];
      let namaKasir = answer.split(",")[2];
      let listProduk = answer.split(",")[3];
      cetakIdentitas(namaWarung, tanggal, namaKasir);
      cetakProduk(listProduk);
      //cetakIdentitas()
      // console.log(numOrder);
      rl.close();
    }
  );
};
cetakStruk();
