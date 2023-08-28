const url = 'https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_WEEKLY&symbol=MSFT&datatype=json';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'zzzzgit',
		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
	}
};
const arrMarket = []
const market = new Promise((resolve, reject) => {
  fetch(url, options)
  .then(responce => {
    if(responce.ok) resolve(responce.json())

    else reject(response);
  })
  .catch(error => reject(error))
})
market.then(param, err)

function param(data){
 const fondMarket = data["Weekly Time Series"]
 for (let key in fondMarket){
  const resMarket = {}
  resMarket.date = key
  resMarket.open = fondMarket[key]["1. open"]
  resMarket.high = fondMarket[key]["2. high"]
  resMarket.low = fondMarket[key]["3. low"]
  resMarket.close = fondMarket[key]["4. close"]
  resMarket.volume = fondMarket[key]["5. volume"]
  arrMarket.push(resMarket)
  }
  let tableHtml = arrMarket.slice([0],[50])
  let table = document.querySelector('tbody')
    if (tableHtml.length ===0) {
      table.innerHTML = '<p>not connect</p>'
    }
    for(let i = 0; i < tableHtml.length; i++) {
      tr = document.createElement('tr')
      tr.innerHTML = `
      <td>${tableHtml[i].date}</td>
      <td>${tableHtml[i].open}</td>
      <td>${tableHtml[i].high}</td>
      <td>${tableHtml[i].low}</td>
      <td>${tableHtml[i].close}</td>
      <td>${tableHtml[i].volume}</td>
      `
      table.insertAdjacentElement('beforeend', tr)
    }
}

function err(data){
  console.log('no good');
  console.log(data);
}
 
