import React, { useState } from "react"
import { menuList } from "../../resources/dummyData"
import "./style.css"
import { useHistory } from "react-router-dom"

const NavBar = ({ children = null }) => {
  const history = useHistory()
  const [current, setCurrent] = useState(0)
  const handleClick = (menu) => {
    setCurrent(menu?.id)
    history.push(menu?.url)
  }
  return (
    <>
      <div className="container-nav-bar">
        <div className="container-inner-nav">
          {menuList.map(
            (menu) =>
              menu.id < 3 && (
                <div key={menu.id} className="item-left-nav">
                  <span
                    className={`cursor-pointer title-menu ${
                      current === menu.id && "title-menu-active"
                    }`}
                    onClick={() => handleClick(menu)}
                  >
                    {menu.name}
                  </span>
                </div>
              )
          )}
        </div>
        <div className="logo">KINDOM</div>
        <div className="container-inner-nav">
          {menuList.map(
            (menu) =>
              menu.id >= 3 && (
                <div key={menu.id} className="item-right-nav">
                  <span
                    className={`cursor-pointer title-menu ${
                      current === menu.id && "title-menu-active"
                    }`}
                    onClick={() => handleClick(menu)}
                  >
                    {menu.name} {menu.id === menuList.length - 1 && `(0)`}
                  </span>
                </div>
              )
          )}
        </div>
      </div>
      <div>{children}</div>
    </>
  )
}

export default NavBar
