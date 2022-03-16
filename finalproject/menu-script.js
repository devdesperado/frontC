//기본 데이터 SET JSON
const menuDb = {
  pageName: "나의냉장고", //홈페이지 이름
  mainPage: "index.html", //로고 클릭시 링크
  logoTheme: '<i class="fa-solid fa-utensils"></i>', //FontAwesome 로고
  menuList: [
    //메뉴 이름, 링크 url
    {
      name: "로그인",
      url: "./index.html",
    },
    {
      name: "레시피리스트",
      url: "./Gallary.html",
    },
  ],
};

//CREATE ELEMENTS
const navBar = document.createElement("nav");
navBar.classList.add("navbar");
const navBar_logo = document.createElement("div");
navBar_logo.classList.add("navbar-logo");
const navBar_menu = document.createElement("div");
navBar_menu.classList.add("navbar-menu");
const navBar_links = document.createElement("div");
navBar_links.classList.add("navbar-links");
const navBar_btn = document.createElement("div");
navBar_btn.classList.add("navbar-btn");

//LOGO 관련
navBar_logo.innerHTML = `
    <a href="${menuDb.mainPage}">
        ${menuDb.logoTheme}
        <h1>${menuDb.pageName}</h1>
    </a>
`;

//MENU 관련
const menu_ulTag = document.createElement("ul");
menuDb.menuList.forEach((menu) => {
  menu_ulTag.innerHTML += `
            <li><a href="${menu.url}">${menu.name}</a></li>
        `;
});
navBar_menu.append(menu_ulTag);

//메뉴 햄버거 버튼 관련
navBar_btn.innerHTML = `<i class="fas fa-bars"></i>`;
//메뉴 햄버거 버튼 관련 (Script)
navBar_btn.addEventListener("click", () => {
  navBar_menu.classList.toggle("active");
  navBar_links.classList.toggle("active");
});

//append All Childs
navBar.append(navBar_logo, navBar_menu, navBar_links, navBar_btn);
document.querySelector("body").append(navBar);
