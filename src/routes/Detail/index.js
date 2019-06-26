import React from 'react'

import Topbox from '../../components/Detail/Topbox'
import Footerbox from '../../components/Detail/Footerbox'

import Slider from '../../components/Detail/Slider'
import Biaoti from '../../components/Detail/Biaoti'

import Xinxi from '../../components/Detail/Xinxi'


import styles from './index.css'

class Detail extends React.Component{
    render(){
        return(
            <div className={styles.detailbox}>
                <Topbox />
                <div className={styles.concent}>
                    <div className={styles.aboutDetails}>
                        <Slider />
                        <Biaoti />
                        <Xinxi />
                    </div>
                </div>
                <Footerbox />
            </div>
        )
    }
}

export default Detail;