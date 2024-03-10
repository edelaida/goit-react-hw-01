import s from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.tablBlock}>
      <thead className={s.title}>
        <tr>
          <th className={s.titlename}>Type</th>
          <th className={s.titlename}>Amount</th>
          <th className={s.titlename}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((user) => {
          return (
            <tr
              key={user.id}
              className={clsx(s.line, {
                [s.linebl]: user.id % 2 === 0,
              })}
            >
              <td className={s.itemname}>{user.type} </td>
              <td className={s.itemname}>{user.amount}</td>
              <td className={s.itemname}>{user.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
