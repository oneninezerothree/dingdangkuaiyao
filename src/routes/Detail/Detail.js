import React from 'react'

import Topbox from '../../components/Detail/Topbox/Topbox'
import Footerbox from '../../components/Detail/Footerbox/Footerbox'

import Slider from '../../components/Detail/Slider/Slider'
import Headlist from '../../components/Detail/Headlist/Headlist'
import Xiangqing from '../../components/Detail/Xiangqing/Xiangqing'

import axios from 'axios'

import styles from './Detail.css'

import {connect} from 'dva'

// import { Spin } from 'antd';

class Detail extends React.Component{
    state={
        searchid:"",
        detail:[]
    }
    componentWillMount(){
        // console.log(this.props.location.search.substring(1))
        this.setState({
            searchid:this.props.location.search.substring(1)
        })
        const detailId = this.props.location.search.substring(1);
        this.getDetail(detailId);
    }

    async getDetail(detailId){
        const detail = (await axios.get("https://www.easy-mock.com/mock/5d120766806bf865488e49bd/getdetail/?shopid="+detailId)).data.data;
        // console.log(detail)
        await this.props.dispatch({
            type: 'example/getdetail',  //这里的example是model的命名空间，"/"后面的表示model中effect的异步方法名
            detail:detail                  //这个表示要传递参数，当然这里可以是一个方法，作为回调方法
          });
          this.setState({
            detail:this.props.example.detail
        })
    }

    async componentDidMount(){
        // const detailId = this.props.location.search.substring(1);
        // this.getDetail(detailId);
        console.log(this,"aaaa")
    }
    render(){
        return(
            <div className={styles.detailbox}>
                <Topbox />
                <div className={styles.concent} >
                    <div style={this.props.example.toggletab === "shangpin" ? {display:"block"} : {display:"none"}}>
                        <Slider searchid={this.state.searchid}/>
                    </div>
                    <Xiangqing  detail={this.state.detail}/>
                </div>
                
                <Footerbox />
                <Headlist />
            </div>
            // <div>
            // {/* {
            //     if(this.props.example.detail == []){
            //         return <Spin size="large" />
            //     }
            // } */}
            // </div>
        )
    }
}

// export default Detail;

export default connect((state) => {
    return state
})(Detail)