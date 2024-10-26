import React from 'react'
import s from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'


const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={s.friendList}>
        {friends.map(friend => (
          <FriendListItem 
            key={friend.id} 
            avatar={friend.avatar} 
            name={friend.name} 
            isOnline={friend.isOnline} 
          />
        ))}
      </ul>
    </div>
  );
};



export default FriendList;