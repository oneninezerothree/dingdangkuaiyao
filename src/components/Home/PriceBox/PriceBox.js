import React from 'react'


import styles from '../../../routes/Home/Home.css';

// import base from '../../../index.css'

class PriceBox extends React.Component{
    state={
        xinxi:["28分钟快送","满28免运费","24小时服务","可预约"]
    }


    render(){
        return(
            <div className={styles.priceBox}>
                {
                    this.state.xinxi.map((item,idx)=>{
                        return <div key={idx}>
                                    <img src="https://img.ddky.com/c/wap/images/ddky2/true_icon.png" alt=""/>
                                    <p>{item}</p>
                                </div>
                    })
                }
            </div>
        )
    }
}

export default PriceBox;