import { For, type Component, Show } from "solid-js"
import { AlbumInfo } from "../api/album"
import { IoClose } from "solid-icons/io"
import { createSignal, createEffect } from "solid-js"

const AlbumPopup: Component<{ info: AlbumInfo }> = (props) => {
  const [album, setAlbum] = createSignal(props.info)
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
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div class="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
          <div style={{ width: "750px", height: "300px" }}>
            <svg
              viewBox="0 0 225.68 225.687"
              width="290"
              height="290"
              id="svg2"
              style={{
                position: "absolute",
                "margin-left": "150px",
                "margin-top": "5px",
                "z-index": 9,
              }}
            >
              <g id="g13">
                <path
                  d="M 225.68,112.847 C 225.68,175.171 175.165,225.686 112.836,225.686 C 50.522,225.687 0,175.171 0,112.847 C 0,50.525 50.522,0 112.836,0 C 175.165,0 225.68,50.525 225.68,112.847 z"
                  id="path15"
                  style={{
                    stroke: "lightgray",
                    fill: diskColor(),
                  }}
                />
                <path
                  d="M 151.792,112.847 C 151.792,134.358 134.353,151.805 112.836,151.805 C 91.321,151.805 73.881,134.359 73.881,112.847 C 73.881,91.33 91.321,73.891 112.836,73.891 C 134.353,73.891 151.792,91.331 151.792,112.847 z"
                  id="path17"
                  style="fill:#ffffff"
                />
                <path
                  d="M 116.866,112.847 C 116.866,115.074 115.063,116.879 112.836,116.879 C 110.617,116.879 108.807,115.074 108.807,112.847 C 108.807,110.619 110.617,108.816 112.836,108.816 C 115.063,108.816 116.866,110.62 116.866,112.847 z"
                  id="path119"
                />

                <path
                  d="M 207.882,154.579 C 197.43,178.35 178.323,197.456 154.547,207.908"
                  id="path27"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 26.954,65.298 C 36.748,47.633 51.837,33.313 70.072,24.469"
                  id="path31"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 201.246,155.543 C 191.621,175.444 175.464,191.601 155.563,201.239"
                  id="path35"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 31.278,68.092 C 40.793,50.792 55.653,36.846 73.627,28.478"
                  id="path41"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 197.293,151.87 C 188.137,171.654 172.24,187.674 152.548,196.98"
                  id="path45"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 194.591,145.045 C 187.004,164.302 172.808,180.232 154.794,190.045"
                  id="path49"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 34.828,72.416 C 43.183,56.334 56.357,43.166 72.436,34.821"
                  id="path53"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 188.86,145.892 C 181.194,163.508 167.578,177.946 150.548,186.659"
                  id="path57"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 40.22,72.872 C 48.523,57.822 61.372,45.631 76.909,38.142"
                  id="path61"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 42.851,79.472 C 49.63,65.272 60.61,53.462 74.175,45.638"
                  id="path65"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 176.435,145.879 C 170.255,157.757 160.844,167.682 149.37,174.5"
                  id="path69"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 50.691,77.164 C 57.516,65.305 67.636,55.582 79.807,49.249"
                  id="path73"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 169.121,146.979 C 162.915,157.183 154.019,165.565 143.417,171.139"
                  id="path77"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 57.354,77.446 C 63.886,67.225 73.172,58.925 84.158,53.598"
                  id="path81"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 165.924,141.229 C 160.968,150.476 153.661,158.284 144.805,163.852"
                  id="path85"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 62.042,80.556 C 67.532,71.937 75.145,64.813 84.151,59.925"
                  id="path89"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 162.674,136.573 C 157.986,146.412 150.464,154.644 141.171,160.219"
                  id="path93"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 64.289,86.57 C 69.394,77.163 77.15,69.403 86.554,64.298"
                  id="path97"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 156.897,135.563 C 152.56,143.963 145.892,150.964 137.745,155.705"
                  id="path101"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 69.974,87.932 C 75.203,78.958 83.174,71.775 92.734,67.526"
                  id="path105"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 154.065,129.807 C 149.955,139.764 142.356,147.911 132.782,152.711"
                  id="path109"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 73.236,92.376 C 77.476,84.19 84.177,77.486 92.363,73.246"
                  id="path113"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />

                <path
                  d="M 185.226,140.644 C 179.144,156.488 168.007,169.819 153.798,178.674"
                  id="path117"
                  style="fill:none;stroke:#ffffff;stroke-width:2.5007;stroke-linecap:round;stroke-linejoin:round;opacity:0.3"
                />
              </g>
            </svg>
            <img
              style={{
                width: "300px",
                height: "300px",
                "z-index": 10,
                position: "absolute",
              }}
              class=" shadow-xl dark:shadow-gray-500 light:shadow-gray-500"
              src={album().album.image.at(-1)?.["#text"]}
            />
          </div>
          <div class="flex flex-wrap"></div>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="albumModal"
          >
            <IoClose size="24" />
          </button>
        </div>
        <div class="p-6 space-y-6">
          <div class="flex text-center">
            <Show
              when={album().album.url}
              fallback={
                <h1 class="text-3xl antialiased font-semibold tracking-tight text-gray-900 dark:text-white">
                  {album().album.name}
                </h1>
              }
            >
              <a href={album().album.url}>
                <h1 class="text-3xl antialiased font-semibold tracking-tight text-gray-900 dark:text-white">
                  {album().album.name}
                </h1>
              </a>
            </Show>
            <p class="antialiased text-gray-500	italic ml-2">
              ({album().album.artist})
            </p>
          </div>

          <Show when={album().album.wiki?.summary}>
            <div innerHTML={album().album.wiki?.summary}></div>
          </Show>

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
                    <a href={track.url}>
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
