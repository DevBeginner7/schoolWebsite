// console.log("Pratistha")
// console.warn("Pratistha")
// console.error("Pratistha")

// const clz="CCT"
// console.log(clz)
// // clz="BBC"
// console.log(clz)
// // const ma new value assign hunna

// let clg="CCT"
// console.log(clg)
// clg="BBC"
// console.log(clg)

let arrayone=[
    {
        title:"WORKING TIME"
    },
    {
        title:"FIND US"
    }
]
let datatwo=''
arrayone.map((value,index)=>{

datatwo+= `<div class="work">
<div class="icon">logo</div>
<div>
    <p class="info_title">${value.title}</p>
    <div>Monday-Friday 10am-5pm</div>
</div>
</div>`
})

let infodata=document.getElementById("info");

infodata.innerHTML=datatwo;