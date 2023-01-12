import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./UserOrder.css";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { useAuth } from "../../../Contexts/AuthContext";

const UserOrder = () => {
  useEffect(() => {
    document.title = "Order";
  }, []);
  const { loggedInUser } = useAuth();

  const [orderName, setOrderName] = useState("");
  const [orderEmail, setOrderEmail] = useState(loggedInUser.email);
  const [orderCategory, setorderCategory] = useState("Web & Mobile Design");
  const [orderDetails, setOrderDetails] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [services, setServices] = useState([]);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("orderName", orderName);
    formData.append("orderEmail", orderEmail);
    formData.append("orderCategory", orderCategory);
    formData.append("orderDetails", orderDetails);
    formData.append("price", price);
    setLoading(true);

    fetch(`https://creative-agency-server-j90v.onrender.com/addOrder`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderName("");
        setOrderEmail("");
        setorderCategory("");
        setOrderDetails("");
        setPrice("");
        setFile(null);
        setLoading(false);
        setSuccess(true);
        setInterval(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch((err) => {
        setLoading(false);
        setSuccess(false);
        console.log(err);
      });
    e.target.reset();
  };

  useEffect(() => {
    fetch(`https://creative-agency-server-j90v.onrender.com/allServices`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div>
      <div className="mt-4 mb-4 px-5">
        <h4>Order</h4>
      </div>
      <div>
        <Row className="user-order">
          <Col md={6}>
            <Form onSubmit={handleOrderSubmit}>
              <Form.Control
                onBlur={(e) => setOrderName(e.target.value)}
                className="mb-3"
                type="text"
                placeholder="Your name / company's name"
                required
              />
              <Form.Control
                value={loggedInUser.email}
                disabled
                className="mb-3"
                type="email"
                placeholder="Your email address"
                required
              />
              <Form.Select
                onChange={(e) => setorderCategory(e.target.value)}
                className="mb-3"
              >
                {services.map((data, index) => (
                  <option key={index}>{data.service.serviceTitle}</option>
                ))}
              </Form.Select>
              <Form.Control
                onBlur={(e) => setOrderDetails(e.target.value)}
                className="mb-3"
                as="textarea"
                rows={3}
                placeholder="Project Details"
                required
              />
              <div className="d-flex mb-3">
                <Form.Control
                  onBlur={(e) => setPrice(e.target.value)}
                  className="me-2"
                  type="text"
                  placeholder="Price"
                  required
                />
                <Form.Control
                  onChange={(e) => setFile(e.target.files[0])}
                  className="ms-2"
                  type="file"
                />
              </div>
              {loading ? (
                <CircularProgress />
              ) : (
                <Button type="submit" class="brand-button">
                  Send
                </Button>
              )}
            </Form>
            {success && (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  <strong>Order placed successfully</strong>
                </Alert>
              </Stack>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default UserOrder;
