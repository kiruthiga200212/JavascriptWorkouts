document.addEventListener('scroll', () => {
    const scrollTop =  document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

   
    const progress = (scrollTop / docHeight) * 100;

   
    document.getElementById('progressBar').style.width = progress + '%';

    
    const imgMove = scrollTop * 0.5; 
    document.getElementById('scrollImage').style.transform = `translateY(${imgMove}px)`;
    
});

window.addEventListener("click",()=>{
    var contentVisible = document.getElementById("content");
    contentVisible.style.display ="block";
   
})