import React, { useState } from "react"
import "./style.css"
import Fade from "react-reveal/Fade"
import { iconGoogle } from "../../resources/dummyData"
import { useForm } from "react-hook-form"
import { auth, provider, signInWithGoogle } from "../../firebase/firebase.utils"

const AccountPage = () => {
  const [current, setCurrent] = useState(0) //0 : signin, 1 : signup

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
  return (
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
  )
}

export default AccountPage
