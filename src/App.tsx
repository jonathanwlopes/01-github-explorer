import { Fragment } from "react"
import { RepositoryList } from "./components/RepositoryList"
import "./styles/global.scss"

export const App = () => {
  return (
    <Fragment>
      <RepositoryList />
    </Fragment>
  )
}
