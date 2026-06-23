import { roadList, travelDays, spotList } from "./data.js";

// 初始化大小地图
const miniMap = L.map("mini-map").setView([44.2, 82.5], 5);
const mainMap = L.map("main-map").setView([44.2, 82.5], 7);

// 高德无偏移底图
const tileLayer = L.tileLayer(
  "https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}",
  { attribution: "北疆伊犁旅行轨迹地图" }
);
tileLayer.addTo(miniMap);
tileLayer.addTo(mainMap);

// 绘制全部公路轨迹
roadList.forEach(road=>{
  // 模拟路线坐标，可替换真实GPS轨迹数组
  const mockRoute = [
    [43.2 + Math.random() * 3, 80.5 + Math.random() * 6],
    [44.1 + Math.random() * 3, 82.2 + Math.random() * 5]
  ];
  // 主地图线条
  const lineMain = L.polyline(mockRoute, {
    color: road.color,
    weight: 4,
    opacity: 0.7
  }).addTo(mainMap);
  // 缩略地图线条
  const lineMini = L.polyline(mockRoute, {
    color: road.color,
    weight: 3,
    opacity: 0.7
  }).addTo(miniMap);

  // 悬浮高亮
  lineMain.on("mouseover", ()=>{
    lineMain.setStyle({ weight: 9, opacity: 1 });
    lineMain.bindTooltip(`D${road.day} ${road.name}\n${road.desc}`).openTooltip();
  });
  lineMain.on("mouseout", ()=>{
    lineMain.setStyle({ weight: 4, opacity: 0.7 });
  });
  // 点击跳转景点详情页
  lineMain.on("click", ()=>{
    window.location.href = `map-detail.html?roadId=${road.id}`;
  });
});

// 渲染景点标记点位
spotList.forEach(spot=>{
  const markerIcon = L.divIcon({
    html: `<div style="width:14px;height:14px;border-radius:50%;background:${spot.color};border:2px solid #fff;"></div>`,
    className: "",
    iconSize: [14,14]
  });
  const marker = L.marker(spot.latlng, {icon: markerIcon}).addTo(mainMap);
  marker.bindTooltip(spot.name);
  marker.on("click", ()=> window.location.href = `map-detail.html?spotId=${spot.id}`);
});