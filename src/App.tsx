import { useEffect, useState } from "react"
import styles from "./app.module.css"
import { Header } from "./components/header"
import { Episode } from "./components/episode"
import { Eagle } from "./components/eaagle"
import type { Episode as EpisodeType } from "./types"

const url = "https://api.themoviedb.org/3/tv/1433"
const getRandomEpisode = async (): Promise<EpisodeType> => {
  const opts = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  }
  const season = (
    await fetch(url, opts).then((res) => res.json())
  ).seasons.filter((s: { air_date: string }) => s.air_date)

  const randomSeason = season[Math.floor(Math.random() * season.length)]

  return await fetch(
    `${url}/season/${randomSeason.season_number}/episode/${Math.floor(
      Math.random() * randomSeason.episode_count
    )}?append_to_response=images`,
    opts
  ).then((res) => res.json())
}

function App() {
  const [episode, setEpisode] = useState<EpisodeType | null>(null)

  const get = () => getRandomEpisode().then(setEpisode)

  useEffect(() => {
    get()
  }, [])

  return (
    <main className={styles.main}>
      <Eagle />
      {episode ? (
        <div className={styles.container}>
          <Header />
          <Episode episode={episode} />
          <button className={styles.btn} onClick={get}>
            🎲 GET ANOTHER RANDOM EPISODE
          </button>
        </div>
      ) : null}
    </main>
  )
}

export default App
