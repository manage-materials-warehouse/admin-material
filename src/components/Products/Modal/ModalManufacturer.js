import React from "react";
import { Button, Modal, ListGroup, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createManufacturer,
  deleteManufacturer,
} from "../../../Redux/Actions/ManufacturerAction";
import Loading from "./../../LoadingError/Loading";

const MyVerticallyCenteredModalManufacturer = (props) => {
  const { data, loading } = props;
  const dispatch = useDispatch();

  const [itemName, setItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createManufacturer(itemName));
    setItemName("");
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Thêm nhà sản xuất</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} className="mb-4 form-line">
          <div className="row">
            <div className="col-md-8">
              <Form.Group controlId="formBasicText">
                <Form.Control
                  type="text"
                  placeholder="Nhập nhà sản xuất"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="col-md-4 d-flex align-items-end">
              <Button variant="primary" type="submit" className="w-100">
                Thêm
              </Button>
            </div>
          </div>
        </Form>
        <ListGroup className="list-line">
          {loading ? <Loading /> : ""}
          {data?.map((item, index) => (
            <ListGroup.Item key={index}>
              <span className="item-text">{item}</span>
              <Button
                variant="danger"
                size="sm"
                className="float-right delete-btn"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(deleteManufacturer(index));
                }}
              >
                Xóa
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
};
export default MyVerticallyCenteredModalManufacturer;
