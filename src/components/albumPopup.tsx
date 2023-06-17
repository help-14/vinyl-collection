import { type Component } from "solid-js"
import { AlbumInfo } from "../api/album"
import { IoClose } from "solid-icons/io"
import { createSignal, createEffect } from "solid-js"

const AlbumPopup: Component = (props) => {
  const [albumInfo, setAlbumInfo] = createSignal()
  const [albumCover, setAlbumCover] = createSignal("")

  createEffect(() => {
    setAlbumCover(
      (albumInfo() as AlbumInfo).album.image.at(-1)?.["#text"] ?? ""
    )
  })

  return (
    <div
      id="albumModal"
      data-modal-backdrop="static"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-2xl max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex items-start justify-between p-4 rounded-t dark:border-gray-600">
            <div>
              <img
                class="rounded-lg shadow-xl dark:shadow-gray-500 light:shadow-gray-500"
                src={albumCover()}
              />
            </div>
            <div></div>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="albumModal"
            >
              <IoClose size="24" />
            </button>
          </div>
          <div class="p-6 space-y-6">
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Feature is comming soon!
            </p>
          </div>
          <div class="flex items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600"></div>
        </div>
      </div>
    </div>
  )
}

export default AlbumPopup
