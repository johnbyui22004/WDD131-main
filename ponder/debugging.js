const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
radius = 4;
console.log(area);
area = radius * radius * PI;
console.log(area);
console.log(radius);

function circleArea(radius) {
  const PI = 3.14;
  let area = radius * radius * PI;
  return area;
}

console.log(circleArea(3));
console.log(area);