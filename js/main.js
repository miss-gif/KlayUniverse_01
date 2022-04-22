console.log("연결확인");

const navList = document.querySelectorAll("nav>ul>li>a");

navList[0].addEventListener("click", function () {
  navList[0].classList.add("onClick");
  navList[1].classList.remove("onClick");
  navList[2].classList.remove("onClick");
  navList[3].classList.remove("onClick");
  navList[4].classList.remove("onClick");
  navList[5].classList.remove("onClick");
});

navList[1].addEventListener("click", function () {
  navList[0].classList.remove("onClick");
  navList[1].classList.add("onClick");
  navList[2].classList.remove("onClick");
  navList[3].classList.remove("onClick");
  navList[4].classList.remove("onClick");
  navList[5].classList.remove("onClick");
});

navList[2].addEventListener("click", function () {
  navList[0].classList.remove("onClick");
  navList[1].classList.remove("onClick");
  navList[2].classList.add("onClick");
  navList[3].classList.remove("onClick");
  navList[4].classList.remove("onClick");
  navList[5].classList.remove("onClick");
});

navList[3].addEventListener("click", function () {
  navList[0].classList.remove("onClick");
  navList[1].classList.remove("onClick");
  navList[2].classList.remove("onClick");
  navList[3].classList.add("onClick");
  navList[4].classList.remove("onClick");
  navList[5].classList.remove("onClick");
});

navList[4].addEventListener("click", function () {
  navList[0].classList.remove("onClick");
  navList[1].classList.remove("onClick");
  navList[2].classList.remove("onClick");
  navList[3].classList.remove("onClick");
  navList[4].classList.add("onClick");
  navList[5].classList.remove("onClick");
});

navList[5].addEventListener("click", function () {
  navList[0].classList.remove("onClick");
  navList[1].classList.remove("onClick");
  navList[2].classList.remove("onClick");
  navList[3].classList.remove("onClick");
  navList[4].classList.remove("onClick");
  navList[5].classList.add("onClick");
});

// 슬라이드 설정

const swiper = new Swiper(".swiper", {
  direction: "horizontal", // 수평 슬라이드
  // autoplay: {
  //   // 자동 재생 여부
  //   // delay: 5000, // 5초마다 슬라이드 바뀜
  // },
  loop: true, // 반복 재생 여부
  spaceBetween: 20, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  slidesPerGroup: 1, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
});

// ROAD MAP 버튼 기능

const roadmapBtn = document.querySelectorAll("#ROADMAP>article>.title>button");
const roadmapList = document.querySelectorAll("#ROADMAP>article>ul>li");

roadmapBtn[0].addEventListener("click", function () {
  roadmapBtn[0].classList.add("onClick");
  roadmapBtn[1].classList.remove("onClick");
  roadmapBtn[2].classList.remove("onClick");
  roadmapList[0].classList.remove("hiding");
  roadmapList[1].classList.add("hiding");
  roadmapList[2].classList.add("hiding");
});

roadmapBtn[1].addEventListener("click", function () {
  roadmapBtn[0].classList.remove("onClick");
  roadmapBtn[1].classList.add("onClick");
  roadmapBtn[2].classList.remove("onClick");
  roadmapList[0].classList.add("hiding");
  roadmapList[1].classList.remove("hiding");
  roadmapList[2].classList.add("hiding");
});

roadmapBtn[2].addEventListener("click", function () {
  roadmapBtn[0].classList.remove("onClick");
  roadmapBtn[1].classList.remove("onClick");
  roadmapBtn[2].classList.add("onClick");
  roadmapList[0].classList.add("hiding");
  roadmapList[1].classList.add("hiding");
  roadmapList[2].classList.remove("hiding");
});

new Swiper(".TEAM .swiper", {
  direction: "horizontal", // 수평 슬라이드
  // autoplay: {
  //   // 자동 재생 여부
  //   // delay: 5000, // 5초마다 슬라이드 바뀜
  // },
  loop: true, // 반복 재생 여부
  spaceBetween: 20, // 슬라이드 사이 여백
  slidesPerView: 7, // 한 번에 보여줄 슬라이드 개수
  slidesPerGroup: 1, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  // mousewheel: true, // 마우스 휠 기능
});

new Swiper(".COMMUNITY .swiper", {
  direction: "horizontal", // 수평 슬라이드
  // autoplay: {
  //   // 자동 재생 여부
  //   // delay: 5000, // 5초마다 슬라이드 바뀜
  // },
  loop: true, // 반복 재생 여부
  spaceBetween: 20, // 슬라이드 사이 여백
  slidesPerView: 4, // 한 번에 보여줄 슬라이드 개수
  slidesPerGroup: 1, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  // mousewheel: true, // 마우스 휠 기능
});
