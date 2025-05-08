// import {  } from './FriendList.styled.js'

import FriendListItem from "../FriendListItem/FriendListItem";


export default function FriendList( {friends} ) {
  return ( <>
<ul className="friend-list">
{friends.map((item) => (
    <FriendListItem item={item} key={item.id} />

))}
</ul>
  </> );
}