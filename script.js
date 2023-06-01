// const data = [40, 65, 25, 199, 250];
// data.sort((a, b) => {
//   return b - a;
// });
// console.log(data);

// const row = [
//   {
//     id: 1,
//     nama: "sabruna",
//     umur: 36,
//     is_manager: true,
//     start_date: "02-28-2019",
//   },
//   {
//     id: 2,
//     nama: "diluc",
//     umur: 16,
//     is_manager: true,
//     start_date: "03-28-2019",
//   },
//   {
//     id: 3,
//     nama: "jean",
//     umur: 46,
//     is_manager: false,
//     start_date: "04-28-2019",
//   },
// ];
// row.sort((a, b) => {
//   return a.umur - b.umur;
// });
// console.log(row);

// const ami = row.sort((a, b) => a.umur - b.umur);

// console.log(ami);
// const cek = row.filter((a) => a.nama == "diluc");
// console.log(cek);

// const kata = "AkU sAya Dia kaMU";
// const baru = kata.toUpperCase();
// console.log(kata.toUpperCase());
// const index1 = baru.includes("DIA");
// console.log(index1);

const strArray = ["JavaScript", "Java", "C"];
function forEach(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}
const lenArray = forEach(strArray, (item) => {
  return item.length;
});
console.log(lenArray);
