import React from 'react'

const CoinItem = ({ coin }) => {
  return (
    <div className='grid grid-cols-4 items-center justify-center my-10 p-5 shadow-xl gap-10 md:grid-cols-6 text-center'>
        <p>{coin.market_cap_rank}</p>
        <div className='flex items-center gap-2 text-center justify-center'>
            <img src={coin.image} alt="" className='w-10'/>
            <p>{coin.symbol.toUpperCase()}</p>
        </div>
        <p>${coin.current_price.toLocaleString()}</p>
        <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hidden md:block'>{coin.total_volume.toLocaleString()}</p>
        <p className='hidden md:block'>{coin.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem