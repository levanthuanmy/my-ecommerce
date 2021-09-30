import React from "react"
import { bannerProductImg } from "../../resources/dummyData"

const ProductsPage = () => {
  return (
    <div>
      <img src={bannerProductImg} alt="banner" className="banner-img" />
      <div className="container-main-home-body"></div>
    </div>
  )
}

export default ProductsPage
