import React from 'react'

import styles from '../../../routes/List/List.css'
import base from '../../../index.css'

import axios from 'axios'

import {Link} from 'dva/router'
import { Spin } from 'antd';
import { Promise } from 'q';
import { resolve } from '_any-promise@1.3.0@any-promise';





class DragItem extends React.Component{
    state={
        isactive:"0",
        druglist:[],
        hasMore: true,
        scrollHeight: 0,
        loading:false,
        isSort:false
    }
    // beActive(key){
    //     this.setState({
    //         isactive:key
    //     })
    // }
    // constructor(props){
    //     super(props);
    //     this.state = {
        //   https://www.easy-mock.com/mock/5d120766806bf865488e49bd/getdetail?jiangxu=111 

    //请求数据
    async renderList(key){
        this.setState({
            druglist :[...this.state.druglist],
            loading:true,
            isactive:key
        });
        const druglist = (await axios.get('https://www.easy-mock.com/mock/5d120766806bf865488e49bd/list')).data.data
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
        console.log(this.state.druglist);
    }
    //开始渲染数据
    componentDidMount(){
        this.renderList(); 
    }
    
    //销量的排序
    async xiaoliang(key){
        this.setState({
            loading:true,
            isactive:key
        });
        const druglist = (await axios.get('https://www.easy-mock.com/mock/5d120766806bf865488e49bd/getdetail?jiangxu=111')).data.data
        // //拿去数据后等待1秒才加载
        // await new Promise((resolve)=>{
        //     setTimeout(()=>{
        //         resolve();
        //     },500)
        // })
        this.setState({
            druglist :[...druglist],
            loading:false
        })

    }
    //升序
    async jiangxu(key){
        this.setState({
            loading:true,
            isSort:!this.state.isSort,
            isactive:key
            
        });
        const druglist = (await axios.get('https://www.easy-mock.com/mock/5d120766806bf865488e49bd/getdetail/?dijia=111')).data.data
        //拿去数据后等待1秒才加载
        await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve();
            },500)
        })

        this.setState({
            druglist :[...druglist],
            loading:false
        });
        
        
    }

    //降序
    async shengxu(key){
        this.setState({
            loading:true,
            isSort:!this.state.isSort,
            isactive:key
        });
        const druglist = (await axios.get('https://www.easy-mock.com/mock/5d120766806bf865488e49bd/getdetail/?gaojia=111')).data.data
        //拿去数据后等待1秒才加载
        await new Promise((resolve)=>{
            setTimeout(()=>{
                resolve();
            },500)
        })

        this.setState({
            druglist :[...druglist],
            loading:false
        });
       
    }

    render(){
        return(
            
            <div className={styles.content}>   
            <div className={styles.navList}>
                <ol>
                    <li className={this.state.isactive === "0" ? `${styles.active}` : ""} onClick={this.renderList.bind(this,'0')} >默认</li>
                    <li className={this.state.isactive === "1" ? `${styles.active}` : ""} onClick={this.xiaoliang.bind(this,'1')}>销量</li>
                    <li className={this.state.isactive === "2" ? `${styles.active}` : ""} onClick={this.state.isSort? this.jiangxu.bind(this,"2") : this.shengxu.bind(this,"2")} >价格 
                        <i className={styles.ico}>
                            <span className={styles.sanjiao_up}></span> 
                            <span className={styles.sanjiao_down}></span>
                        </i>
                    </li>
                </ol>
            </div>
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