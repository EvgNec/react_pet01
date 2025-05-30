import FriendList from './Friends/FriendList/FriendList';
import FriendList2 from './Friends2/FriendList/FriendList';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
import friends from './Friends/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
      <FriendList2 friends={friends}/>
      <TransactionHistory trans={transactions}/>
    </>
  );
};
