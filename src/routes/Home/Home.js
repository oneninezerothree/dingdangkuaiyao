import React from 'react'

import Header from '../../components/Home/Header/Header';
import Banner from '../../components/Home/Banner/Banner';
import PriceBox from '../../components/Home/PriceBox/PriceBox';
import AdviceBox from '../../components/Home/AdviceBox/AdviceBox';
import Dijia from '../../components/Home/Dijia/Dijia';
import DragList from '../../components/Home/DragList/DragList';
import ItemList from '../../components/Home/ItemList/ItemList';
import Footer from '../../components/Footer/Footer';

import styles from './Home.css';
import base from '../../index.css';

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
                <Footer/>
            </div>
        )
    }
}

export default Home;