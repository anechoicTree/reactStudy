import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log('clicked');
  }
    return (
      <Card className="expense-item">
        <div>
          <ExpenseDate date={props.date}/>
        </div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
        </div>
        <Card className="expense-item__price">
            ${props.amount}
        </Card>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    )
};

export default ExpenseItem;