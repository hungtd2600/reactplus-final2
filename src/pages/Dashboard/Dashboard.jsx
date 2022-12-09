import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks } from "../../axios/Tasks";
import images from "../../assets/images/index";
import "./Dashboard.scss";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const linkAvatar = localStorage.getItem("avatar");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    getTasks()
      .then((res) => setTasks(res))
      .catch((err) => {
        alert(err);
      });
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard-profile">
        <div className="profile-wrap">
          <img className="profile-img" src={linkAvatar} alt="" />
        </div>
        <div>
          <h3 className="profile-name">{name}</h3>
          <p className="profile-id">{email}</p>
        </div>
        <button onClick={handleLogOut} className="log-out">
          Log Out
        </button>
      </div>
      <div className="dashboard-clock">
        <img className="clock-img" src={images.clock} alt="" />
        <span className="clock-title">Good Afternoon</span>
      </div>
      <div className="dashboard-task">
        <h3 className="task-title">Tasks List</h3>
        <div className="task-list">
          <div className="heading">
            <h4 className="heading-title">Tasks List</h4>
            <div>
              <img className="heading-img" src={images.add} alt="" />
            </div>
          </div>
          <div className="task-content">
            {tasks.map((task) => {
              return (
                <ul className="list" key={task.id}>
                  <li className="list-item">
                    {task.completed ? (
                      <img src={images.completed} alt="" />
                    ) : (
                      <img src={images.unfinished} alt="" />
                    )}
                    {task.name}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
