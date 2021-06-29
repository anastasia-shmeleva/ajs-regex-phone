export default function converter(number) {
  const glued = number.split(/[- ()]/).join(''); // склеивание в одну строку вместо (, ), или -
  const replaceStart = glued.replace(/^[8]/, '+7'); // замена 8 на +7
  return replaceStart;
}
