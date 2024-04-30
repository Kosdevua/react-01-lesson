import TransactionHistoryRow from "./TransactionHistoryRow";
// import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => {
          return (
            <tr key={transaction.id}>
              <TransactionHistoryRow
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
