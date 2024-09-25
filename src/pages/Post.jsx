import React, { useEffect, useState, useRef } from 'react'
import Line from '../components/Line'
import UserImage from '../components/UserImage'
import UserName from '../components/UserName'
import Button from '../components/Button'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';

const Post = ({onPost}) => {
  
  
  const textareaRef = useRef(null)


  const [value, setValue] = useState('');


  const handleChange = (event) => {

      const {value} = event.target;

      setValue(value)
      console.log(value);


      
  }


  const handleClick = () => {
    onPost(value)
  
  }

  useEffect(() => {
    console.log("123",textareaRef);
  }, {})


  return (
    <>  
    <div div className='post-Page'>
    <div className='post-text'>
        <p>취소</p>
        <p className='center-text'>새로운 스레드</p>
        </div>  
        <Line/>
        <div className='post-userImage-userName-area'>
        <UserImage/>
        <div className='userName-area'>
        <UserName userName="steamylit" className="post-userName"/>
        <textarea className='textarea-class' placeholder="텍스트를 입력하세요..." onChange={handleChange} ref={textareaRef

          
        }> </textarea>
        </div>
        </div>
        <div className='Reply-Post'>
        <p className='Reply'>누구에게나 답글 및 인용 허용</p>
        <Button type="submit" text="게시" onClick={handleClick} value={value}  className="post"/>
        <Nav/>
        </div>
        </div>
    </>
)
}

export default Post