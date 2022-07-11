import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";

import axios from "axios";

import "../Styles/contact.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "2%",
    transform: "translate(-50%, -50%)",
  },
};

function Contact() {
  const url = "http://localhost:2255/employedeatil";
  const [data, setData] = useState([]);
  const [modalIsOpen, setModelIsOpen] = useState(false);
  const [addEmploye, setAddEmploye] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });
  const formRef = useRef();

  useEffect(() => {
    axios.get("http://localhost:2255/getemploye").then((res) => {
      setData(res.data);
      console.log(res);
    });
  }, []);

  const openModal = () => {
    setModelIsOpen(true);
  };
  const closeModel = () => {
    setModelIsOpen(false);
    setAddEmploye({ id: "", name: "", email: "", phone: "" });
  };
  const cancelHandle = () => {
    setModelIsOpen(false);
    setAddEmploye({ id: "", name: "", email: "", phone: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        id: parseInt(addEmploye.id),
        name: addEmploye.name,
        email: addEmploye.email,
        phone: addEmploye.phone,
      })
      .then((res) => {
        setAddEmploye(res.data);
        window.alert(
          "new employes are added successfully into mongodb data base"
        );
      });
    setModelIsOpen(false);
  };
  const handleOnChange = (e) => {
    const newEmploye = { ...addEmploye };
    newEmploye[e.target.name] = e.target.value;
    setAddEmploye(newEmploye);
    console.log(newEmploye);
  };

  return (
    <>
      <div className="contact-wrapper">
        <div className="conatct-title">contact</div>
        <div className="contact-left-items">
          <span class="fas fa-home-lg-alt home-icon">/</span>
          <span className="conatct-app">App/</span>
          <span>
            <b>contact/</b>
          </span>
        </div>
      </div>
      <div className="conatct-data">
        <div className="buu">
          <button className="addbutton" onClick={openModal}>
            + Add Conatcts
          </button>
          <Modal isOpen={modalIsOpen} style={customStyles}>
            <div className="add-more-conatct">
              <div className="more-conatact-header">
                <div className="contact">Contacts</div>
                <div
                  className="fas fa-times  remove-icon"
                  onClick={closeModel}
                ></div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit}>
                <label>Id</label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  value={addEmploye.id}
                  onChange={handleOnChange}
                />
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={addEmploye.name}
                  onChange={handleOnChange}
                />
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={addEmploye.email}
                  onChange={handleOnChange}
                />

                <label>Phone</label>
                <input
                  type="tel"
                  maxlength="13"
                  className="form-control"
                  name="phone"
                  value={addEmploye.phone}
                  onChange={handleOnChange}
                />
                <div className="button-group">
                  <button className="accept-btn">Accept</button>
                  <button className="cancel-btn " onClick={cancelHandle}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        </div>

        <div className="data-search">
          <span class="far fa-search contact-search"></span>
          <input type="text" className="contact-input" />
        </div>
      </div>
      <div className="emplyes-detail">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">
                <input type="checkbox" />
              </th>
              <th scope="col">Id</th>
              <th scope="col">userInfo</th>
              <th scope="col">Phone</th>
              <th scope="col">joining Date</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>1</td>
              <td>
                <span>
                  <img
                    src="./Assets/nadella.jpg"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                    }}
                  />
                </span>
                <span>Mr.Prakash Chavan</span>
              </td>
              <td>+91 8660052116</td>
              <td>
                <span class="fad fa-calendar-times"></span>
                <span>10-5-2013</span>
              </td>
              <td>
                <span style={{ backgroundColor: "red" }}>developer</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>2</td>
              <td>
                <span>
                  <img
                    src="./Assets/nadella.jpg"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                    }}
                  />
                </span>
                <span>Mrs.Priya Naik</span>
              </td>
              <td>+49 13256789</td>
              <td>
                <span class="fad fa-calendar-times"></span>
                <span>8-6-2015</span>
              </td>
              <td>
                <span style={{ backgroundColor: "yellow" }}>manager</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" />
              </th>
              <td>3</td>
              <td>
                <span>
                  <img
                    src="./Assets/nadella.jpg"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                    }}
                  />
                </span>
                <span>Mr.Rajkumar</span>
              </td>
              <td>+91 8050539002</td>
              <td>
                <span class="fad fa-calendar-times"></span>
                <span>1-6-2020</span>
              </td>
              <td>
                <span style={{ backgroundColor: "green" }}>developer</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <input type="checkbox" />
              </th>

              <td>4</td>
              <td>
                <span>
                  <img
                    src="./Assets/nadella.jpg"
                    alt=""
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                    }}
                  />
                </span>
                <span>Mr.Vishal</span>
              </td>
              <td>+91 7898908778</td>
              <td>
                <span class="fad fa-calendar-times"></span>
                <span>6-5-2016</span>
              </td>
              <td>
                <span style={{ backgroundColor: "tomato" }}>designer</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Contact;
