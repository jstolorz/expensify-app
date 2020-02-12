import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1], expenses[2]])
})

test('should not remove expense by id not valid', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 10
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add new expense', () => {

    const expense = {
       id: 4, description: 'Water bill', amount: 4100, createdAt: 4000
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses,action)
    expect(state).toEqual([...expenses,expense])
})

test('should edit an expense',() => {
    const updates = {
         description: 'Water bill', amount: 4100, createdAt: 4000
    }

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    }

    const state = expensesReducer(expenses,action)
    expect(state[1].description).toBe(updates.description)
    expect(state[1].amount).toBe(updates.amount)

})

test('should not edit an expense',() => {
    const expense = {
        description: 'Water bill', amount: 4100, createdAt: 4000
    }

    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        expense
    }

    const state = expensesReducer(expenses,action)

    expect(state).toEqual(expenses)
})

