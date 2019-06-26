import React from 'react'


import styles from '../../../routes/Detail/index.css'

import base from '../../../index.css'

class Footerbox extends React.Component{
    render(){
        return(
            <ul className={`${styles.footerBox} ${base.cl}`}>
                <li>
                    <img src="https://img.ddky.com/c/wap/images/ddky2/wo.png" alt="" /> 
                    <p>药师咨询</p>
                </li> 
                <li className={styles.goodscar}>
                    <img src="https://img.ddky.com/c/wap/images/ddky2/cart2.png" alt="" /> 
                    <p>清单列表</p>
                </li> 
                <li className={styles.add_car}>
						加入清单
                </li> 
                <li className={`${styles.add_car} ${styles.goods_out}`} style={{display: "none"}}>
						查看相似商品
				</li>
            </ul>
        )    
    }
}


export default Footerbox