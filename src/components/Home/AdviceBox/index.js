import React from 'react'
import styles from '../../../routes/Home/index.css'

class AdviceBox extends React.Component{
    state={
        imgurl :[
            "https://img.ddky.com/c/cms/temp/20180919/1537323873480_180_168.jpg",
            "https://img.ddky.com/c/cms/temp/20180919/1537323877744_180_168.jpg",
            "https://img.ddky.com/c/cms/temp/20180919/1537323890865_180_168.jpg",
            "https://img.ddky.com/c/cms/temp/20180919/1537323895801_180_168.jpg",
            "https://img.ddky.com/c/cms/temp/20190307/1551954235298_180_168.jpg",
            "https://img.ddky.com/c/cms/temp/20190307/1551954237585_180_168.jpg",
            "https://img.ddky.com/c/cms/temp/20190307/1551954239827_180_168.jpg",
            "https://img.ddky.com/c/cms/temp/20190307/1551954241650_180_168.jpg"

        ]
    }
    render(){
        return(
            <div className={styles.adviceBox}>
                {this.state.imgurl.map((item,idx)=>{
                    return <img src={`${item}`} className={styles.w25} key={idx} alt=""/>
                })}
                
            </div>
        )
    }
}


export default AdviceBox;