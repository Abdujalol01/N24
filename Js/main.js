window.addEventListener("DOMContentLoaded" , ()=>{
  
  const modal = document.querySelector(".modal"),
  modalClose = document.querySelector(".js-modal-close")
  
  
  function openModal(){
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow="hidden";
  }
  function closeModal(){
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow="";
  }
  modalClose.addEventListener("click" , closeModal);
  const showModal = setTimeout(openModal ,2000);
  
  modal.addEventListener("click" ,(e)=>{
    if(e.target == modal){
      closeModal();
    }
  });
  
  document.addEventListener("keydown" , (e)=>{
    if(e.code=="Escape" && modal.classList.contains("show")){
      closeModal();
    }
  });
  
  function showModalByScroll(){
    if(window.pageYOffset + document.documentElement.clientHeight>= document.documentElement.scrollHeight){
      openModal();
      window.removeEventListener("scroll" , showModalByScroll);
    }
  }
  
  window.addEventListener("scroll" , showModalByScroll);
  
});