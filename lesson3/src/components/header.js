const Header = function () {
  // Backticks - string interpolation
  return /*html*/`
      <header class="bg-blue-500">
        <div class="container mx-auto flex items-center">
          <img class="w-32 p-5" src="/logo.png"/>
          <div class="flex grow ml-24">
            <input class="w-full h-10 pl-4" placeholder="Tìm kiếm"/>
            <button class="w-36 flex bg-[#0D5CB6] text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 mt-2.5 ml-2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <span class="pl-2 pt-2">Tìm Kiếm</span>  
            </button>
          </div>
          <div class="flex">
          <img class="w-8 h-8 ml-10 mt-2" src="/public/icons/user.png"/>
        <span class="ml-5 mt-1 mr-10 text-white">
        Đăng Nhập / Đăng Ký<br>
        Tài khoản
        </span>
          </div>

          <div class="flex">
          <img class="w-8 h-8 ml-10 mt-2" src="./public/icons/cart.png"/>          
          <span class="ml-5 mt-3 text-white">
          Giỏ Hàng
          </span>
          </div>
        </div>
      </header>
    `
}

export default Header