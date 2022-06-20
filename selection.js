  document.onselectionchange = function() {
    console.log('New selection made');
    let selection = document.getSelection();
    console.log('selection is '+selection);
    console.dir(selection);
  };
