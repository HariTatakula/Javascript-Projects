function changeText(){
    let paraChange = document.getElementById('paramChange');
  alert("paragragh will be changed on click")  ;
paraChange.innerHTML = "hello";
paraChange.style.color ="blue";
paraChange.style.fontSize ="100px";
paraChange.style.backgroundColor ="green";
confirm("you have chnaged the colors");

}
function addlist(){
  let newlist = document.getElementById('addList').innerText.valueOf;
  console.log(newlist);

}