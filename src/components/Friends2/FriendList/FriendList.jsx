import css from './FriendList.module.css'

import FriendListItem from "../FriendListItem/FriendListItem";


export default function FriendList( {friends} ) {
  return ( <>
<ul className={css.friendList}>
{friends.map((item) => (
    <FriendListItem item={item} key={item.id} />

))}
</ul>
  </> );
}