import React from "react";
import "../components/styles/Dashboard.css";
import {
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
} from "recharts"

const Dashboard = () => {
  const data2 = [
    { name: "Products", total: 5, fill: "#F47373" },
    { name: "users", total: 3, fill: "#37D67A" },
    { name: "Orders", total: 7, fill: "#697689" },
  ];
  return (
    <>
      <div className="Dashboard_outer_div">
        <div className="heading">
          <h1>Dashboard</h1>
        </div>
        <div className="dashboard_total_amount_bar">
          <p style={{color:'black',marginTop:'1%'}}>Total Income : ₹21000</p>
        </div>
        <div className="dashboard_circles">
          <div style={{ backgroundColor: "#F47373" }} className="dashboard_POU">
            <p>
              Product
              <br />9
            </p>
          </div>
          <div style={{ backgroundColor: "#37D67A" }} className="dashboard_POU">
            <p style={{ color: "black" }}>
              Orders
              <br />7
            </p>
          </div>
          <div style={{ backgroundColor: "#697689" }} className="dashboard_POU">
            <p>
              Users
              <br />
              11
            </p>
          </div>
        </div>
        <div className="barGraphOf_POU_container">
          <div className="bargraph">
            <ResponsiveContainer height={300} width={400}>
              <BarChart
                width={200}
                height={300}
                data={data2}
                margin={{ left: 10 }}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 10, right: 10 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="total"
                  fill="#8884d8"
                  background={{ fill: "#efefef" }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="labelsOfDashboard">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
