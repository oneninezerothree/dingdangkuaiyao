import React from 'react'
// import { Icon } from 'antd';



import styles from '../../../routes/List/List.css'
// import base from '../../../index.css'

class NavList extends React.Component{
    state={
        isactive:"0"
    }
    beActive(key){
        this.setState({
            isactive:key
        })
    }
    render(){
        return(
            <div className={styles.navList}>
                <ol>
                    <li className={this.state.isactive === "0" ? `${styles.active}` : ""} onClick={this.beActive.bind(this,"0")} >默认</li>
                    <li className={this.state.isactive === "1" ? `${styles.active}` : ""} onClick={this.beActive.bind(this,"1")}  >销量</li>
                    <li className={this.state.isactive === "2" ? `${styles.active}` : ""} onClick={this.beActive.bind(this,"2")} >价格 
                        <i className={styles.ico}>
                            <span className={styles.sanjiao_up}></span> 
                            <span className={styles.sanjiao_down}></span>
                        </i>
                    </li>
                </ol>
            </div>
        )
    }
}


export default NavList;