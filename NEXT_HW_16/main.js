// js code와 html 연결
// btn
const showbtn1 = document.getElementById('btn1');
const showbtn2 = document.getElementById('btn2');
const showbtn3 = document.getElementById('btn3');
const showbtn4 = document.getElementById('btn4');
// banners
const showbanner1 = document.getElementById('banner1');
const showbanner2 = document.getElementById('banner2');
const showbanner3 = document.getElementById('banner3');
const showbanner4 = document.getElementById('banner4');

//버튼을 클릭할 시 해당되는 배너가 나오는 이벤트
showbtn1.addEventListener('click', function () {
    showbanner1.style.display = 'block';
    showbanner2.style.display = 'none';
    showbanner3.style.display = 'none';
    showbanner4.style.display = 'none';
});

showbtn2.addEventListener('click', function () {
    showbanner2.style.display = 'block';
    showbanner1.style.display = 'none';
    showbanner3.style.display = 'none';
    showbanner4.style.display = 'none';
});
showbtn3.addEventListener('click', function () {
    showbanner3.style.display = 'block';
    showbanner2.style.display = 'none';
    showbanner1.style.display = 'none';
    showbanner4.style.display = 'none';
});
showbtn4.addEventListener('click', function () {
    showbanner4.style.display = 'block';
    showbanner2.style.display = 'none';
    showbanner3.style.display = 'none';
    showbanner1.style.display = 'none';
});

//기본값은 banner1보여주기
document.addEventListener('DOMContentLoaded', function () {
    showbanner1.style.display = 'block';
    showbanner2.style.display = 'none';
    showbanner3.style.display = 'none';
    showbanner4.style.display = 'none';
});

//탭 클릭되면 색 변하기
showbtn1.addEventListener('mouseenter', function () {
    showbtn1.style.backgroundColor = 'red';
});
showbtn2.addEventListener('mouseenter', function () {
    showbtn2.style.backgroundColor = 'red';
});
showbtn3.addEventListener('mouseenter', function () {
    showbtn3.style.backgroundColor = 'red';
});
showbtn4.addEventListener('mouseenter', function () {
    showbtn4.style.backgroundColor = 'red';
});

//탭 다른 거 클릭되면 색 변하기
showbtn1.addEventListener('mouseleave', function () {
    showbtn1.style.backgroundColor = ''; //기본값
});
showbtn2.addEventListener('mouseleave', function () {
    showbtn2.style.backgroundColor = ''; //기본값
});
showbtn3.addEventListener('mouseleave', function () {
    showbtn3.style.backgroundColor = ''; //기본값
});
showbtn4.addEventListener('mouseleave', function () {
    showbtn4.style.backgroundColor = ''; //기본값
});
