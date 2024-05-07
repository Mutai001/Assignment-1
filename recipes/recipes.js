const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm Red"
paragraph.style.color = 'red'
document.body.appendChild(paragraph);

const head = document.createElement("h3");
head.textContent = "I'm a blue h4!";
head.style.color ='blue';
document.body.appendChild(head)

//create a div with black border and pink background?
const div = document.createElement('div');
div.innerHTML = "This is a div";
div.style.border = "1px solid black";
div.style.backgroundColor = 'pink';
document.body.appendChild(div)

const headingInsideDiv = document.createElement("h1");
headingInsideDiv.textContent = "I'm in a div";
div.appendChild(headingInsideDiv);


const paragraphInsideDiv = document.createElement("p");
paragraphInsideDiv.textContent = "ME TOO!";
div.appendChild(paragraphInsideDiv)

let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
  });
btn.addEventListener('click', function (e) {
    console.log(e);
  });
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
btn.addEventListener('click', function (e) {
    console.log(e.target);
    });
