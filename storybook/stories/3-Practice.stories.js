import React from 'react';
import Banner from '../src/Practice/Banner/components/App/App';
import BannerTS from '../src/Practice/Banner TS/components/App/App';
import FzTable from '../src/Practice/FzTable/components/App';
import FzTableTS from '../src/Practice/FzTable TS/components';

export default {
    title: '練習題'
}

export const banner = () => {
    return <Banner />
}
export const bannerTS = () => {
    return <BannerTS />
}
export const fzTable = () => {
    return <FzTable />
}
export const fzTableTS = () => {
    return <FzTableTS />
}