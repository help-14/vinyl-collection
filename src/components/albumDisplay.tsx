import { type Component } from "solid-js"
import { AlbumInfo } from "../api/album"
import { createSignal } from "solid-js"

const AlbumDisplay: Component<{ info: AlbumInfo }> = (props) => {
  const [album, _] = createSignal(props.info.album)

  return (
    <div>
      <img
        style={{ width: "300px", height: "300px" }}
        class="rounded-lg shadow-xl dark:shadow-gray-500 light:shadow-gray-500"
        src={album().image.at(-1)?.["#text"]}
        loading="lazy"
      />
      <div class="px-2 pb-5 mt-2">
        <h5 class="text-xl antialiased font-semibold tracking-tight text-gray-900 dark:text-white">
          {album().name}
        </h5>
        <p class="antialiased text-gray-500	italic">{album().artist}</p>
      </div>
    </div>
  )
}

export default AlbumDisplay
