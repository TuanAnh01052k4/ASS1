const Card = function (book) {
  return /*html*/`

  <a href="/product/${book.id}" class="group relative block overflow-hidden">
  <button
    class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span class="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-4 w-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <img
        alt="Art"
        src="${book.images[0].base_url}"
        class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

  <div class="relative border border-gray-100 bg-white p-6">
    <span class="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>

    <h3 class="mt-4 text-lg font-medium text-gray-900">
    ${book.name}
    </h3>

    <p class="mt-1.5 text-sm text-gray-700">${book.list_price}</p>

    <form class="mt-4">
      <button
        class="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
        onclick="Product"
      >
        Xem Thêm
      </button>
    </form>
  </div>
</a>
    `
}

export default Card;

// const Card = function (book) {
//   return /*html*/`
//     <a href="/book/${book.id}" class="block">
//       <img
//         alt="Art"
//         src="${book.images[0].base_url}"
//         class="h-64 w-full object-cover sm:h-80 lg:h-96"
//       />
    
//       <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Lorem, ipsum dolor.</h3>
    
//       <p class="mt-2 max-w-sm text-gray-700">
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
//       </p>
//     </a>
//     `
// }

// export default Card;