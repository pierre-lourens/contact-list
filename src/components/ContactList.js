import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// styling imports
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ContactList = ({ contacts }) => (
  <div>
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <h1>Contacts</h1>
      </Col>
    </Row>

    <Row className="add-contact-button-wrapper">
      <Col>
        <Link to={"/contacts/new"}>
          <Button variant="secondary">Add Contact</Button>
        </Link>
      </Col>
    </Row>

    {contacts.map((contact) => (
      <Row className="contact-row" noGutters="true" key={contact.id}>
        <Col md={{ span: 8 }}>
          <div className="contact-cover">
            <Link to={`/contacts/${contact.id}`}>
              <div className="contact-list-name">{contact.name}</div>
            </Link>
          </div>
        </Col>

        <Col>
          <div className="contact-options">
            <div className="contact-options-button-wrapper">
              <a href="#">Edit</a>
            </div>

            <div className="contact-options-button-wrapper">
              <a href="#">Delete</a>
            </div>
          </div>
        </Col>
      </Row>
    ))}
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      imageURL: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
