

export default function Name( {item}) {
    return ( <>
      <li className="item" key={item.id}>
    <span className="status">{item.isOnline}</span>
    <img className="avatar" src={item.avatar} alt={item.name} width="48" />
    <p className="name">{item.name}</p>
  </li>
    </> );
  }