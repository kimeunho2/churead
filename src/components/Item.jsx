import React from 'react'
import Line from '../components/Line'
import UserImage from '../components/UserImage'
import UserName from '../components/UserName'
import Text from '../components/Text'
import ItemButtons from './ItemButtons'

const Item = ({userName}) => {
  return (
    <div>
    <Line/>
    <UserImage/>
    <div>
    <UserName userName={userName}/>
    <Text/>
    </div>
    <ItemButtons/>
    </div>
  )
}

export default Item