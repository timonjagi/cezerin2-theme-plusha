import React, { Fragment } from "react"
import { themeSettings, text } from "../lib/settings"
import MetaTags from "../components/metaTags"
import Register from "../components/register"

const RegisterContainer = props => {
  const {
    state: { pageDetails, settings },
  } = props

  return (
    <Fragment>
      <Register {...props} />
    </Fragment>
  )
}

export default RegisterContainer
