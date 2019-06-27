import React from 'react'

import Topbox from '../../components/Detail/Topbox/Topbox'
import Footerbox from '../../components/Detail/Footerbox/Footerbox'

import Slider from '../../components/Detail/Slider/Slider'
import Biaoti from '../../components/Detail/Biaoti/Biaoti'

import Xinxi from '../../components/Detail/Xinxi/Xinxi'

import axios from 'axios'

import styles from './Detail.css'

class Detail extends React.Component{
    state={
        searchid:""
    }
    componentWillMount(){
        // console.log(this.props.location.search.substring(1))
        this.setState({
            searchid:this.props.location.search.substring(1)
        })
    }

    componentDidMount(){
        // console.log(this.state.searchid)
    }
    render(){
        return(
            <div className={styles.detailbox}>
                <Topbox />
                <div className={styles.concent}>
                    <div className={styles.aboutDetails}>
                        <Slider seachid={this.state.searchid}/>
                        <Biaoti seachid={this.state.searchid}/>
                        <Xinxi />
                    </div>
                </div>
                <Footerbox />
            </div>
        )
    }
}

export default Detail;