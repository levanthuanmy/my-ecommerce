import React from "react"
import { categoryList } from "../../resources/dummyData"
import "./style.css"

const CategoryBar = () => {
  const ItemCategory = ({ menu }) => {
    return (
      <div className={`container-menu-item ${menu.id === 0 && "text-24"}`}>
        <div>{menu.name}</div>
        <div>
          {/* {menu.SubChild?.map((item, id) => (
            <SubCategory key={id} item={item} />
          ))} */}
        </div>
      </div>
    )
  }
  const SubCategory = ({ item }) => {
    return <div>-{item.name}</div>
  }

  return (
    <div className="container-category">
      {categoryList.map((menu, id) => (
        <ItemCategory key={id} menu={menu} />
      ))}
    </div>
  )
}

export default CategoryBar
