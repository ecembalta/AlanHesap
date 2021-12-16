const arguments = process.argv.slice(2)

function alanHesabi(yaricap) {
  alan = Math.PI * (yaricap*yaricap);
  console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`);
}

alanHesabi(Number(arguments[0]));

// console.log(process.argv.slice(2));
