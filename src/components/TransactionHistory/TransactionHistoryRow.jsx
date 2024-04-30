import s from "./TransactionHistory.module.css";
const TransactionHistoryRow = ({ type, amount, currency }) => {
  return (
    <div>
      <td className={s.capitalize}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </div>
  );
};

export default TransactionHistoryRow;
