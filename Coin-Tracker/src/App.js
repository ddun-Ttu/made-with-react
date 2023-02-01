import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinMoney, setCoinMoney] = useState(1);
  const [inputMoney, setInputMoney] = useState(1);
  const onChange = (event) => {
    setCoinMoney(event.target.value);
    setInputMoney(1);
  };
  const exchangeInput = (event) => {
    setInputMoney(event.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading....</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin) => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name}({coin.symbol}): ${Math.floor(coin.quotes.USD.price)}{" "}
              USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <h1>환전소</h1>
      <h3>금액을 입력하세요</h3>
      <div>
        ${" "}
        <input
          type="number"
          placeholder="금액"
          value={inputMoney}
          min="1"
          onChange={exchangeInput}
        />
      </div>
      <h2>교환할 수 있는 금액은 ${Math.floor(inputMoney / coinMoney)} </h2>
    </div>
  );
}

export default App;
