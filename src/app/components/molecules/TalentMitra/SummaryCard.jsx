'use client';

const SummaryCard = ({ title, value }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-5 w-full flex flex-col">
      <p className="text-gray-700 text-lg font-medium">{title}</p>
      <div className="text-3xl font-extrabold text-left">{value}</div>
    </div>
  );
};

export default SummaryCard;
