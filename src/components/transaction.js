import React, { useState } from 'react';
import FormInput from './form-input';
import FormSelect from './form-select';

const Transaction = () => {
    const [transaction,setTransaction] = useState({
        title:"",
        amount:0,
        type:"",
        category:"",
        date:""
    })
    const [transactions,setTransactions] = useState([])
    let newTransaction = [transactions];
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(transactions.length ===0){
            setTransactions(transaction)
        }else{
            newTransaction.push(transaction)
            setTransactions(newTransaction)
        }
        e.target.reset()
       
    }
    return (
        <div className='container'>
           <div className='form-container'>
            <h2>Money Manager</h2>
                <form
                onSubmit={handleSubmit}
                >
                    <FormInput label={"Title"} type={"text"} onChange={(e)=>setTransaction({...transaction,title:e.target.value})}/>
                    <FormInput label={"Amount"} type={"number"} onChange={(e)=>setTransaction({...transaction,amount:e.target.value})}/>
                    <FormSelect onChange={(e)=>setTransaction({...transaction,type:e.target.value})} label={"Type"} options={[
                        {value:"Income",label:"Income"},
                        {value:"Expense",label:"Expense"},
                    ]}/>
                    <FormInput onChange={(e)=>setTransaction({...transaction,category:e.target.value})} label={"Category"} type={"category"}/>
                    <FormInput onChange={(e)=>setTransaction({...transaction,date:e.target.value})} label={"Date"} type={"date"}/>
                    <button type='submit'>Submit</button>
                </form>
           </div>
        </div>
    );
};

export default Transaction;