import React from 'react';

function TableBody({transactions,handleDelete}) {
    return ( 
        <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
            {transactions.map((transaction) => (

              <tr key={transaction.id} >
                <td>{transaction.id}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(transaction.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>



            ) 
            
            )}
        </tbody>
      </table>
    </div>


     );
}

export default TableBody;