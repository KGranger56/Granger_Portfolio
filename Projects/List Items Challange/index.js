let ul = document.getElementsByTagName('ul');
let newItem = document.getElementsByClassName('newItem')[0];

function AddItem(){
  for(let e=0; e<ul.length; e++){
    let item = newItem.value
    let li = document.createElement('li')
    let temp = ul

    if(item.length>3){
      li.appendChild(document.createTextNode(`${item}`))
      return ul[0].appendChild(li);
    }
    else{
      alert('Please enter an item.')
    }
    console.log(e);
  }
}

/*
function Manipulation(){
  for(let v=0; v < list.length; v++){
    list[v].setAttribute('id', '#');
    list[v].innerHTML=('list item #' + v)
    console.log(list)
  }

  for(let v=0; v < list.length; v++){
    console.log(list[v].className)
  }

  pick[0].remove();
}


//function for list 2
function Classes(){
  for(let v=0; v < secondList.length; v++){
    if(secondList[v].className =='first'){
      secondList[v].innerHTML=secondList[v].className
      secondList[v].setAttribute('class', 'first test1 test4');
    }
    else{
      secondList[v].innerHTML='no Class'
      secondList[v].setAttribute('class', 'test1 test4');
    }
    console.log(secondList);
  }
};

//Adding a new element
let h1 = document.getElementsByTagName('h1')[0]
let div = document.createElement('div')

function AddElement(){

const textInside=document.createTextNode('Hello World')

div.style.color="blue";
div.style.fontSize="2rem";
div.setAttribute('id', 'test')
div.appendChild(textInside)

h1.before(h1, div)
}*/