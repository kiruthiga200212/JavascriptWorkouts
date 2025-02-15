window.onload = function() {
    const options = {
      placeholders: ['Pizza', 'Milk', 'Ice cream', 'Fruit Salad'],
      preText: "Search for ",
      stay: 500,
      speed: 100,
      element: '#dynamic-placeholder'
    };
  
    let placeholderIdx = 0;
    let charIdx = 0;
    let intervalId;
  
    function setPlaceholder() {
      const placeholder = options.placeholders[placeholderIdx];
      const placeholderChunk = placeholder.substring(0, charIdx + 1);
      document.querySelector(options.element).setAttribute("placeholder", `${options.preText} " ${placeholderChunk} "`);
    }
  
    function reverseTick() {
      if (charIdx === 0) {
        placeholderIdx = (placeholderIdx + 1) % options.placeholders.length;
        clearInterval(intervalId);
        startForward();
      } else {
        setPlaceholder();
        charIdx--;
      }
    }
  
    function startReverse() {
      clearInterval(intervalId);
      intervalId = setInterval(reverseTick, options.speed);
    }
  
    function forwardTick() {
      const placeholder = options.placeholders[placeholderIdx];
      if (charIdx === placeholder.length) {
        setTimeout(startReverse, options.stay);
      } else {
        setPlaceholder();
        charIdx++;
      }
    }
  
    function startForward() {
      intervalId = setInterval(forwardTick, options.speed);
    }
  
    startForward();
  };