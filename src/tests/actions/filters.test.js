import moment from "moment"
import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters"

test('should generate set start date action object', () => {
   const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('should generate set text data action object',() => {
    const action = setTextFilter('test')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })
})

test('should generate set text data action object no param',() => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should generate set sort by amount action object',() => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate set sort by date action object',() => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})


