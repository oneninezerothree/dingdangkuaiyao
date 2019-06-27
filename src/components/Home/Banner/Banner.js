import React from 'react'
import { Carousel } from 'antd';

import styles from '../../../routes/Home/Home.css'


class Banner extends React.Component{
    


    render(){
        return(
            <div className={styles.banner}>
                <Carousel autoplay className={styles.antCarousel} >
                    <div>
                        <img className={styles.bannerImage} data-link="http://m.ddky.com/huodong/yygcms/redirect.html?acd=RahQxKgOJdQ&amp;type=3&amp;sourcePage=1" src="https://img.ddky.com/c/cms/temp/20190621/1561111683875_720_300.jpg" alt=""/>
                    </div>
                    <div>
                        <img className={styles.bannerImage} data-link="https://m.ddky.com/act/31599/index.html?sourcePage=1" src="https://img.ddky.com/c/cms/temp/20190621/1561093496300_720_300.jpg" alt=""/>
                    </div>
                    <div>
                        <img className={styles.bannerImage} data-link="https://m.ddky.com/act/31596/index.html?sourcePage=1" src="https://img.ddky.com/c/cms/temp/20190620/1561020079297_720_300.jpg" alt=""/>
                    </div>
                    <div>
                        <img className={styles.bannerImage} data-link="https://m.ddky.com/act/31586/index.html?sourcePage=1" src="https://img.ddky.com/c/cms/temp/20190620/1561020106727_720_300.jpg" alt=""/>    
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Banner;
