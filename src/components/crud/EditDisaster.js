import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditDisaster extends Component {
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
            responseStatus: 'Not resolved',

            disasters: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/disasters/update/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    disasterName: response.data.disasterName,
                    location: response.data.location,
                    description: response.data.description,
                    dateDiscovered: new Date(response.data.dateDiscovered),
                    responseStatus: response.data.responseStatus
                })
            })
            .catch(function (error) {
                console.log(error);
            })
        
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
        console.log(exercise);

        axios.post('http://localhost:5000/disasters/update/'+this.props.match.params.id, disaster)
          .then(res => console.log(res.data));
    
        window.location = '/';
    }
    render() {
        return (
            <div>
            <h1>Edit this disaster</h1>
            <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
                    <label>Disaster: </label>
                    <input  type="text"
                    required
                    className="form-control"
                    value={this.state.disasterName}
                    onChange={this.onChangeDisasterName}
                    />
                </div>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input type="text-area"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
                </div>
                <div className="form-group"> 
                    <label>Location: </label>
                    <input  type="text"
                    required
                    className="form-control"
                    value={this.state.location}
                    onChange={this.onChangelocation}
                    />
                </div>

                <div className="form-group">
                <label>Date: </label>
                <div>
                <DatePicker
                selected={this.state.dateDiscovered}
                onChange={this.onChangeDateDiscovered}
                />
                </div>
                </div>

                <div className="form-group">
                <input type="submit" value="Publish" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}
