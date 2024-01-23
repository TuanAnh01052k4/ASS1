import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import ProductDetail from "../components/productDetail";
import data from "../../db.json" assert { type: "json" };
import Description from "../components/description";
const fiveBooks = data.books.slice(0, 5);
const Product_page = function () {
  return /*html*/ `
        ${Header()}
        <div class="bg-[#fafafa] w-screen h-[2.5rem]"></div>
        <div class="container">
        ${ProductDetail(data.books[0])}
        <div class="flex flex-col gap-[1.56rem] ml-[18rem] mt-[3.4rem]">
      <p class="text-[1.25rem] font-roboto">Sản Phẩm Tương Tự</p>
      <div class="flex flex-row gap-5">
        
        ${fiveBooks.map(function (book) {
          return Card(book);  
        })}
      </div>
    </div> 
        ${Description(data.books[0])}
        </div>
        ${Footer()}
    `
}

export default Product_page