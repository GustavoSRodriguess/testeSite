//popup do formulário

document.querySelector(".buttons-header .apresentacao").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".buttons-header .demonstracao").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .fecharBtn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});

//dislog do video

function openDialog(id){
    document.getElementById("videoDialog").showModal()
  }
  
  function closeDialog(id){
    document.getElementById("videoDialog").close()
  }


