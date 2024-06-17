
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    const buttonStyle = {
        backgroundImage: `url(${"https://freesvg.org/img/1430954247.png"})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        border: 'none',
        
        padding: '20px 20px',
        
        cursor: 'pointer'
      };

    const buttonStyle2 = {
        backgroundImage: `url(${"https://cdn-icons-png.flaticon.com/512/5974/5974627.png"})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        border: 'none',
        
        padding: '20px 20px',
        
        cursor: 'pointer'
      };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} style={buttonStyle} ></button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)} style={buttonStyle2} ></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;