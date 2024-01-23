import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
import Banner from "../components/banner";
import Menu from "../components/menu";
import Advertisement from "../components/advertisement";

// Data
import data from "../../db.json" assert { type: "json" };
// Pages
const HomePage = function () {
  return /*html*/ `
  
      ${Header()}
      <h1 class="pt-1 text-2xl h-10 bg-slate-300 text-center font-medium">Nhà Sách Tiki</h1>
      <div class="container mx-auto flex">
      <div class=" w-2/5">
      ${Menu()}
      </div>
      <div class="">
      ${Banner()}
      <div class="w-full grid grid-cols-4 gap-4">
      ${data.books
        .map(function (book) {
          return Card(book);
        })
        .join("")}
        </div>
        </div>
      </div>
      ${Footer()}
      
    `;
};

export default HomePage;
