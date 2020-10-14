import React from "react"
import cx from "classnames"
import "./Burger.css"

const Burger = ({ menuIsOpen, toggleMenuIsOpen }) => (
  <div
    onClick={toggleMenuIsOpen}
    className={cx("burger", { "burger--cross": menuIsOpen })}
  >
    <div className="burger__shape burger__shape_1"></div>
    <div className="burger__shape burger__shape_2"></div>
    <div className="burger__shape burger__shape_3"></div>
  </div>
)
export default Burger
