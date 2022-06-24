import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, searchByName } from "../redux/actions/contactActions";
import ContactCard from "./ContactCard";

function Contacts() {
  const contacts = useSelector(state => state.contactReducer.contacts);
  const dispatch = useDispatch();
  const name = useSelector(state => state.contactReducer.searchName);

  useEffect(() => {
    dispatch(getContacts());
  }, []);


  return (
    <div>
    <Form className="d-flex" style={{width:"400px",margin:"auto"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={e => dispatch(searchByName(e.target.value))}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        paddingTop: "50px",
        width: "90%",
        margin: "auto",
      }}
    >

      
      {
      contacts
      .filter(
        contact =>
         contact.name.toLowerCase().includes(name.toLowerCase().trim())

      )
      .map((contact) => (
        <ContactCard contact={contact} key={contact._id} />
      ))}
    </div>
    </div>  );
}

export default Contacts;
