const operatorBtn = document.querySelectorAll(".operator");
const numberBtn = document.querySelectorAll(".number");
const clearBtn = document.querySelector("#clear");
const calcView = document.querySelector("#calcu-view");

let viewResult = '';

clearBtn.addEventListener("click", () => {
  calcView.innerHTML = "&nbsp;";
  viewResult = '';
});

function init(){
  for(const operator of operatorBtn){
    operator.addEventListener('click', function(event){
      const target = event.currentTarget;
      const oper = target.innerText;
      screen(oper);
    })
  }

  for(const number of numberBtn){
    number.addEventListener('click', function(event){
      const target = event.currentTarget;
      const num = target.innerText;
      screen(num);
    })
  }
}

function screen(char) {
  let calcu;
  if(char === '='){
    calcu = eval(viewResult);
    viewResult += char;
    viewResult += calcu.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    calcView.innerHTML = viewResult;
    return 0;
  }
  viewResult += char;
  calcView.innerHTML = viewResult;
}
init();