import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { trackPromise } from 'react-promise-tracker';


const Disaster = props => (
        <tr>
          <td>{props.disaster.disasterName}</td>
          <td>{props.disaster.location}</td>
          <td>{props.disaster.description}</td>
          <td>{props.disaster.dateDiscovered.substring(0,10)}</td>
          <td>{props.disaster.responseStatus}</td>
          <td>
            <Link to={"/edit/"+props.disaster._id}>edit</Link> | <a href="#" onClick={() => { props.deleteDisaster(props.disaster._id) }}>delete</a>
          </td>
        </tr>
      )

export default class DisasterList extends Component {
    constructor(props){
        super(props);
        this.deleteDisaster = this.deleteDisaster.bind(this);
        this.state = {disasters: []}
    }
        componentDidMount() {
            trackPromise(
                axios.get('http://localhost:5000/disasters/')
                .then(response => {
                    this.setState({ disasters: response.data })
                })
                .catch((error) => {
                    console.log(error);
                }));

        }

      deleteDisaster(id){
          axios.delete('http://localhost:5000/disasters/'+id)
            .then(response => {console.log(response.data)});
            this.setState({
                disasters: this.state.disasters.filter(el => el._id !== id)
            }

            )
      }
      disasterList(){
          return this.state.disasters.map(currentdisaster => {
              return <Disaster disaster={currentdisaster}
                                deleteDisaster={this.deleteDisaster}
                                key = {currentdisaster._id}
                    />
          })
      }
    render() {
        return (
            <div>
                <h3>Disasters</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Disaster Name</th>
                            <th>Disaster Location</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Response Status</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.disasterList()}
                    </tbody>
                </table>
                
            </div>
        )
    }
}


