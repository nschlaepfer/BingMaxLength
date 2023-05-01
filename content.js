function updateMaxLength() {
    const searchbox = document.querySelector("#searchbox");
    if (searchbox) {
      searchbox.setAttribute("maxlength", "200000");
      return true;
    }
    return false;
  }
  
  function selectCreative() {
    const labels = document.querySelectorAll("span.label");
    for (const label of labels) {
      if (label.textContent === "Creative") {
        label.click();
        return true;
      }
    }
    return false;
  }
  
  function observeDOMChanges() {
    const observer = new MutationObserver((mutations) => {
        let creativeSelected = selectCreative();
        let maxLengthUpdated = updateMaxLength();
      
  
      if (maxLengthUpdated && creativeSelected) {
        observer.disconnect();
      }
    });
  
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
  
  observeDOMChanges();
  