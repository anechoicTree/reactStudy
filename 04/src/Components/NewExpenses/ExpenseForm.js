import React from 'react';
import './ExpenseForm.css';
// import ExpenseDate from './../Expenses/ExpenseDate';

const ExpenseForm = (props) => {
    // 별개로 관리
    const [enteredTitle, setEnteredTitle] = React.useState(''); 
    const [enteredAmount, setEnteredAmount] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState('');

    // 묶어서 관리
    // const [userInput, setUserInput] = React.useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     selectedDate:''
    // });


    // document.getElementById('').addEventListener('click', (event) => {});
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     };
        // });
        // console.log(userInput.enteredTitle);
        // console.log(enteredTitle);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     };
        // });
        // console.log(enteredAmount);
    };
    const dateChangeHandler = (event) => {
        setSelectedDate(event.target.value);
        // setUserInput({ ...userInput,
        //     selectedDate: event.target.value
        // });
        // console.log(selectedDate);
    };

    // const inputChangeHandler = (identifier, value) =>{
    //     if (identifier ==='title'){
    //       setEnterdTitle(value);
    //     }else if(identifier === 'date'){
    //       setEnterdDate(value);
    //     }else{
    //       setEnterdAmount(value);
    //     };
    //   };
      
      const submitHandler = (event) => {
        event.preventDefault(); // 기본값에 동작안하게 해주는??
        const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(selectedDate),
        };

        props.onSaveExpenseData(expenseData);

        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setSelectedDate('');
      };

    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={selectedDate} onChange={dateChangeHandler}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button> 
        </div>
    </form>
    );
};

export default ExpenseForm;