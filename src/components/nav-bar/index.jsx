import React, { useEffect, useState } from "react"
import { menuList } from "../../resources/dummyData"
import "./style.css"
import { useHistory, useLocation } from "react-router-dom"

const NavBar = ({ children = null }) => {
  const history = useHistory()
  const location = useLocation()
  const [current, setCurrent] = useState()
  const [isHightlight, setIsHightlight] = useState(false)

  const handleClick = (menu) => {
    setCurrent(menu?.id)
    history.push(menu?.url)
  }

  useEffect(() => {
    location.pathname.includes("/account")
      ? setIsHightlight(true)
      : setIsHightlight(false)

    setCurrent(menuList.findIndex((menu) => location.pathname === menu.url))
  }, [location.pathname])
  return (
    <>
      <div
        className={`container-nav-bar ${
          isHightlight && "bg-white text-secondary shadow-bottom"
        }`}
      >
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
                    {menu.name} {menu.id === menuList.length - 2 && `(0)`}
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
