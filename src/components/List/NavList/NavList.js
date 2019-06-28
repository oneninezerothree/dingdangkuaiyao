import React,{Component} from 'react'
import { connect } from 'dva';
import axios from 'axios'
import styles from '../../../routes/List/List.css'
// import base from '../../../index.css'

export default connect((state)=>{
    return state;
}) (class NavList extends Component{
    constructor(props){
        super(props);
    }  
    state={
        isactive:"0",
        druglist:[],
        loading:false
    }
    beActive(key){
        this.setState({
            isactive:key
        })
    }
    //排序
    async paixu(){
        this.setState({
            loading:true
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
        })
        console.log(this.state.druglist);
        this.props.example.goodlist.push(this.state.druglist);
        console.log(this.props.example.goodlist);
    }
    componentDidMount(){
        
    }
    
    render(){
        // console.log(this)
        return(
            <div className={styles.navList}>
                <ol>
                    <li className={this.state.isactive === "0" ? `${styles.active}` : ""} onClick={this.paixu.bind(this,'0')} >默认</li>
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
})


