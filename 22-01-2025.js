let p1=new Promise((resolve,reject)=>{});
console.log(p1);
let p2=new Promise((resolve,reject)=>{
    resolve("Scusses")
});
console.log(p2);
let p3=new Promise((resolve,reject)=>{
    reject("failure")
});
console.log(p3);
p2.then((res)=>{
    console.log(res);
})
p3.catch((rej)=>{
    console.log(rej);
}).finally(
    (res)=>{console.log("sai vasanth")}
)
console.log(p3)
function fetche(){
    let x = fetch("https://jsonplaceholder.typicode.com/users");
    x.then(async res=>{
        const data = await res.json();
        console.log(data);
    })
}
fetche();
let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolved")
    },4000)
})
async function demo(){
    console.log("start");
    let x=await p;
    console.log(x);
    console.log("end")
}
async function fetchUsers(){
let response=await fetch("https://jsonplaceholder.typicode.com/users")
let pamper=await response.json()
console.log(pamper)
}
fetchUsers()