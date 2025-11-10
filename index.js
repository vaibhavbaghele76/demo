const college1 = document.getElementById("mmfwebsi");
const college2 = document.getElementById("matimitralink");

college1.addEventListener("click", () => {
  college2.classList.toggle("show");
});


setTimeout(()=>{
  document.getElementById('donationPopup').style.display='flex';
},3000);

function closePopup(){
  document.getElementById('donationPopup').style.display='none';
}