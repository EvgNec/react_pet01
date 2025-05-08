import css from './FriendListItem.module.css'

export default function FriendListItem({ item }) {
  return (
    <>
      <li className={css.friendItem} key={item.id}>
        <span className={`${css.friendStatus} ${item.isOnline ? css.online : css.offline}`}></span>
        <img className={css.friendAvatar} src={item.avatar} alt={item.name} width="48" />
        <p className={css.friendName}>{item.name}</p>
      </li>
    </>
  );
}
