
document.onload = () => {
  function toggleState() {
    alert('hello')
  }
}
document.addEventListener("load", toggleState);

function toggleState() {
  alert('hello')
}
let state = [document.getElementsByName('state[0]'), 
              document.getElementsByName('state[1]')];

              
console.log(state);
