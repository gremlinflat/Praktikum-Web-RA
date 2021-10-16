var fact_log = [];
function factorial(value) {
  if (value > 0) {
    fact_log = [1, 1];
    let anchor = 1;
    for (let i = 2; i <= value; i++) {
      anchor = anchor * i;
      fact_log.push(anchor);
    }
    return anchor;
  } else {
    return -1;
  }
}

function changeWeather(value) {
  switch (value) {
    case "Sunny":
        "Panas cok!!, 🥵"
      break;
    case "Rainy":
        "Ujan nich, tiati sakit tar klo sakit jangan nnangis 💦"
      break;
    case "Cloudy":
        "banyak kabut cok, banyak mizukage diluar 👇😑👆"
      break;
    case "Thunder":
        "Banyak halilintar, jangan keluar rumah dulu deh kecuali mau dapet giveaway 🤑"
      break;
    case "Snowy":
        "Diluar dingin bgt, tapi gak sedingin dia ke kamu. 👊😢"
      break;
    case "Windy":
        "banyak angin gan, angin~ bawalah jiwaku melayaang "
      break;
    default:
      break;
  }
}
