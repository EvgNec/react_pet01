import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
import StatisticList from './Statistics/StatisticList/StatisticList';
import data from './Statistics/data.json';

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
      <StatisticList items={data} />
    </>
  );
};
