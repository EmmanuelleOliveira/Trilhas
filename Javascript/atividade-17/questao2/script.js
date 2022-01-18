let size = 14;

function makeSizer() {
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
  
  const menos = makeSizer();
  const mais = makeSizer();
  
  document.getElementById('smaller').onclick = menos.decrement;
  document.getElementById('bigger').onclick = mais.increment;
  