import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Modal , Button , Row , Column } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateDisaster extends Component {
    constructor(props){
        super(props);

        this.onChangeDisasterName = this.onChangeDisasterName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateDiscovered = this.onChangeDateDiscovered.bind(this);
        this.onChangeResponseStatus = this.onChangeResponseStatus.bind(this);
        this.onChangelocation = this.onChangelocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            disasterName: '',
            location: '',
            description:'',
            dateDiscovered: new Date(),
            responseStatus: '',

            disasters: []
        }
    }

    componentDidMount(){
        
    }

    onChangeDisasterName(e){
        this.setState({
            disasterName: e.target.value
        });
    }
    onChangelocation(e){
        this.setState({
            location: e.target.value
        });
    }
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    onChangeDateDiscovered(date){
        this.setState({
            dateDiscovered: date
        })
    }
    onChangeResponseStatus(e){
        this.setState({
            responseStatus: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const disaster = {
            disasterName: this.state.disasterName,
            location: this.state.location,
            description: this.state.description,
            dateDiscovered: this.state.dateDiscovered,
            responseStatus: this.state.responseStatus,
        }
        console.log(disaster);
        window.location = '/';
    }

    render() {
        return (
            <div>
                <h1>Add new disaster</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">

                        <DatePicker />

                    </div>
                </form>
            </div>
        )
    }
}
