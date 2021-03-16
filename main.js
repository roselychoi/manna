const toggleBtn = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navIcons = document.querySelector(".nav__icons");

toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navIcons.classList.toggle("active");
});

let mapContainer = document.getElementById("map"), // 지도의 중심좌표
    mapOption = {
        center: new kakao.maps.LatLng(35.9357327, 127.1653097), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
    };

let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 지도에 마커를 표시합니다
let marker = new kakao.maps.Marker({
    map: map,
    position: new kakao.maps.LatLng(35.9357327, 127.1653097),
});

// 커스텀 오버레이에 표시할 컨텐츠 입니다
// 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
// 별도의 이벤트 메소드를 제공하지 않습니다
let content =
    '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    "            만나청과" +
    '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
    "        </div>" +
    '        <div class="body">' +
    '            <div class="img">' +
    '                <img src="img/store1.png" width="73" height="70">' +
    "           </div>" +
    '            <div class="desc">' +
    '                <div class="ellipsis">전북 완주군 봉동읍 하보상길 19 송덕트리니티C 101동 1층</div>' +
    '                <div class="jibun ellipsis">(우) 55326 (지번) 봉동읍 낙평리 1252</div>' +
    '                <div><a href="http://127.0.0.1:5500/index.html" target="_blank" class="link">홈페이지</a></div>' +
    "            </div>" +
    "        </div>" +
    "    </div>" +
    "</div>";

// 마커 위에 커스텀오버레이를 표시합니다
// 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
let overlay = new kakao.maps.CustomOverlay({
    content: content,
    map: map,
    position: marker.getPosition(),
});

// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
kakao.maps.event.addListener(marker, "click", function () {
    overlay.setMap(map);
});

// 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
function closeOverlay() {
    overlay.setMap(null);
}
