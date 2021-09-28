import React from "react"
import { menuList } from "../resources/dummyData"

const CategoryBar = () => {
  const MenuItem = ({ menu }) => {
    return (
      <div className="bg-gray-200 text-2xl text-white">
        <div>{menu.name}</div>
        <div>
          {menu.subMenu?.map((item, id) => (
            <SubMenu key={id} item={item} />
          ))}
        </div>
      </div>
    )
  }
  const SubMenu = ({ item }) => {
    return <div>-{item.name}</div>
  }

  return (
    <div className={`grid grid-cols-4 gap-2 p-2`}>
      {menuList.map((menu, id) => (
        <MenuItem key={id} menu={menu} />
      ))}
    </div>
  )
}

export default CategoryBar
