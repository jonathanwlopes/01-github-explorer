import "../styles/repositories.scss"
import { useEffect, useState } from "react"
import { RepositoryItem } from "./RepositoryItem"

// https://api.github.com/orgs/rocketseat/repos

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={`name-${repository.name}`}repository={repository} />
        ))}
      </ul>
    </section>
  )
}
