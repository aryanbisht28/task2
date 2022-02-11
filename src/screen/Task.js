import Search from 'antd/lib/transfer/search'
import React from 'react'
import Menu from '../component/Menu'
import SearchComp from '../component/SearchComp'
import CommentComp from '../component/CommentComp'
import AvatarComp from '../component/AvatarComp'
import CardComp from '../component/CardComp'
import './Task.css'

function Task() {
  return (
    <div className='container'>
        <div className='menu'>
            <Menu />
        </div>
        <div className='content'>
            <div className='search'>
                <SearchComp />
            </div>
            <div className='comment'>
                <CommentComp />
            </div>
            <div className='Avatar'>
                <div className='img'>
                <AvatarComp />
                </div>
                <div className='text'>
                    <h4>Aryan Bisht</h4>
                </div>
            </div>
            <div className='cont'>
                <CardComp />
            </div>

        </div>
        <div className='block'></div>
    </div>
  )
}

export default Task
