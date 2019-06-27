import React from 'react'

import styles from '../../../routes/Detail/Detail.css'

import base from '../../../index.css'

class Topbox extends React.Component{
    render(){
        return(
            <div className={styles.topbox}>
                <div className={styles.download} style={{display:"none"}}>
                    <i></i>
                </div> 
                <div className={`${styles.header} ${base.cl}`}>
                    <div className={`${styles.headListBox} ${base.fr}`}>
                        <img src="https://img.ddky.com/c/wap/images/ddky2/classify_icon.png" alt="" className={base.fr} />
                    </div> 
                    <span className={styles.active}>商品</span>
                    <span className="">详情</span>
                    <span className="">评价</span>
                </div>
            </div>
        )
    }
}


export default Topbox;