import React ,{ useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { TransactionAmt } from './TransactionAmt';
export const Transaction = () => {
  const { transactions } = useContext(GlobalContext);
  // console.log(context);

  return (
    <>
    <h3>History</h3>
      <ul className="list">
        {transactions.map (transaction=> 
                ( <TransactionAmt key={transaction.id} transaction={transaction}/>))
        }
              </ul>
      </>
  )
}
