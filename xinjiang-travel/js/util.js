// 星级渲染工具
export function renderScore(score) {
  const full = Math.floor(score);
  const half = score % 1 !== 0;
  let starStr = "";
  for(let i=0; i<full; i++) starStr += "★";
  if(half) starStr += "☆";
  return `<span class="score-star">${starStr}</span> ${score}/5`;
}

// 获取url参数（页面跳转传参）
export function getUrlParam(name) {
  const url = new URL(location.href);
  return url.searchParams.get(name);
}

// 图片懒加载基础封装
export function lazyLoadImg(imgList) {
  imgList.forEach(img=>{
    img.loading = "lazy";
  })
}

// 获取餐饮对应标签class
export function getFoodTagClass(type) {
  if(type === "green") return "tag-green";
  if(type === "orange") return "tag-orange";
  if(type === "blue") return "tag-blue";
  return "";
}