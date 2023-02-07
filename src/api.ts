const BASE_URL = `https://api.coinpaprika.com/v1`;
const HISTORY_URL = `https://ohlcv-api.nomadcoders.workers.dev`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  // const endData = Math.floor(Data.now() / 1000);
  // const startData = endData - 60*60*23*7*1;
  return fetch(`${HISTORY_URL}?coinId=${coinId}`).then((response) =>
    response.json()
  );
}
