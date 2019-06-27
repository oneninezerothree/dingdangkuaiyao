import React from 'react'


import styles from '../../../routes/Home/Home.css'

import base from '../../../index.css'

import axios from 'axios'

class ItemList extends React.Component{
    state={
        itemlist:[]
    }
    async renderlist(){
        const data = (await axios.get("https://www.easy-mock.com/mock/5d120766806bf865488e49bd/getdetail"))
    }

    componentDidMount(){

    }
    render(){
        return(
            <div className={styles.specialbox}>
                <div className={styles.special_choose}>
                    <img src="https://img.ddky.com/c/wap/images/ddky2/choose.jpg" alt=""/>
                    <p>应季热销</p>
                </div>
                <div id={styles.special_drug} className={`${styles.special_drug} ${base.cl}`}>
                    <img id={styles.listpage} src="https://imgq.ddky.com/c/product/107956/ad/1559633894722.jpg?t=1559633943519" alt=""/>
                    <div className={`${styles.top} ${base.fr}`}>
                        <p className={styles.one}>有效缓解眼睛疲劳、结膜充血以及眼睛发痒等症状</p>
                        <p className={styles.two}>[润洁]萘敏维滴眼液</p>
                        <p className={styles.specification}>10ml</p>
                        <p className={styles.three}> 立省2.67元</p>
                        <div className={styles.down}>
                            <span className={styles.spec}>¥19.90</span> 
                            <span className={`${styles.spec1} ${styles.addLine}`}>¥22.57</span>
                            <p className={styles.spec1}>已卖出6350件</p>
                        </div>
                        <img id={styles.showcart} src="https://img.ddky.com/c/wap/images/ddky2/car.png" alt=""/>
                    </div>
                    <img src="" className="yellowIcon" alt=""/>
                </div>
                
            </div>
        )
    }
}



export default ItemList;