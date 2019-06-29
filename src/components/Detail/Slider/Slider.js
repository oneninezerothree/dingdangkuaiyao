import React from 'react'

import { Carousel } from 'antd';

import styles from '../../../routes/Detail/Detail.css'
import base from '../../../index.css'
// import axios from 'axios'

import {connect} from 'dva'

class Slider extends React.Component{
    state={
        imgs:[],
        detail:[]
    }
    
    async getdetail(){
        await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve();
            },1000)
        })
        await this.setState({
            detail:this.props.example.detail
        })
        console.log(this.state.detail)
    }

    componentDidMount(){
        this.getdetail();
    }
    render(){
        return(
            <div>
                {
                    (this.state.detail.length>0)?(
                    <div>
                        <div id={styles.slider}>
                            <Carousel autoplay className={styles.swiper_wrapper}> 
                                {
                                    this.state.detail[0].img.map((item,idx)=>{
                                        return <div key={idx}>
                                                    <img alt="" src={`${item}`} />
                                                </div>
                                    })
                                }
                            </Carousel>
                        </div>
                        <div className={styles.ul_all}>
                            <h1 className={styles.goods_name}>
                                <span className={styles.sign}>28分钟</span>
                                {this.state.detail[0].name}
                            </h1> 
                            <div className={styles.zhuzhi}>
                                <p className={styles.zhuzhi_info}>{this.state.detail[0].describe}</p> 
                                <p className={styles.goods_state}>说明书</p>
                            </div> 
                            <p className={styles.other}>
                                <span>{this.state.detail[0].num}</span> 
                                <span>新老包装随机发货；</span>
                            </p> 
                            <div className={`${styles.moneybox} ${base.cl}`}>
                                <p className={`${styles.money} ${base.fl}`}>¥<span>{this.state.detail[0].price}</span> </p> 
                                <p className={`${styles.sales} ${base.fr}`}>月售 {this.state.detail[0].sale} 笔</p>
                            </div>    
                        </div>
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
                    </div>
                    ) : ""
                }
            </div>
        )
    }
}


export default  connect((state) => {
    return state
})(Slider)