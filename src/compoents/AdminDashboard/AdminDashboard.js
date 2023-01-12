import React, { useEffect, useState } from "react";
import AdminDrawer from "../Shared/AdminDrawer/AdminDrawer";

const AdminDashboard = () => {
  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    fetch(`https://creative-agency-server-j90v.onrender.com/admin`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
      });
  }, []);
  return (
    <div>
      {admin.map((admin, index) => (
        <AdminDrawer admin={admin} key={index} />
      ))}
    </div>
  );
};

export default AdminDashboard;
