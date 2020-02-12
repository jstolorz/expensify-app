import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import AddExpensePage from "../components/AddExpensePage"
import EditExpensePage from "../components/EditExpensePage"
import HelpExpensePage from "../components/HelpExpensePage"
import NotFoundPage from "../components/NotFoundPage"
import Header from "../components/Header"


const AppRouter = props => {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <div>
                    <Switch>
                        <Route path="/" component={ExpenseDashboardPage} exact/>
                        <Route path="/create" component={AddExpensePage}/>
                        <Route path="/edit/:id" component={EditExpensePage}/>
                        <Route path="/help" component={HelpExpensePage}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};


export default AppRouter;