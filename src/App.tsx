import { For, type Component, createSignal } from "solid-js"
import { AiOutlineSearch } from "solid-icons/ai"
import AlbumDisplay from "./components/albumDisplay"
import AlbumPopup from "./components/albumPopup"
import { Albums } from "./data/albums"

const App: Component = () => {
  const albums = Albums.sort((x, y) => x.album.name.localeCompare(y.album.name))
  const [selected, setSelected] = createSignal(albums[0])

  return (
    <div class="">
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://vinyl.nhan.pt/" class="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/02/Disque_Vinyl.svg"
              class="h-8 mr-3"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Vinyl collection
            </span>
          </a>
          <div class="flex md:order-2">
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <AiOutlineSearch size="20" />
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
              />
            </div>
          </div>
          {/* <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>

      <div style={{ height: "70px" }}></div>

      <div class="flex flex-wrap gap-10 m-10 justify-center">
        <For each={albums}>
          {(album) => (
            <a
              onclick={() => setSelected(album)}
              class="scale-100 hover:scale-110 ease-in duration-200 cursor-pointer"
              data-modal-target="albumModal"
              data-modal-toggle="albumModal"
            >
              <AlbumDisplay info={album} />
            </a>
          )}
        </For>
      </div>

      <div
        id="albumModal"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <AlbumPopup info={selected()} />
      </div>
    </div>
  )
}

export default App
