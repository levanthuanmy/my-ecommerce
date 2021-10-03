import React, { useState } from "react"
import "./style.css"

const AccountPage = () => {
  const [current, setCurrent] = useState(0) //0 : signin, 1 : signup
  return (
    <div className="container-account-page">
      <div className="container-login">
        <div className="title-login">
          <span onClick={() => setCurrent(0)}>SIGN IN</span>
          <span onClick={() => setCurrent(1)}>SIGN UP</span>
        </div>
        <div className="container-form">
          {current === 0 ? (
            <>
              <input type="text" />
              <input type="text" />
            </>
          ) : (
            <><input type="text" /> </>
          )}
        </div>
      </div>
    </div>
  )
}

export default AccountPage
