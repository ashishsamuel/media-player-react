import React from "react";
import { Container, Navbar } from "react-bootstrap";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="bg-info">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none" }}>
            <CloudUploadOutlinedIcon style={{ color: "#000000" }} />
            <span className="mx-1 fw-bold" style={{ color: "#000000" }}>
              Media Player
            </span>
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
