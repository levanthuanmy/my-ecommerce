import React, { useState } from "react"
import { useCookies } from "react-cookie"
import { useForm } from "react-hook-form"
import Fade from "react-reveal/Fade"
import {
  auth,
  logOut,
  provider,
  signInWithGoogle,
} from "../../firebase/firebase.utils"
import { iconGoogle } from "../../resources/dummyData"
import "./style.css"

const AccountPage = () => {
  const [current, setCurrent] = useState(0) //0 : signin, 1 : signup
  const [cookies, setCookie] = useCookies(["is-logged-in"])

  const handleSignOut = () => {
    if (cookies["is-logged-in"] === "true") {
      logOut(auth)
      setCookie("is-logged-in", false)
    }
  }

  const SignIn = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    const handleSignInWithGoogle = async () => {
      try {
        const res = await signInWithGoogle(auth, provider)
        res && setCookie("is-logged-in", true)
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
        <Fade>
          <input
            id="email"
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          <br />
          <span>{errors.email && "hehe"}</span>
          <br />
          <input
            id="password"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <br />
          <span>{errors.password && "hehe"}</span>
          <div className="container-button">
            <button
              id="externalSignin"
              type="button"
              onClick={handleSignInWithGoogle}
            >
              <img src={iconGoogle} alt="" />
              <div>GOOGLE</div>
            </button>
            <button id="signin" type="submit">
              LOGIN
            </button>
          </div>
        </Fade>
      </form>
    )
  }
  return cookies["is-logged-in"] === "false" ? (
    <div className="container-account-page">
      <div className="container-login">
        <div className="title-login">
          <span
            onClick={() => setCurrent(0)}
            className={current === 0 && `active`}
          >
            SIGN IN
          </span>
          <span
            onClick={() => setCurrent(1)}
            className={current === 1 && `active`}
          >
            SIGN UP
          </span>
        </div>
        <div className="container-form">
          {current === 0 ? (
            <SignIn />
          ) : (
            <form>
              <Fade>
                <input type="text" />
              </Fade>
            </form>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="container-account-page">
      <button onClick={() => handleSignOut()}>log out</button>
    </div>
  )
}

export default AccountPage
