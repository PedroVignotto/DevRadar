export default function parseStringAsArray(array) {
  return array.split(',').map(arr => arr.trim());
}