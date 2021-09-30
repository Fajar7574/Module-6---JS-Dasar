/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let prima = (angka) => {
    let pembagi = 0;
    for(let i=1; i <= angka; i++){
      if(angka%i == 0){
        pembagi++
      }
    }
    if(pembagi == 2){
      y="bilangan prima";
    }
    else{
      y="bukan bilangan prima";
    }
  }
  for(let j=1;j<=100;j++){
      prima(j);
      console.log(j+" "+y)
  }
  
  /// Soal - 02
  /// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
  let primeCounter = 0;
  let fiftiethPrime = 0;
  
  /// EDIT HERE
  while(fiftiethPrime<50 ){
    prima(primeCounter);
    if(y==="bilangan prima"){
      fiftiethPrime++;
      console.log("prima ke "+fiftiethPrime+" bilangannya adalah "+primeCounter)
      primeCounter++;
    }
    else {
      primeCounter++;
    }
  }
  ///}
  
  /// Soal - 03
  /// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
  let oddCounter = 0;
  let fiftiethOdd = 0;
  
  /// EDIT HERE
  do {
  
  if (oddCounter%2==1) {
      fiftiethOdd++;
      console.log(oddCounter+" merupakan bilangan ganjil ke "+fiftiethOdd)
      oddCounter++;
      
  }
  else {
  oddCounter++;
  }
  } 
  while (fiftiethOdd<50)
  