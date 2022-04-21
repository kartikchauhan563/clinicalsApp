import React from 'react';
import axios from 'axios';

class Home extends React.Component{

    state={
        patientData:[]
    }

    componentWillMount(){
        axios.get('localhost:1111/clinicalservices/api/patients').then(Res={
            const patientData=res.data;
            this.setState({patientData})
        })
    }
    
    render(){
        return(
            <div>
                <h2>Patient: </h2>
                <table align="center">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age </th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
                </table>
            </div>
        )
    }
}

export default Home;