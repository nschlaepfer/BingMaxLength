function updateMaxLength() {
    const searchbox = document.querySelector("#searchbox");
    if (searchbox) {
      searchbox.setAttribute("maxlength", "200000");
    }
  }
  
  function selectCreative() {
    const labels = document.querySelectorAll("span.label");
    for (const label of labels) {
      if (label.textContent === "Creative") {
        label.click();
        break;
      }
    }
  }
  
  function onPageLoad() {
    
    selectCreative();
    updateMaxLength();
    
  }
  
  window.addEventListener("load", onPageLoad);
  