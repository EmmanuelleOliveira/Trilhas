function makeSizer(size) {
    function smaller() {
        size -= 1;
        document.body.style.fontSize = size + 'px';
    };
    function bigger(){
        size += 1;
        document.body.style.fontSize = size + 'px';
    };
    return {
        decrement:smaller,
        increment:bigger
    }
  }
  
  const menos = makeSizer(16);
  const mais = makeSizer(16);
  
  document.getElementById('smaller').onclick = menos.decrement;
  document.getElementById('bigger').onclick = mais.increment;
  