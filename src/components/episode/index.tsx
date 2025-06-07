import type { Episode as EpisodeType } from "../../types"
import styles from "./index.module.css"
export const Episode = ({ episode }: { episode: EpisodeType }) => {
  return (
    <div className={styles.episodeCard}>
      <div className={styles.stills}>
        {episode?.images?.stills?.map((img) => (
          <div
            className={styles.still}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${img.file_path})`,
            }}
          ></div>
        ))}
      </div>
      <div className={styles.seasonEpisode}>
        Season {episode.season_number}, Episode {episode.episode_number}
      </div>
      <div className={styles.episodeTitle}>{episode.name}</div>
      <div className={styles.episodeDescription}>{episode.overview}</div>
    </div>
  )
}
