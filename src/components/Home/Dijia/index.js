import React from 'react'
import styles from '../../../routes/Home/index.css'

import base from '../../../index.css'

class Dijia extends React.Component{
    render(){
        return(
            <div className={`${styles.flash_sale} ${base.cl}`}>
                <img src="https://img.ddky.com/c/cms/temp/20190125/1548412357585_360_118.jpg" />
                <img src="https://img.ddky.com/c/cms/temp/20190614/1560475338566_360_118.jpg" />
            </div>
        )
    }
}


export default Dijia;