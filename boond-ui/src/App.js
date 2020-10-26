import React from 'react';
// import logo from './logo.svg';
import {connect} from 'react-redux';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import IntroPage from "./pages/intropage/intropage.page";
import AdminEntryPage from "./pages/admin-entry/admin-entry.page";
class App extends  React.Component{
    render() {
        const {currentAdmin} = this.props;
        console.log(currentAdmin);
        return(
            <Switch>
                <Route exact={true} path={"/"} component={IntroPage}/>
                <Route exact={true} path={"/admin"} component={AdminEntryPage}/>
            </Switch>
        );
    }
}
const mapStateToProps = (state)=>({
    currentAdmin: state.admin.currentAdmin
});
export default connect(mapStateToProps)(App)
