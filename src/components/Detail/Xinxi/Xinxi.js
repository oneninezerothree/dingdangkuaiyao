import React from 'react'


import styles from '../../../routes/Detail/Detail.css'

import base from '../../../index.css'

class Xinxi extends React.Component{
    componentWillMount(){
        console.log(this)
    }
    render(){
        return(
            <div className={styles.xinxi}>
                <p className={styles.peisong_info}>
                    <img src="http://img.ddsy.com/c/mobile/images/spicon/logo_20171130.png" alt="" />
                    <span>[快药]急送,满￥28免运费,可预约</span>
                </p>
                <p className={`${styles.foryou} ${base.cl}`}>
                    <span className={`${styles.shopName} ${base.fl}`}>本商品由叮当智慧药房（广州）有限公司广州越秀东川路店为您服务</span><img src="https://img.ddky.com/c/wap/images/ddky2/clickpoint.png" alt="" className={styles.fr} />
                </p>
                <div className={`${styles.promotionBox} ${base.cl}`}>
                    <p className={base.fl}>促销</p> 
                    <ul className={base.fl}>
                        <li>
                            <span className={styles.promotion}>1元换购</span>
                            买满48元可选1个，买满95元可选2个
                        </li>
                    </ul> 
                    <img src="https://img.ddky.com/c/wap/images/ddky2/clickpoint.png" alt="" className={styles.fr} />
                </div>
                <div className={`${styles.favourable} ${base.cl}`}>
                    <p className={base.fl}>好评度<span className={styles.red_col}>100%</span></p> 
                    <p className={`${styles.comment} ${base.fr}`}>
                        <span>23265条评价</span>
                        <img src="https://img.ddky.com/c/wap/images/ddky2/rightMore.png" alt="" />
                    </p>
                </div>
            </div>

        )
    }
}



export default Xinxi ;