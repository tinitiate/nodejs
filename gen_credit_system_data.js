function randomString(length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomDecimal(min, max, decimalPlaces) {  
    var rand = Math.random()*(max-min) + min;
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand*power) / power;
}

function GenerateData() {
  
  let l_id = Math.floor(Math.random() * 100);
  let l_str = randomString(20);
  let l_date = randomDate(new Date(2012, 0, 1), new Date());
  let l_decimal = randomDecimal(0, 10, 2)
  // return id;
  return l_decimal;
}

console.log(GenerateData());

