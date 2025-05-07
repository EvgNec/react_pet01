
// import PropTypes from 'prop-types';
import StatisticCard from '../StatisticCard/StatisticCard';

export default function StatisticList( items ) {
  return (
    <section class="statistics">
  <h2 class="title">Upload stats</h2>
    <ul className="stat-list">
      {items.map((item) => (
        <li key={item.id}>
          <StatisticCard info={items} />
        </li>
      ))}
    </ul>
    </section>
  );
}
