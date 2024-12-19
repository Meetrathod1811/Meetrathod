let cvbtn = document.querySelector(".cvbtn");
 
 let sidebar= document.querySelector("#sidebar-btn")
const hidenav = document.querySelector("#hide-sidebar-btn");
const li =document.getElementsByTagName("LI");
let sideNavbar =document.querySelector("sidebar");

// let section =document.getElementsByClassName(".sections")
// // let navlinks = document.getElementsByTagName("li");



// // function active() {
// //      navlinks.document.querySelectorAll("li").style.backgroundColor="red"
// // }

// window.onscroll = ()=>{
//   section.forEach(sec => {
//     let top =window.scrollY;
//     let offset= sec.offsetTop;
//     let height =sec.offsetHeight;
//     let id =sec.getAttribute('id');

//     if(top>=offset && top < offset + height){
//       navlinks.forEach(links=>{
//         links.classList.remove('active');
//         document.querySelector('header nav ul li a [href*=' +id +']').classList.add("active");
//       });
//     };
//   });
// };



 sidebar.addEventListener("click",()=>{
  document.querySelector(".sidebar").style.display="flex";

 });
 
 hidenav.addEventListener("click",()=>{
  document.querySelector("nav").style.display="none";

 });

 function hidenavbar(){
  document.querySelector(".sidebar").style.display="none";
 }

// function hideNav(){
//  sidebar.style.display="none"
// }


// cvbtn.addEventListener("click", () => {
//   cvbtn.innerText = " Downloading ...";
//   document.querySelector(".cvbtn").style.backgroundColor = "green";
//   document.querySelector(".cvbtn").style.borderColor = "green";
//   // document.querySelector(".cvbtn").style.boxShadow = "green";
// });
