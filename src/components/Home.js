import React from 'react';
import axios from 'axios';
import {link} from 'react-router-dom';


class Home extends React.Component{

state={
patientData:[]
}

componentWillMount(){
axios.get('http://localhost:1111/clinicalservices/api/patients/').then(res=>{
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
            {this.state.patientData.map(patient=>
            <RowCreator item={patient} />)}
        </tbody>
        <br />
        <link to={'/addPatient'}>
        <font size="5"> Register Patient</font>
        </link>
    </table>
</div>
)
}
}

class RowCreator extends React.Component{
render(){
var patient=this.props.item;
return <tr>
    <td>{patient.id}</td>
    <td>{patient.firstName}</td>
    <td>{patient.lastName}</td>
    <td>{patient.age}</td>
    <td>
        <link to={'/patientDetails/'+patient.id}> Add Data </link>
    </td>
    <td>
        <link to={'/analyze/'+patient.id}> Analyze </link>
    </td>

</tr>

}
}

export default Home;