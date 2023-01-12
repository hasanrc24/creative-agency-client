import React, { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import "./UserServiceList.css";
import UserServiceCard from "./UserServiceCard/UserServiceCard";
import LinearProgress from "@mui/material/LinearProgress";
import { useAuth } from "../../../Contexts/AuthContext";

const UserServiceList = () => {
  useEffect(() => {
    document.title = "Service list";
  }, []);

  const { loggedInUser } = useAuth();
  const [myService, setMyService] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://creative-agency-server-j90v.onrender.com/myOrders?email=${loggedInUser.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyService(data);
        setLoading(false);
      });
  }, [loggedInUser]);

  return (
    <div>
      <div className="mt-4 mb-4 px-5">
        <h4>Service list</h4>
      </div>
      <div>
        <Row className="user-service">
          {loading && <LinearProgress />}
          {myService.length ? (
            myService.map((myService, index) => (
              <UserServiceCard myService={myService} key={index} />
            ))
          ) : (
            <h5 className="text-center">You didn't take any service</h5>
          )}
        </Row>
      </div>
    </div>
  );
};

export default UserServiceList;
