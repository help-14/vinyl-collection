import { For, type Component, Show } from "solid-js"
import { AlbumInfo } from "../api/album"
import { IoClose } from "solid-icons/io"
import { createSignal, createEffect } from "solid-js"
import { url } from "inspector"

const AlbumPopup: Component<{ info: AlbumInfo }> = (props) => {
  const [album, setAlbum] = createSignal(props.info)
  const [hideDes, setHideDes] = createSignal(true)
  const [diskColor, setDiskColor] = createSignal("#000000")

  createEffect(() => {
    setAlbum(props.info)
    setDiskColor(album()?.color ?? "#000000")
  })
  setAlbum(props.info)

  const format2Digit = (input: number): string => String(input).padStart(2, "0")

  const formatDuration = (input: any): string => {
    if (!input) return ""
    const duration = parseInt(input)
    if (!duration) return ""
    return `(${Math.floor(duration / 60)}:${format2Digit(duration % 60)})`
  }

  return (
    <div class="relative w-full max-w-2xl max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 overflow-hidden">
        <div class="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
          <div class="relative w-full">
            <div
              class="absolute top-0 left-0 right-0 bottom-0 m-[-2rem] mr-[-5rem] z-10 bg-black"
              style={{
                "background-image":
                  "https://lastfm.freetls.fastly.net/i/u/300x300/af251669a48a4bafb448e1f6c0de01be.png",
                "background-repeat": "no-repeat",
                "-webkit-background-size": "cover",
                "-moz-background-size": "cover",
                "-o-background-size": "cover",
                "background-size": "cover",
                "z-index": 5,
                filter: "blur(1rem)",
              }}
            >
              <img
                class="w-full h-full opacity-80"
                style={{ "object-fit": "cover" }}
                src={album().album.image.at(-1)?.["#text"]}
              />
            </div>

            <div class="grid grid-cols-2 z-11">
              <img
                style={{
                  width: "300px",
                  height: "300px",
                  "z-index": 10,
                }}
                class="shadow-xl dark:shadow-gray-500 light:shadow-gray-500"
                src={album().album.image.at(-1)?.["#text"]}
              />
              <div
                class="px-4 dark:text-gray-900 text-white my-auto"
                style={{
                  "z-index": 10,
                  "text-shadow":
                    "0 0 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Show
                  when={album().album.url}
                  fallback={
                    <h1 class="text-3xl antialiased font-semibold tracking-tight">
                      {album().album.name}
                    </h1>
                  }
                >
                  <a href={album().album.url} target="_blank">
                    <h1 class="text-3xl antialiased font-semibold tracking-tight">
                      {album().album.name}
                    </h1>
                  </a>
                </Show>
                <p class="antialiased	italic pt-2 text-2xl">
                  {album().album.artist}
                </p>
                <Show when={album().album.wiki?.summary}>
                  <div
                    class="pt-2 overflow-hidden"
                    title={album().album.wiki?.summary}
                    onclick={() => setHideDes(false)}
                  >
                    <p
                      innerHTML={album().album.wiki?.summary}
                      style={{
                        "text-overflow": hideDes() ? "ellipsis" : "unset",
                        display: "-webkit-box",
                        "-webkit-line-clamp": hideDes() ? 9 : 999,
                        "-webkit-box-orient": "vertical",
                        overflow: "hidden",
                      }}
                    ></p>
                  </div>
                </Show>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap"></div>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="albumModal"
            style={{ "z-index": 10 }}
          >
            <IoClose size="24" />
          </button>
        </div>
        <div class="p-6 space-y-6">
          <Show when={(album().album.tags?.tag?.length ?? 0) > 0}>
            <p class="mr-2 text-gray-500">
              <For each={album().album.tags?.tag ?? []}>
                {(tag) => "#" + tag.name + "  "}
              </For>
            </p>
          </Show>

          <div class="grid grid-flow-row grid-cols-1 auto-rows-max">
            <For each={album().album.tracks?.track ?? []}>
              {(track, i) => (
                <div class="flex scale-100 hover:scale-105 ease-in duration-200 cursor-pointer">
                  <p class="text-gray-500">#{format2Digit(i() + 1)}</p>
                  <Show
                    when={track.url}
                    fallback={<p class="ml-3">{track.name}</p>}
                  >
                    <a href={track.url} target="_blank">
                      <p class="ml-3">{track.name}</p>
                    </a>
                  </Show>
                  <p class="ml-2 text-gray-500">
                    {formatDuration(track.duration)}
                  </p>
                </div>
              )}
            </For>
          </div>
        </div>
        <div class="flex items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600"></div>
      </div>
    </div>
  )
}

export default AlbumPopup
