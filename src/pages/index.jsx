import React from "react"
import { bannerImg, benefitList } from "../resources/dummyData"
import "./style.css"

const HomePage = () => {
  const BenefitChild = ({ benefit }) => {
    return (
      <div className="benefit-child">
        <div>
          <img src={benefit?.icon} alt="" className="icon-benefit" />
        </div>
        <div>
          <div className="benefit-title">{benefit?.title}</div>
          <div className="benefit-description">{benefit?.description}</div>
        </div>
      </div>
    )
  }
  const BenefitContainer = () => {
    return (
      <div className="benefit-container">
        {benefitList.map((benefit, id) => (
          <BenefitChild key={id} benefit={benefit} />
        ))}
      </div>
    )
  }
  return (
    <div className="">
      <img src={bannerImg} alt="banner" className="banner-img" />
      <div className="container-main-home-body">
        <BenefitContainer />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default HomePage
