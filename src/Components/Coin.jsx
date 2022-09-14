import React from 'react'
import { Link } from 'react-router-dom'
import CoinItem from './CoinItem'

const Coin = ({ coins }) => {

  return (
    <div className='w-[95%] m-auto md:w-[85%]'>
      <div className='grid grid-cols-4 items-center justify-center gap-10 p-5 shadow-xl md:grid-cols-6 text-center'>
       <h1>#</h1>
       <h1>Coin</h1>
       <h1>Price</h1>
       <h1>24h</h1>
       <h1 className='hidden md:block'>Volume</h1>
       <h1 className='hidden md:block'>Mkt Cap</h1>
      </div>
      {coins.map((coin) => (
        <Link to={`/CoinInfo/${coin.id}`} key={coin.id}>
          <CoinItem coin={coin} />
        </Link>
      ))}
    </div>
  )
}

export default Coin