let Digitar = document.querySelector('#Digitar');
let Listar = document.querySelector('.your-list');
let task, b;


Digitar.addEventListener('keyup', (event)=>{
  if(event.key === "Enter")
  {
    Listar.innerHTML += `<li class="item-list" style="color: #333; font-weight: 600;">${Digitar.value}</li>`;
    Digitar.value = ``;
    const lista = new List(task);
    lista.task();
    //document.querySelector('.save').innerText = Listar.innerText;
  }
});

class List {
  constructor (tasks){
      this.tasks = document.querySelectorAll('.item-list');
  }
  task(){
    for (let i = 0; i < this.tasks.length; i++) {
    let a = 0;
      this.tasks[i].addEventListener('click', ()=>{
        if(a == 0){
          this.tasks[i].classList.add('feito');
          a = 1;
        }
        else{
        this.tasks[i].classList.remove('feito');
        a = 0;
      }
    });
    }
  }
}