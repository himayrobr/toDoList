import {getAllList, postTask, deleteTask, putTask} from "./module/app.js";
import {writeTasks, addTask} from "./components/section.js";

let section__task = document.querySelector(".section__task");
let input__search = document.querySelector("#input__search");

let data = await getAllList();
let allTaks = await writeTasks(data);


let checks = document.querySelectorAll(".check");
    checks.forEach(element => {
        element.addEventListener("click", (e) => {
            let parentArticle = e.target.closest('article');
            if (parentArticle.classList.contains('tasks')) {
                parentArticle.classList.remove('tasks');
                parentArticle.classList.add('tasks__done');
                parentArticle.querySelector('p').classList.add('name__check');
                let pTask = parentArticle.querySelector('p');
                let id = parentArticle.id
                let nameTask = pTask.textContent
                let putATask = {
                    task : nameTask,
                    status : 'ready',
                    id : id,
                }
                console.log(id, putATask);

                let updateTask = putTask(id, putATask)
            } else {
                parentArticle.classList.remove('tasks__done');
                parentArticle.classList.add('tasks');
                parentArticle.querySelector('p').classList.remove('name__check');
                let pTask = parentArticle.querySelector('p');
                let id = parentArticle.id
                let nameTask = pTask.textContent
                let putATask = {
                    task : nameTask,
                    status : 'On hold',
                    id : id,
                }
                console.log(id, putATask);

                let updateTask = putTask(id, putATask)
            }
        });
    });
    let trashs = document.querySelectorAll(".trash");
    trashs.forEach(element => {
        element.addEventListener("click", (e) => {
            let parentArticle = e.target.closest('article');
                let articleId = parentArticle.id;
                console.log(articleId);
                let deleAtask = deleteTask(articleId)
                parentArticle.remove();

            console.log("Se elimino el elemento",e.target);
        });

    });

input__search.addEventListener("change", (e) => {
    let text = e.target.value;
    input__search.value = null;
    let search = addTask(text);
    console.log(search);
    section__task.innerHTML += search;
    console.log(text);
    let postATask = {
        task : text,
        status : 'On hold',
    }
    let post = postTask(postATask)
    console.log(section__task.value)
    let checks = document.querySelectorAll(".check");
    checks.forEach(element => {
        console.log(element);
        element.addEventListener("click", (e) => {
            let parentArticle = e.target.closest('article');
            if (parentArticle.classList.contains('tasks')) {
                parentArticle.classList.remove('tasks');
                parentArticle.classList.add('tasks__done');
                parentArticle.querySelector('p').classList.add('name__check');
                let pTask = parentArticle.querySelector('p');
                let id = parentArticle.id
                let nameTask = pTask.textContent
                let putATask = {
                    task : nameTask,
                    status : 'ready',
                    id : id,
                }
                console.log(id, putATask);

                let updateTask = putTask(id, putATask)

            } else {
                parentArticle.classList.remove('tasks__done');
                parentArticle.classList.add('tasks');
                parentArticle.querySelector('p').classList.remove('name__check');
                let pTask = parentArticle.querySelector('p');
                let id = parentArticle.id
                let nameTask = pTask.textContent
                let putATask = {
                    task : nameTask,
                    status : 'On hold',
                    id : id,
                }
                console.log(id, putATask);

                let updateTask = putTask(id, putATask)
            }
        });
    });
    let trashs = document.querySelectorAll(".trash");
    trashs.forEach(element => {
        element.addEventListener("click", (e) => {
            let parentArticle = e.target.closest('article');
                let articleId = parentArticle.id;
                console.log(articleId);
                let deleAtask = deleteTask(articleId)
                parentArticle.remove();

            console.log("Se elimino el elemento",e.target);
        });

    });

});
