import React from "react"
import "./main.css"
import "./reset.css"
import { Col, Container, Row } from "react-bootstrap"
import { FadeInUp } from "../components/FadeInUp"
import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
import Menu from "../components/Menu"
import Burger from "../components/Menu/Burger"
// ..

export default function Home() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false)

  const toggleMenuIsOpen = () => setMenuIsOpen(!menuIsOpen)

  React.useEffect(() => {
    console.log("aos.init")
    AOS.init()
  }, [])

  return (
    <div className="app">
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@700&display=swap"
        rel="stylesheet"
      />
      <Container>
        <Row>
          <Col style={{ position: "relative" }}>
            <div
              style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "white",
              }}
            >
              <div data-aos="fade-up" className="img__text">
                <h2 style={{ color: "black" }}>
                  HELLO.
                  <br />
                  MY NAME
                  <br />
                  IS VASYA.
                  <br />
                  I'M AN ART DIRECTOR.
                  <br />
                  HERE ARE SOME OF
                  <br />
                  MY WORKS:
                </h2>

                <span></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col style={{ position: "relative" }}>
            <img
              className="layout-img"
              alt="girl"
              src="https://sergeyguns.github.io/dimon/pairs/01_1.jpg"
            />
            <div data-aos="fade-up" className="img__text">
              <h2 style={{ color: "white" }}>HELLO.</h2>

              <span style={{ color: "white" }}> Fish text.</span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col style={{ position: "relative" }}>
            <div
              style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: "white",
              }}
            >
              <div data-aos="fade-up" className="img__text">
                <h2 style={{ color: "black" }}>
                  HELLO.
                  <br />
                  MY NAME
                  <br />
                  IS VASYA.
                  <br />
                  I'M AN ART DIRECTOR.
                  <br />
                  HERE ARE SOME OF
                  <br />
                  MY WORKS:
                </h2>

                <span></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col style={{ position: "relative" }}>
            <img
              className="layout-img"
              alt="girl"
              src="https://sergeyguns.github.io/dimon/pairs/01_1.jpg"
            />
            <div data-aos="fade-up" className="img__text">
              <h2 style={{ color: "white" }}>HELLO.</h2>

              <span style={{ color: "white" }}> Fish text.</span>
            </div>
          </Col>
        </Row>
      </Container>
      {menuIsOpen && (
        <Menu>
          <div>1. #########</div>
          <div>2. #########</div>
          <div>3. #########</div>
        </Menu>
      )}
      <Burger menuIsOpen={menuIsOpen} toggleMenuIsOpen={toggleMenuIsOpen} />
    </div>
  )
}
