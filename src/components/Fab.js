import React, { Component } from 'react'
import { Container, Button, Link } from 'react-floating-action-button';
import DisasterPop from './popup/DisasterPop';

export default class Fab extends Component {
    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !(this.state.on)
        })
    }
    constructor(props){
        super(props);
        this.state = {showDisForm: false}
    }


    render() {
        let closeDisForm = () => this.setState({showDisForm:false})
        return (
            <div>
                {/* {
                    this.state.on && (
                        <DisasterPop />
                        
                    )  
                } */}
            <Container>
                <Button
                    tooltip="Report disaster"
                    icon="fas fa-plus"
                    rotate={true}
                    onClick={() => this.setState({showDisForm: true})}
                    // onClick = {this.toggle}
                    />
          </Container>
          <DisasterPop
            show = {this.state.showDisForm}
            onHide = {closeDisForm}
            />
            </div>
        )
    }
}
