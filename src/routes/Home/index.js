import React from 'react'

import Header from '../../components/Home/Header'
import Banner from '../../components/Home/Banner'
import PriceBox from '../../components/Home/PriceBox'
import AdviceBox from '../../components/Home/AdviceBox'
import Dijia from '../../components/Home/Dijia'
import DragList from '../../components/Home/DragList'
import ItemList from '../../components/Home/ItemList'

import styles from './index.css'
import base from '../../index.css'

class Home extends React.Component{
    render(){
        return(
            <div className={styles.home}>
                <Header />
                <div className={styles.contentBox}>
                    <Banner />
                    <div className={`${styles.o2oListBox} ${base.none}`} style={{display:"block"}}>
                        <PriceBox />
                        <AdviceBox />
                        <Dijia />
                        <DragList />
                        <div className={`${styles.special} ${base.cl}`}>
                            <ItemList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;