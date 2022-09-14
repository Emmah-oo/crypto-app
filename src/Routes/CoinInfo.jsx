import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'

const CoinInfo = () => {
    const params = useParams()
    const [coinInfo, setCoinInfo] = useState({})
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoinInfo(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [params.coinId])
    

  return (
    <div>
        <div className='w-[90%] m-auto md:w-[70%]'>
           <h1 className='text-center text-4xl font-bold'>{coinInfo.name}</h1>
           <div className='my-5'>
                <h1 className='p-2 bg-indigo-700 inline-block rounded-md my-5 cursor-pointer'>Rank #{coinInfo.market_cap_rank}</h1>
                <div className='grid grid-cols-2 items-center justify-center'> 
                    <div className='flex items-center gap-2'>  
                        {coinInfo.image ? <img src={coinInfo.image.small} alt='' /> : null}
                        <p>{coinInfo.name}</p>
                        {coinInfo.symbol ? <p>{coinInfo.symbol.toUpperCase()}/USD</p> : null}
                    </div>
                    <div className='text-3xl item-end justify-self-end'>
                        {coinInfo.market_data?.current_price 
                        ?
                        <h1 className='font-bold text-[1rem] md:text-[2rem]'>
                            ${coinInfo.market_data.current_price.usd.toLocaleString()}
                        </h1>
                        : 
                        null
                        }
                    </div>
                </div>
           </div>
           <div className='grid grid-cols-1 gap-5'>
            <div className='grid grid-cols-6 items-center justify-center text-center gap-3'>
                <h1 className='bg-gray-600 p-3 cursor-pointer'>1h</h1>
                <h1 className='bg-gray-600 p-3 cursor-pointer'>24h</h1>
                <h1 className='bg-gray-600 p-3 cursor-pointer'>7d</h1>
                <h1 className='bg-gray-600 p-3 cursor-pointer'>14d</h1>
                <h1 className='bg-gray-600 p-3 cursor-pointer'>30d</h1>
                <h1 className='bg-gray-600 p-3 cursor-pointer'>1yr</h1>
            </div>
            <div className='grid grid-cols-6 text-center'>
                {coinInfo.market_data?.price_change_percentage_1h_in_currency ? <p>{coinInfo.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : ''}
                {coinInfo.market_data?.price_change_percentage_24h_in_currency ? <p>{coinInfo.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : ''}
                {coinInfo.market_data?.price_change_percentage_7d_in_currency ? <p>{coinInfo.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : ''}
                {coinInfo.market_data?.price_change_percentage_14d_in_currency ? <p>{coinInfo.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : ''}
                {coinInfo.market_data?.price_change_percentage_30d_in_currency ? <p>{coinInfo.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : ''}
                {coinInfo.market_data?.price_change_percentage_1y_in_currency ? <p>{coinInfo.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : ''}
            </div>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 text-center mt-10 gap-10 border p-5'>
            <div>
                <h1>24h Low</h1>
                {coinInfo.market_data?.low_24h ? <p>{coinInfo.market_data.low_24h.usd.toLocaleString()}</p> : ''}
                <hr className='mt-4'/>
            </div>
            <div>
                <h1>Market Cap</h1>
                {coinInfo.market_data?.market_cap ? <p>{coinInfo.market_data.market_cap.usd.toLocaleString()}</p> : ''}
                <hr className='mt-4'/>
            </div>
            <div>
                <h1>24h High</h1>
                {coinInfo.market_data?.high_24h ? <p>{coinInfo.market_data.high_24h.usd.toLocaleString()}</p> : ''}
                <hr className='mt-4'/>
            </div>
            <div>
                <h1>Circulating Supply</h1>
                {coinInfo.market_data ? <p>{coinInfo.market_data.circulating_supply.toLocaleString()}</p> : ''}
                <hr className='mt-4'/>
            </div>
           </div>
           <div className='my-10'> 
            <h1 className='text-3xl font-bold mb-3'>Description</h1>
            <p dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coinInfo.description? coinInfo.description.en : ''),
                }}>   
            </p>
               
           </div>
        </div>
    </div>
  )
}

export default CoinInfo