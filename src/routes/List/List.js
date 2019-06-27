import React from 'react'

import styles from './List.css'


// import base from '../../index.css'

import SearchNav from  '../../components/List/SearchNav/SearchNav'
import HeadList from '../../components/List/HeadList/HeadList'
import NavList from '../../components/List/NavList/NavList'
import DragItem from '../../components/List/DragItem/DragItem'

class List extends React.Component{
    componentDidMount(){
        if(window.pageYOffset>0){
            console.log(666)
        }
    }
    render(){
        return(
            <div>
               <SearchNav />
               <div id={styles.box}>
                    <HeadList />
                    <NavList />
                    <DragItem />
               </div>
            </div>
        )
    }
}

export default List;