let btn = document.getElementById("bt");
let toshow = document.getElementById("final")
let indiv = document.getElementById("indiv")

let showData = (data) => {
    toshow.style.display = "block";
    indiv.innerHTML = `<h3>Meaning</h3>
    <p class="txt">${data[0].meanings[0].definitions[0].definition}.</p>`

}



let getData = async (search) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
  let response = await fetch(url);
  let data = await response.json();
  showData(data);
}



btn.addEventListener('click',()=>{
    let search = document.getElementById("data").value;
    getData(search);
})