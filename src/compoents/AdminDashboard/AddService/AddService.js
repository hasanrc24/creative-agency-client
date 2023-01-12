import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./AddService.css";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

const AddService = () => {
  useEffect(() => {
    document.title = "Add Service";
  }, []);

  const [serviceTitle, setServiceTitle] = useState("");
  const [serviceDesc, setServiceDesc] = useState("");
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleAddService = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("serviceTitle", serviceTitle);
    formData.append("serviceDesc", serviceDesc);
    setLoading(true);

    fetch(`https://creative-agency-server-j90v.onrender.com/addService`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
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
  return (
    <div>
      <div className="mt-4 mb-4 px-5">
        <h4>Add Service</h4>
      </div>
      <div className="add-service">
        <Form onSubmit={handleAddService}>
          <div className="add-service-bg">
            <Row>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Service Title</Form.Label>
                  <Form.Control
                    onBlur={(e) => setServiceTitle(e.target.value)}
                    type="text"
                    placeholder="Enter title"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    onBlur={(e) => setServiceDesc(e.target.value)}
                    as="textarea"
                    rows={3}
                    placeholder="Enter designation"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Icon</Form.Label>
                  <Form.Control
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
          <div className="text-end">
            {loading ? (
              <CircularProgress />
            ) : (
              <Button type="submit" className="add-service-btn">
                Submit
              </Button>
            )}
          </div>
        </Form>
        {success && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              <strong>Service added successfully</strong>
            </Alert>
          </Stack>
        )}
      </div>
    </div>
  );
};

export default AddService;
