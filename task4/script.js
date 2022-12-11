const currentUrl = document.querySelector('#currentUrl');
currentUrl.onclick = function(event){
const newUrl = prompt('введите текст для ссылки');
currentUrl.textContent = newUrl;
event.preventDefault()}
