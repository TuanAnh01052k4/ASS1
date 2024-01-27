// Library - Thư viện
import { render, router } from "./ultilities";
// Components
import Contact from "./pages/Contact";
import HomePage from "./pages/homepage"
import NotFound from "./pages/notFound";
import UserLayout from "./components/layouts/user.js";
import Product_page from "./pages/Product";
import "../style.css"

router.on('/', function () {
  render("#app", () => UserLayout(HomePage))
});

router.on('/product/:id', function ({data}) {
  render("#app", () => Product_page(data.id))
});

// router.on('/book/:id', function ({ data }) {
//   console.log(data.id);
//   render("#app", () => Product(data.id))
// })


router.on('/contact', function () {
  render("#app", Contact)
});

router.notFound(function () {
  render("#app", NotFound)
})
router.resolve();
// 