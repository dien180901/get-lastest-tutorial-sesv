
// async function cal() {
//     let url = "https://www.sesvtutorial.com/page-data/tutorials/page-data.json";
//     let result = await fetch(url);
//     let data = await result.json();
//     console.log(data);
// }
// cal();
const Http = new XMLHttpRequest();
const url='https://www.sesvtutorial.com/page-data/tutorials/page-data.json';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}