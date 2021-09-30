import React from "react"
import {
  bannerImg,
  benefitList,
  homePageHightlight,
} from "../resources/dummyData"
import "./style.css"
import Fade from "react-reveal/Fade"

const HomePage = () => {
  const BenefitContainer = () => {
    const BenefitChild = ({ benefit }) => {
      return (
        <Fade bottom delay={(+benefit.id * 1000) / 2} duration={1000}>
          <div className="benefit-child">
            <div>
              <img src={benefit?.icon} alt="" className="icon-benefit" />
            </div>
            <div>
              <div className="benefit-title">{benefit?.title}</div>
              <div className="benefit-description">{benefit?.description}</div>
            </div>
          </div>
        </Fade>
      )
    }
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
      <div className="container-hightlight">
        <Fade top duration={2000}>
          <div className="hightlight-title">{homePageHightlight.title}</div>
        </Fade>
        <Fade left delay={1500} duration={1500}>
          <div className="hightlight-main">{homePageHightlight.hightlight}</div>
          <div className="hightlight-description">
            {homePageHightlight.description}
          </div>
        </Fade>
        <Fade bottom delay={1500} duration={1800}>
          <button className="hightlight-button">Explore</button>
        </Fade>
      </div>
      <div className="container-main-home-body">
        <BenefitContainer />
        <div className="hightlight-description">

        </div>
      </div>
    </div>
  )
}

export default HomePage
