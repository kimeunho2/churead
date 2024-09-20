import React from 'react'
import Line from '../components/Line'
import UserImage from '../components/UserImage'
import UserName from '../components/UserName'
import Text from '../components/Text'
import ItemButtons from './ItemButtons'

const Item = ({userName, text, userProfileImage, likeCount}) => {
  return (
    <div>
    <Line/>
    <div className='userImage-ItemButtons-text'>
    <div className='UserImage userItem-image'>
    <UserImage userProfileImage={userProfileImage}/>
    </div>
    <div className='UserName-Text-ItemButtons'>
    <div className='userName-Text'>
    <UserName userName={userName}/>
    <Text text={text}/>
    </div>
    <ItemButtons/>
    </div>
    </div>
    <img src="/images/heart.svg" alt='하트'/>{likeCount}
    </div>
  )
}
export default Item