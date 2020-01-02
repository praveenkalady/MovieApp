const submit = document.getElementById('submit');
submit.addEventListener('click', displayMovies);
const api_key = '89d77b72';

function displayMovies(e) {
  const input = document.getElementById('search').value;
  const url = `http://www.omdbapi.com/?s=${input}&apikey=${api_key}`;
  getData(url)
    .then(res => {
      console.log(res.Search);
      UICreation(res.Search);
    })
    .catch(err => console.log(err));
}
async function getData(url) {
  const res = await fetch(url);
  const resdata = await res.json();
  return resdata;
}

function UICreation(res) {
  const Parent = document.getElementById('output');
  let output = ''
  res.map(resp => {
    const {
      Title,
      Year,
      Poster
    } = resp;
    output += `
    <div class="col-md-4 mb-3">
    <div class="well text-center">
    <img src="${Poster}">
    <h5>${Title}</h5>
    <h6>${Year}</h6>
    </div>
    </div>
    `;
  })
  Parent.innerHTML = output;
}