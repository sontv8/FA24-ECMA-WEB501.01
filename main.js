/*
1. Function
    - khởi tạo hàm
    - các kiểu hàm trong js
        - hàm không có tham số, không có giá trị trả về
        - hàm không có tham số, có giá trị trả về
        - hàm có tham số, không có giá trị trả về
        - hàm có tham số, có giá trị trả về
    - arrow function
    - default params
*/
// function sum() {}

// const sum = function (a, b) {
//   console.log(a + b);
// //   return a + b;
// };
// sum(10, 20);
// tham số: giống như biến, được truyền vào hàm khi khởi tạo
// đối số: giá trị thực tế được truyền vào hàm khi gọi hàm

// const sum = function (a, b) {
//   // ....
// };

// const sum2 = (a = 10, b = 20) => a + b;
// console.log(sum2(50, 50));

/*
  2. Array
    - khởi tạo mảng
    - các phương thức xử lý mảng
        cơ bản:
            - length
            - push()
            - pop()
            - join()
            - toString()
            - concat()
            - splice()
            - indexOf()
            - includes()
        nâng cao:
            - map
            - filter
            - find
    - sự khác nhau giữa function và method
*/

const data = [1, "product 1", true, {}];

// console.log(data.length);
// data.push("abcd");
// console.log(data);

// data.pop();
// console.log(data.join("-"));
// console.log(data.toString("-"));
// // console.log(data);

// const fruits = ["apple", "banana"];
// const vegetables = ["carrot", "cabbage"];
// const foods = fruits.concat(vegetables);
// console.log(foods);

const fruits = ["apple", "banana", "orange", "grape"];

// fruits.splice(1, 0, "orange");
// fruits.splice(1, 1, "orange");
// fruits.splice(0, fruits.length);
// console.log(fruits);

// console.log(fruits.indexOf("orange"));

console.log(fruits.includes("abcd"));
/*
Tạo 1 mảng đặt tên là products
trong mảng chứa những dữ liệu sau:
  - "iphone"
  - "xiaomi"
  - "samsung"

viết 1 hàm thực hiện chức năng thêm mới dữ liệu
  dữ liệu được nhập vào từ bàn phím
  sau khi nhập dữ liệu sẽ được thêm vào cuối mảng

viết 1 hàm thực hiện chức năng cập nhật
  nhập vào giá trị cần cập nhật từ bàn phím
  kiểm tra xem giá trị nhập vào có tồn tại trong mảng hay không
  nếu có trong mảng thi cập nhật dữ liệu sang giá trị mới
  nếu không có trong mảng thì log ra "sản phẩm không tồn tại"
*/
const products = ["iphone", "xiaomi", "samsung"];

const addProduct = () => {
  let newProduct = prompt("Nhập tên sản phẩm");

  if (newProduct.trim() == "") return;

  products.push(newProduct);
  console.log(products);
};

// addProduct();

const updateProduct = () => {
  const updateData = prompt("Nhập tên sản phẩm cần cập nhật");
  if (!products.includes(updateData)) return;

  let productIndex = products.indexOf(updateData);
  products.splice(productIndex, 1, prompt("Nhập tên sản phẩm mới"));
  console.log(products);
};
// updateProduct();

/*
  3. Vòng lặp
    - for
    - foreach
    - for of
*/
const studentDatas = ["thienth", "datlt", "sontv"];

// for (let index = 0; index < studentDatas.length; index++) {
//   console.log(studentDatas[index]);
// }

// studentDatas.forEach((value, index) => {
//   console.log(index);
// });

// for (let item of studentDatas) {
//   console.log(item);
// }
