import React, { Component } from 'react';
import { Modal , Button , Row , Column } from 'react-bootstrap';
import CreateDisaster from '../crud/CreateDisaster';

export default class DisasterForm extends Component {
    render() {
        return (
<div>
    <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Add Disaster
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateDisaster />

        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>
</div>
        );
    }
}
