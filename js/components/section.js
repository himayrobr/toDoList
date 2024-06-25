import {getList, getAllList} from "../module/app.js";

let data = await getAllList();

export const elementId = async(data) => {
    let lastData = data.at(-1)
    let idData = lastData.id
    console.log(idData)
    console.log(idData ++)
    return idData++;
}
let elements = await elementId(data);
console.log(elements); 

function updateDateTime() {
    let date = new Date();
    let dateLeg = date.toLocaleString();
    document.getElementById('current__date').textContent = dateLeg;
}
updateDateTime();

setInterval(updateDateTime, 1000);

export const writeTasks = async(res) => {
    let date = new Date();
    let dateLeg = date.toLocaleString();
    let plantilla = /*html*/`
    <span class="date" id="current__date" >${updateDateTime()}</span>
    `;
    let section__task = document.querySelector(".section__task");
    section__task.innerHTML = plantilla
    res.forEach(elements => {
        if (elements.status === "On hold") {
            let squech = /*html*/`
            <article class="tasks" id="${elements.id}">
            <p class="name" >${elements.task}</p>
            <div class="icons">
            <img class="check" src="images/check-circle-svgrepo-com.svg" alt="">
            <div class="circle__trash">
            <img class="trash" src="images/trash-svgrepo-com.svg" alt="">
            </div>
            </div>
            </article>
            `;
            section__task.innerHTML += squech

        }else {
            let section__task = document.querySelector(".section__task");
            let squech = /*html*/`
            <article class="tasks__done" id="${elements.id}">
            <p class="name__check" >${elements.task}</p>
            <div class="icons">
            <img class="check" src="images/check-circle-svgrepo-com.svg" alt="">
            <div class="circle__trash">
            <img class="trash" src="images/trash-svgrepo-com.svg" alt="">
            </div>
            </div>
            </article>
            `;
            section__task.innerHTML += squech
    
        }
    });
}

export const addTask = (input) => {
    let plantilla = "";
    plantilla = /*html*/`
    <article class="tasks" id = "${elements}">
        <p>${input}</p>
        <div class="icons">
            <img class="check" src="images/check-circle-svgrepo-com.svg" alt="">
            <div class="circle__trash">
                <img class="trash" src="images/trash-svgrepo-com.svg" alt="">
            </div>
        </div>
    </article>
    `;
    return plantilla;
}
