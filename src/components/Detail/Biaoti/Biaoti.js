import React from 'react'


import styles from '../../../routes/Detail/Detail.css'

import base from '../../../index.css'

class Biaoti extends React.Component{
    render(){
        return(
            <div className={styles.ul_all}>
                <h1 className={styles.goods_name}>
                    <span className={styles.sign}>28分钟</span>
                     [仁和可立克]复方氨酚烷胺胶囊
                </h1> 
                <div className={styles.zhuzhi}>
                    <p className={styles.zhuzhi_info}>适用于缓解普通感冒及流行性感冒引起的发热、头痛、四肢酸痛、打喷嚏、流鼻涕、鼻塞、咽痛等症状，也可用于流行性感冒的预防和治疗。</p> 
                    <p className={styles.goods_state}>说明书</p>
                </div> 
                <p className={styles.other}>
                    <span>12粒x2板;</span> 
                    <span>新老包装随机发货；</span>
                </p> 
                <div className={`${styles.moneybox} ${base.cl}`}>
                    <p className={`${styles.money} ${base.fl}`}>¥<span>28.00</span> </p> 
                    <p className={`${styles.sales} ${base.fr}`}>月售 16450 笔</p>
                </div>    
            </div>
        )
    }
}

export default Biaoti;