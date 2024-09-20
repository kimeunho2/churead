import React, { useState } from 'react';
import Item from '../components/Item';
import Nav from '../components/Nav';
import Button from '../components/Button';
import { initialFeedList } from '../data/response';





const HomeLogin = ({value}) => {
  const [feedList, setFeedList] = useState(initialFeedList);
  
  const addFeed = () => {
    const addFeedList = {
      id: initialFeedList.length +1,
      userName: "kimeunho",
      churead: value,
      likeCount: 0,
    }

    const addFeedList2 = [addFeedList, ...initialFeedList]
    }

  return (
    <div className='homeLogin'>
    <div className='logo-logoutButton'>
    <div className='center-wrapper'>
    <img src="/images/logo 1.svg" alt="Logo" className='logo' />
    </div>
    <div>
      <Button text="로그아웃" className="logout-Button"/>
    </div>
    </div>
    <div className='homeLoginText'>
      {feedList.map((feed) => 
        <Item 
          userName={feed.userName}
          text={feed.churead}
          key={feed.id}
          userProfileImage={feed.userProfileImage}
          likeCount={feed.likeCount}  />
        ) 
    
      }

      <Nav/>
    </div>
    </div>
  )
}

export default HomeLogin