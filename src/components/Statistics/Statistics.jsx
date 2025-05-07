export default function Statistics( {title, stats} ) {
  return (
    <section className="statistics">
  <h2 className="title">Upload stats</h2>

      <ul>
        {stats.map((item) => (
          <li key={item.id}>
          <span>{item.label}</span>
          <span>{item.percentage}</span>
          </li>
        ))}
      </ul>
</section>
  );
}