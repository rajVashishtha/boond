import React from 'react';
import SignUp from "../../components/sign up/signup.component";

class AdminEntryPage extends React.Component{
    render() {
        return (
            <div>
                <h2 align={"center"}>Admin Entry Page</h2>
                <SignUp />
            </div>
        );
    }
}
export default AdminEntryPage;