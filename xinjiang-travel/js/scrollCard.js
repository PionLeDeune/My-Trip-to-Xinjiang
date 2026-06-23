import { renderScore, getFoodTagClass } from "./util.js";
import { hotelList, foodList } from "./data.js";

// 渲染首页酒店横向卡片
export function renderHotelScroll(wrapDom) {
  wrapDom.innerHTML = "";
  hotelList.forEach(item=>{
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img class="card-img" src="${item.coverImg}" alt="${item.name}">
      <div class="card-body">
        <div class="card-title">${item.name}</div>
        <div class="card-sub">📍 ${item.area}</div>
        <div>${renderScore(item.score)}</div>
      </div>
    `;
    card.onclick = ()=> window.location.href = `hotel-single.html?hid=${item.id}`;
    wrapDom.appendChild(card);
  })
}

// 渲染首页餐饮横向卡片
export function renderFoodScroll(wrapDom) {
  wrapDom.innerHTML = "";
  foodList.forEach(item=>{
    const card = document.createElement("div");
    card.className = "card";
    const tagCls = getFoodTagClass(item.type);
    card.innerHTML = `
      <div class="card-body">
        <span class="${tagCls}">${item.day}</span>
        <div class="card-title" style="margin-top:8px">${item.title}</div>
        <div class="card-sub">${item.desc}</div>
      </div>
    `;
    card.onclick = ()=> window.location.href = `food-single.html?fid=${item.id}`;
    wrapDom.appendChild(card);
  })
}