// 1. http://jsonplaceholder.typicode.com/users-sa GET-sorğunu icra edən və 10 istifadəçidən ibarət siyahını ekranda əks etdirən proqram yazın


// const tenUser = document.querySelector(".tenUser");
// const tenUserOl = document.querySelector(".tenUser ol");

// fetch("http://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data=> {
//     data.forEach((user)=>{
//         const li = document.createElement('li');
//         tenUserOl.appendChild(li);
//         li.textContent = `${user.name} ${user.username}`
//     })
// })



// 2. https://jsonplaceholder.typicode.com/posts-sa POST-sorğunu icra edən və yeni post yaradan proqram yazın


// const post = document.querySelector('.post');
// const title = document.getElementById("title");
// const body = document.getElementById("body");
// const userId = document.getElementById("userId");
// const button = document.querySelector("button");


// button.addEventListener("click", () => {

//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: title.value,
//             body: body.value,
//             userId: userId.value,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// })





// 3. Parametr qismində saniyələrin sayını qəbul edən funksiya yazın. Funksiya çağırıldıqdan sonra qeyd edilən saniyədən sonra konsolda “done” mətn ismarıcı əks olunur.


// function doneWriter(sec) {
//     let time = sec * 1000
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve()
//             console.log(time)
//         }, time);
//     }).then(function () {
//         console.log("done");
//     })
// }
// doneWriter(2)





// 4. Promise.all funksiyası haqqında oxuyun və onun köməyi ilə serverə eyni vaxta iki GET sorğusu edin


// const promise1 = new Promise((resolve, reject)=>{
//     resolve(
//         fetch("https://jsonplaceholder.typicode.com/posts/").then(res => res.json()).then(data=>data)
//     )
// })

// const promise2 = new Promise((resolve, reject)=>{
//     resolve(
//         fetch("https://rickandmortyapi.com/api/character/").then(res => res.json()).then(data=>data)
//     )
// })

// Promise.all([promise1, promise2]).then((values) => {
//   console.log(values);
// });