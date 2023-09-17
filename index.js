const ham= document.getElementById('ham');
const sidebar=document.querySelector('.sidebar')
// console.log("hello");
alert("The site is under development so some functions may not work")

ham.addEventListener('click', function(event) {
    event.stopPropagation();
    sidebar.classList.toggle('active');
    console.log("clicked");
});
document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target)) {
      sidebar.classList.remove('active');
    }
  });