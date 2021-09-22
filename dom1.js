/*const allTitles = document.querySelectorAll('h1')

console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}
const titles = document.querySelectorAll('h1')
//another way to setting an attribute
titles[3].className = 'title'
titles[3].id = 'fourth-title'
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove( 'header-title')
titles[3].textContent = "Leeee"

allTitles.forEach(title => console.log(title))
//const allTitles = document.querySelectorAll('.title') // the same goes for selecting using class */
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '50px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green'
  } else {
    title.style.color = 'red'
  }
})



const lis = document.querySelectorAll('li')

lis.forEach((li,i)=>{
  if(lis.length / 5 != 0){
    li.style.display = "inline"
  }
 
  if(i%2 === 0){
    li.style.backgroundColor = "green"
  }
  else{
    li.style.backgroundColor = "crimson"
  }
})
