btn =  document.querySelectorAll("button");
btn.forEach((btn, i) => {
      btn.addEventListener("click", function(){
      if(btn.getAttribute("aria-expanded") == "false"){
        btn.setAttribute('aria-expanded', 'true');
        btn.classList.toggle('accordion__button--bold');
        return;
      }
      btn.setAttribute('aria-expanded', "false");
      btn.classList.remove('accordion__button--bold');
      }
  );
}
);
