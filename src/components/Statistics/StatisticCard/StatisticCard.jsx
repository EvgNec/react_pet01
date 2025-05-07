export default function StatisticCard({  label, percentage  }) {
    return (
      <>
     <span>{label}</span>
     <span>{percentage}</span>
      </>
    );
  }