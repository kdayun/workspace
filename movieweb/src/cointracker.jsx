import React, {useState, useEffect} from "react";

function App(){
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dol, setDol] = useState(0);
  const [result, setResult] = useState(0);
  const getDolorChange = (event) => {
    setDol(event.target.value);
  }
  const getUsdChange = (event) => {
    setResult(event.target.value);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then((json) => { 
        setCoins(json);
        setLoading(false);
      });
  } , []);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `${coins.length}`}</h1>
      {loading ? <strong>Loading...</strong> : <form>
        <input placeholder="Dollar.." onChange={getDolorChange} value={dol}></input>
        <select onChange={getUsdChange} value={result}>{coins.map((coin) => 
        <option value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price}</option>)}</select> 

        
      </form>}
      <p>{(dol/result).toFixed(5)}</p>
    </div>
  );
}


export default App;
