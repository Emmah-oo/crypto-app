import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Coin from './Components/Coin';
import Header from './Components/Header';
import CoinInfo from './Routes/CoinInfo';

import { Routes, Route } from 'react-router-dom'

 
function App() {
  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data)
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <Coin coins={coins} /> } />
        <Route path='/CoinInfo' element={<CoinInfo />}>
          <Route path=':coinId' element={<CoinInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
