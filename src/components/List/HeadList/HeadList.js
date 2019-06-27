import React from 'react'

import styles from '../../../routes/List/List.css'
// import base from '../../../index.css'


class HeadList extends React.Component{
    state={
        font:["全部","风寒感冒","风热感冒","感冒咳嗽","感冒发烧","流感"],
        isactive:0
    }
    beAactive(key){
        this.setState({
            isactive:key
        })
    }
    render(){
        return(
            <div className={styles.headList}>
                <div className={styles.top}>
                    {/* <span className={styles.active}>全部</span>
                    <span className="">风寒感冒</span>
                    <span className="">风热感冒</span>
                    <span className="">感冒咳嗽</span>
                    <span className="">感冒发烧</span>
                    <span className="">流感</span> */}
                    {this.state.font.map((item,idx)=>{
                        return <span className={this.state.isactive===idx ? `${styles.active}` : ""} onClick={this.beAactive.bind(this,idx)} key={idx}>{item}</span>
                    })}
                </div>
            </div>
        )
    }
}

export default HeadList;