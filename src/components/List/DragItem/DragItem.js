import React from 'react'

import styles from '../../../routes/List/List.css'
import base from '../../../index.css'

import axios from 'axios'

import {Link} from 'dva/router'
import { Spin } from 'antd';
import { Promise } from 'q';
// import { resolve } from '_any-promise@1.3.0@any-promise';


class DragItem extends React.Component{
    state={
        druglist:[],
        hasMore: true,
        scrollHeight: 0,
        loading:false
    }

    // constructor(props){
    //     super(props);
    //     this.state = {
           

        //请求数据
    async renderList(){
        // const listdata = (await axios.get('https://www.easy-mock.com/mock/5d120766806bf865488e49bd/getdetail')).data.data
        this.setState({
            loading:true
        });
        const druglist = (await axios.get('https://www.easy-mock.com/mock/5d120766806bf865488e49bd/getdetail')).data.data
        //拿去数据后等待1秒才加载
        await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve();
            },500)
        })

        this.setState({
            druglist :[...this.state.druglist,...druglist],
            loading:false
        })
        // console.log(this.state.druglist);
    }

    componentDidMount(){
        this.renderList();   
    }

    // componentWillMount(){
    //     console.log(this);
    // }

    // gotoDetail(shopid){
    //     this.props.router.push({pathname: '/detail', query: {id: shopid}})
    // }

    render(){
        return(
            <div className={styles.content} ref='header'>   
                <div className={styles.item_one}> 
                    {
                        this.state.druglist.map((item,idx)=>{
                            return     <Link to={'/detail/?'+item.shopid} key={idx}>
                                        <dl className={base.cl} >
                                            <dt className={base.fl}>
                                                <img src={`${item.img[0]}`} alt=""/>
                                            </dt>
                                            <dd className={`${styles.goodsInfo} ${base.fr}`}>
                                                <h3>
                                                    <span className={styles.sign}>28分钟</span>
                                                    {item.name}
                                                </h3>
                                                <p className={styles.zhuzhi_info}>{item.describe}</p>
                                                <p className={styles.other}>{item.num}</p>
                                                <div className={`${styles.goods_buyBox} ${base.cl}`}>
                                                    <div className={`${styles.aboutLeft} ${base.fl}`}>
                                                        <p className={`${styles.setmeal} ${base.fl}`}>￥{item.price}</p>
                                                        <p className={`${styles.sales} ${base.fl}`}>月售{item.sale}笔</p>
                                                    </div>
                                                    <img src="//img.ddky.com/c/wap/images//listShop.png?ddkycache=ad2d8d2beddf679ce7c2acbc7f79c59f" className={`${styles.addCarImg} ${base.fr}`} alt=""/>
                                                </div>
                                                <div className={styles.prootiomBox}>
                                                    <span className={styles.promotion}>1元换购</span>
                                                </div>
                                            </dd>
                                    </dl>
                                </Link>
                        })
                    }
                </div>
                <div className={styles.load} onClick={this.renderList.bind(this)}>点击加载更多</div>    
                <div className={styles.example} style={{display:(this.state.loading)? 'block':'none'}}>
                    <Spin size="large" />
                </div>
            </div>
        )
    }
}


export default DragItem;