import { FriendLists } from './FriendList.styled.js'

import FriendListItem from "../FriendListItem/FriendListItem";


export default function FriendList( {friends} ) {
  return ( <>
<FriendLists>
{friends.map((item) => (
    <FriendListItem item={item} key={item.id} />

))}
</FriendLists>
  </> );
}