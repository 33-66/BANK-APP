import React, { useState } from 'react';

function TableHead({transactions,setTransactions,onUpdateState}) {
        const [description,setDescription] = useState('');
        const [amount,setAmount] = useState('');
        const [date,setDate] = useState('');
        const [category,setCategory] = useState('');

        function handleAdd(e){
                e.preventDefault();
                const newTransaction = {
                        id: 15,
                        date,
                        description,
                        category,
                        amount,
                };

                setTransactions([...transactions,newTransaction])
                
                setDescription("");
                setAmount("")
                setDate("")// we rely on react state
                setCategory("")


                //transactions.push(newTransaction);
              // console.log(transactions);
                //onUpdateState(transactions);

        }
    return (
        <form onSubmit={handleAdd}>
        <div className="container">
               
               
                <div className="transaction">
            
                        <label htmlFor="transaction">Description</label>
                        <input type="text" id="transaction" name="transaction" value={description} onChange={e => setDescription(e.target.value)}></input>
                    
                    
                </div>
                <div className="amount__">
                
                        <label htmlFor="amount">Amount</label>
                        <input type="text" id="amount" name="amount" value={amount} onChange={e => setAmount(e.target.value)}></input>
                    
                    
                </div>
                <div className="category__">
                
                        <label htmlFor="category">Category</label>
                        <select value={category} onChange={e => setCategory(e.target.value)}>
                        
                            <option value=""></option>
                            <option value="food">Food</option>
                            <option value="fashion">Fashion</option>
                            <option value="income">Income</option>
                            <option value="gift">Gift</option>
                            <option value="transportation">Transportation</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="housing">Housing</option>
                        </select>
                    
                    
                </div>
                <div className="date__">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" value={date} onChange={e => setDate(e.target.value)}></input>
                    
                </div>
            
        </div>

        <button onClick={handleAdd} className="addBtn">Add transaction</button>
        
    </form>

      );
}

export default TableHead;