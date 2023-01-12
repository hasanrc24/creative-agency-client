import React, { useEffect, useState } from "react";
import { Card, Col, Image } from "react-bootstrap";
import "./UserServiceCard.css";
import CircularProgress from "@mui/material/CircularProgress";

const UserServiceCard = ({ myService }) => {
  // const {loggedInUser} = useAuth();
  const [allService, setAllService] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://creative-agency-server-j90v.onrender.com/allServices`)
      .then((res) => res.json())
      .then((data) => {
        setAllService(data);
        setLoading(false);
      });
  }, []);
  const orderTitle = myService.orderCategory;
  const myServices = allService.filter(
    (srvs) => srvs.service.serviceTitle === orderTitle
  );
  return (
    <Col md={4}>
      {allService.length ? (
        <Card className="mb-3 user-service-card">
          <Card.Body className="d-flex justify-content-between align-items-center">
            <Image
              style={{ height: "50px" }}
              src={`data:image/png;base64,${myServices[0].icon}`}
            />
            <span
              className={
                (myService.status === "Pending" && "status-pending") ||
                (myService.status === "Ongoing" && "status-ongoing") ||
                (myService.status === "Done" && "status-done") ||
                "status-pending"
              }
            >
              {myService.status ? myService.status : "Pending"}
            </span>
          </Card.Body>
          <Card.Body>
            <Card.Title>{myServices[0].service.serviceTitle}</Card.Title>
            <p className="text-secondary">
              {myServices[0].service.serviceDesc}
            </p>
          </Card.Body>
        </Card>
      ) : (
        <CircularProgress />
      )}
    </Col>
  );
};

export default UserServiceCard;
