/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
console.log("Ada 2 scope: Global dan Local ");
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
console.log("Global Scope  biasanya dideklarasikan di awal program file dan dapat digunakan dimanapun pada program tersebut.");

console.log("Local Scope merupakan variabel yang hanya dapat digunakan/diakses pada fungsi tempatnya dideklarasaikan");
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript
let a = "My";
function greet() {
    let b = "Name"
    console.log(a + b);
}

console.log("a (variabel global) dan b (variabel lokal)");

/// WRITE YOUR ANALYSIS HERE

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/////Hasil yang dikeluarkan adalah mariah dikarenakan variabel name sudah diassign dengan nilai vaiabel lokal yang diberikan saat pemanggilan fungsinya.
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));

//Hasil yang dikeluarkan adalah mariah