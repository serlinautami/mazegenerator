
/**
 * @name mazeGenerator
 * @description test membuat maze generator dengan pola pertama
 * @by serlina utami
 * jalankan dengan 
 * npm start
 * 
 * S = input ukuran maze
 */

const mazeGenerator = function (s) {

  // pengecekan ukuran maze jika nilainya bukan integer
  if (typeof s !== "number") {
    return null;
  }
  
  var n = 1; // n untuk menentukan jumlah baris dari atas ke bawah
  var j = 2; // j untuk menentukan lubang pada tembok antara kiri dan kanan

  // lakukan perulangan untuk baris
  while (n <= s) {

    var arr = []; // array untuk menampung nilai membangun tembok maze
    var i = 1; // i untuk menentukan jumlah jajar dari kiri ke kanan

    // modulus menentukan ganjil dan genap, nilainya 1  = ganjil dan 0 = genap
    if (n % 2) {

      // masuk perulangan baris ganjil

      // perulangan untuk membentuk jajar
      while (i <= s) {

        // kondisi untuk menentukan lubang tembok sisi kiri dan kanan
        if (i !== j) {
          arr.push("@"); // jika true, maka tembok terbentuk
        } else {
          arr.push(" "); // jika false maka lubang terbentuk
        }
        i++;
      }
    } else {

      // perulangan untuk membentuk jajar
      while (i <= s) {

        // masuk perulangan baris genap

        // membentuk jalan untuk semua barisan genap
        if (i === 1 || i === s) {
          arr.push("@"); // jika true, hanya tembok dari awal dan ujung yang diberi tembok
        } else {
          arr.push(" "); // jika false, maka akan membentuk jalan
        }
        i++;
      }

      // kondisi untuk menentukan lubang antara sisi kiri dan kanan pada baris yang ganjil
      // posisi lubang awal ada di sebelah kiri
      if (j === 2) {
        j = s - 1; // jika true, maka posisi akan berubah menjadi di kanan
      } else {
        j = 2; // jika false, maka posisi kembali ke kiri
      }
    }

    // menggabungkan tembok yang disusun menjadi 1
    arr = arr.join("");

    // menampilkan ke layar terminal
    console.log(arr);
    n++;
  }
};




/**
 * Ekspektasi hasil akhir
    @ @@@@@@@@@@@@@
    @             @
    @@@@@@@@@@@@@ @
    @             @
    @ @@@@@@@@@@@@@
    @             @
    @@@@@@@@@@@@@ @
    @             @
    @ @@@@@@@@@@@@@
    @             @
    @@@@@@@@@@@@@ @
    @             @
    @ @@@@@@@@@@@@@
    @             @
    @@@@@@@@@@@@@ @
 */
// generator di panggil, silahkan ubah nilainya
mazeGenerator(15);


// perubahan di github
