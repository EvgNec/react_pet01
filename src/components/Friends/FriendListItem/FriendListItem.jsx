import { Item, Status, Avatar, Name } from './FriendListItem.styled.js';

export default function FriendListItem({ item }) {
  return (
    <>
      <Item key={item.id}>
        <Status $isOnline={item.isOnline}></Status>
        <Avatar src={item.avatar} alt={item.name} width="48" />
        <Name>{item.name}</Name>
      </Item>
    </>
  );
}

