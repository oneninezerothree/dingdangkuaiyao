import React from 'react'

import {connect} from 'dva'
import styles from '../../../routes/Detail/Detail.css'
import base from '../../../index.css'
import { Spin } from 'antd';

class Xiangqing extends React.Component{
    state={
        imgrender:[],
        loadingshow:true
    }

   
    async getdata(){
        await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve();
            },1000)
        })
        await this.setState({
            imgrender:this.props.detail
        })
        this.setState({
            loadingshow:false
        })
    }
    
    componentDidMount(){
        
        this.getdata()
        // console.log("xiangqing",this)
    }
    render(){
        return(
            <div>
                <Spin size="large" style={{display:(this.state.loadingshow) ? "block" : "none"}}/>
                {
                    (this.state.imgrender.length>0)?(<div id={styles.aboutInfo} className={`${styles.aboutInfo} ${base.none}`} style={this.props.example.toggletab === "xiangqing" ? {display:"block"} : {display:"none"}}>
                    <div className={styles.Instructions}>
                        <p>说明书</p> 
                        <div className={styles.nav}>
                            <span className={styles.active}>{this.state.imgrender[0].name}</span>
                        </div> 
                        <div className={styles.items}>
                            {this.state.imgrender[0].detialimg.map((item,idx)=>{
                                return <img src={`${item}`} alt="" key={idx}/>
                            })}
                        </div> 
                        <div className={`${styles.ddYaoshi} ${base.cl}`}>
                            <img src="http://img.ddsy.com/c/cms/remind/500616_750_245-161209010937.png" alt="" />
                            <img src="http://img.ddsy.com/c/cms/taboo/500616_750_250-170110065015781.png" alt="" />
                        </div>
                    </div>
                </div>):""
                }
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(Xiangqing)