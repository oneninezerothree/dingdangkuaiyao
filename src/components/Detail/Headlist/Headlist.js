import React from 'react'


import styles from '../../../routes/Detail/Detail.css'

import {connect} from 'dva'
import {Link} from 'dva/router'
// import base from '../../../index.css'

class Headlist extends React.Component{
    state={
        xinxi:[
            {imgurl:"https://img.ddky.com/c/wap/images/ddky2/home_icon.png",font:"首页",path:"/"},
            {imgurl:"https://img.ddky.com/c/wap/images/ddky2/home_icon.png",font:"搜索",path:"/"},
            {imgurl:"https://img.ddky.com/c/wap/images/ddky2/home_icon.png",font:"我的",path:"/my"}
        ]
    }
    componentDidMount(){
        console.log("tou",this.props.example.isshow)
    }
    render(){
        return(
                <div className={styles.headList} style={{display: this.props.example.isshow ? "block" : "none"}}>
                    <ul>
                        {/* <li>
                            <Link to="/" style={{color:"#fff"}}>
                                <img src="https://img.ddky.com/c/wap/images/ddky2/home_icon.png" alt="" />
                                <span>首页</span>
                            </Link>
                        </li> 
                        <li>
                        <Link to="/" style={{color:"#fff",display:"block"}}>
                            <img src="https://img.ddky.com/c/wap/images/ddky2/search_icon_fff.png" alt="" />
                            <span>搜索</span>
                        </Link>
                        </li> 
                        <li>
                            <img src="https://img.ddky.com/c/wap/images/ddky2/my_icon.png" alt="" />
                            <span>我的</span>
                        </li> */}
                        {
                            this.state.xinxi.map((item,idx)=>{
                                return <li key={idx}>
                                            <Link to={item.path} style={{color:"#fff"}}>
                                                <img src={`${item.imgurl}`} alt="" />
                                                <span>{item.font}</span>
                                            </Link>
                                        </li> 
                            })
                        }
                    </ul>
                </div>
        )
    }
}


export default connect((state) => {
    return state
})(Headlist)