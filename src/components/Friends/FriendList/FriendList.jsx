// import {  } from './FriendList.styled.js'


export default function FriendList( {friends} ) {
  return ( <>
<ul className="friend-list">
{friends.map((item) => (
    <li class="item" key={item.id}>
  <span class="status">{item.isOnline}</span>
  <img class="avatar" src={item.avatar} alt={item.name} width="48" />
  <p class="name">{item.name}</p>
</li>
))}
</ul>
  </> );
}