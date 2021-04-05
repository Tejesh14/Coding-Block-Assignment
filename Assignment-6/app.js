const inp = document.getElementById('inp');
const todoList = document.getElementById('list');
const lis = todoList.children;

function inputFunction(e){
    let todoText = inp.value;
    const li = document.createElement('li');
    if(e.key === 'Enter' && inp.value !==''){
        li.addEventListener('click',function (e){
            this.remove();
            // e.target.remove();
        });
        li.classList.add('liStyle');
        li.innerHTML = `<p>${todoText} <span id='deleteBtn'><i class="fas fa-trash-alt"></i></span></p>`;
        todoList.appendChild(li);
        inp.value = '';
    }
    
}

inp.addEventListener('keypress', inputFunction);