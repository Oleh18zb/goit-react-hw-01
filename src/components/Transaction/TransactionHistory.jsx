import React from 'react'
import s from './TransactionHistory.module.css'
import transactions from './transactions.json'

export const TransactionHistory = ({ items }) => {
  return (
    <div className={s.table}>
      <table className={s.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
      ))}
    </tbody>
  </table>
  </div>
  )
}


export default TransactionHistory;