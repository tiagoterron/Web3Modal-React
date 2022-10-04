
import { sleep, addGlobalEventListener } from './functions.js';

addGlobalEventListener('click', '.btn__load', (e) => {
    const element = document.querySelector("#"+e.target.id);
    const content = element.textContent;
    element.textContent = "";
    element.classList.add("button__loading");
    sleep(5000).then(() => {
        element.textContent = content;
        element.classList.remove("button__loading");
    })
}, {})

sleep(8000).then(() => {
document.querySelectorAll(".format").forEach((e) => {
    let txt = e.innerHTML.split(".")
    if(txt[1]){
    e.innerHTML = txt[0] + ".<small>" + txt[1] + "</small>"
    }
  })
});