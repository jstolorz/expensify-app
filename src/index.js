import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css'
import App from './App';
import configureStore from "./store/configureStore"
import * as serviceWorker from './serviceWorker';
import {addExpense} from "./actions/expenses"
import {setTextFilter} from "./actions/filters"
import getVisibleExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.dispatch(addExpense({description: 'Water bill', amount: 4100, createdAt: 4000}))
store.dispatch(addExpense({description: 'Gas bill', amount: 3350, createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', amount: 10987, createdAt: 2000}))



const state = store.getState()
const visibleExtenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExtenses)

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
