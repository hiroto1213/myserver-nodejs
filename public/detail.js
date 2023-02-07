// const text = document.querySelector(".text");
// const title = document.querySelector(".title");

// console.log(11111111111111111);

// fetch("http://localhost:3000/gijiroku")
//     .then(res => res.json())
//     .then(json => console.log(json));

// HTMLファイル内のクラスとの対応付け
const text = document.querySelector(".text");
const title = document.querySelector(".title");
const keyword = document.querySelector(".kw11");

// jsonデータから挿入
fetch("http://localhost:3000/public/gijiroku")
    .then(res => res.json())
    .then(console.log(1234))
    .then(json => insertTitle(json, title))
    .then(console.log(5678))
    .then(json => insertText(json, text));

function insertTitle(json, dom) {
    dom.innerHTML = json[0]["keyword"][1];
}

// fetch("http://localhost:3000/public/gijiroku")
//     .then(res => res.json())
//     .then(json => insertText(json, text));
function insertText(json, dom) {
    dom.innerHTML = json[0]["text"];
    for (var i = 1; i < json.length; i++) {
        console.log(json[i])
        dom.innerHTML += json[i]["text"];
    }
}
