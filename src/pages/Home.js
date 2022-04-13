import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductCards from '../components/ProductCards';
import ProductCards222 from '../components/ProductCards222';
import ProductTable from '../components/ProductTable';
import ProductTableFilter from '../components/ProductTableFilter';


const url = "https://luvfinder.luvinu.io/api/getmemeMarket"

const getCoinApiData = async (currentCurencyType, coinType) => {
    try {
        const response = await axios.get(`${url}/${coinType}-${currentCurencyType}`)
        console.log('response:-', response);
        return response.data.result[0]
    } catch (error) {
        console.log('error while getting coinApi data:-', error);
    }
}



const Home = () => {
    const [coinApiData, setCoinApiData] = useState([])
    const [currentCurencyType, setCurrentCurencyType] = useState('USD')
    const [coinType, setCoinType] = useState('DOGE')
    const [bidPercentageData, setBidPercentageData] = useState({})
    const [lastTradedPriceData, setLastTradedPriceData] = useState({})

    const handleCurrencyTypeSelect = (currencyType) => {
        console.log('currencyType---->', currencyType);
        setCurrentCurencyType(currencyType)
    }

    const handleCoinType = (coinType) => {
        console.log('coinType---->', coinType);
        setCoinType(coinType)
    }

    useEffect(() => {
        getCoinApiData(currentCurencyType, coinType).then((data) => {
            setCoinApiData(data)
        })
    }, [currentCurencyType, coinType])

    console.log('coinApiData-->', coinApiData);

    // API call timer set //
    // useEffect(() => {
    //     const timer = setInterval(getCoinApiData, 5000);
    //     return () => clearInterval(timer);
    // }, []);




    useEffect(() => {
        if (coinApiData?.maindata) {
            // bid percentage ascending order //
            const bidPercentageArrayAB = [...coinApiData.maindata]
            const bidPercentageArraySort = bidPercentageArrayAB.sort((a, b) => a.bid_percentage - b.bid_percentage)[0]
            // console.log('bidPercentageArraySort--->', bidPercentageArraySort);
            setBidPercentageData(bidPercentageArraySort)

            // last trade price descending order //
            const lastTradePriceArrayBA = [...coinApiData.maindata]
            const lastTradePriceArraySort = lastTradePriceArrayBA.sort((a, b) => b.last_trade_price - a.last_trade_price)[0]
            // console.log('lastTradePriceArraySort--->', lastTradePriceArraySort);
            setLastTradedPriceData(lastTradePriceArraySort)
        }
    }, [coinApiData])



    return (
        <>
            <Header
                currentCurencyType={currentCurencyType}
                coinType={coinType}
                updateCurrencyTypeSelect={handleCurrencyTypeSelect}
                updateCoinType={handleCoinType}
            />
            <HeroSection />
            <ProductCards previousData={coinApiData?.previousdata}
                pair={coinApiData?.pair}
                currentCurencyType={currentCurencyType}
                coinType={coinType}
            />
            <ProductCards222
                bidPercentageData={bidPercentageData}
                lastTradedPriceData={lastTradedPriceData}
                currentCurencyType={currentCurencyType}
                coinType={coinType}
            />
            <ProductTableFilter
                currentCurencyType={currentCurencyType}
                coinType={coinType}
                updateCurrencyTypeSelect={handleCurrencyTypeSelect}
                updateCoinType={handleCoinType}
            />
            <ProductTable
                mainData={coinApiData?.maindata}
            />
            <Footer
                currentCurencyType={currentCurencyType}
                coinType={coinType}
                updateCurrencyTypeSelect={handleCurrencyTypeSelect}
                updateCoinType={handleCoinType}
            />
        </>
    )
}

export default Home;