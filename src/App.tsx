import { For, type Component, createSignal } from "solid-js"
import { AiOutlineSearch } from "solid-icons/ai"
import AlbumDisplay from "./components/albumDisplay"
import AlbumPopup from "./components/albumPopup"
import { Albums } from "./data/albums"
import { FaSolidAngleDown } from "solid-icons/fa"

const App: Component = () => {
  const albums = Albums.sort((x, y) => x.album.name.localeCompare(y.album.name))
  const [selected, setSelected] = createSignal(albums[0])
  const [display, setDisplay] = createSignal(albums)

  let artistSet = new Set("")
  for (const album of albums) {
    artistSet.add(album.album.artist)
  }
  const artists = Array.from(artistSet).sort()

  const filter = (keyword?: string) => {
    document.querySelector("body")?.click()

    if (!keyword) {
      setDisplay(albums)
      return
    }

    const lowerCaseKeyword = keyword.toLowerCase()
    setDisplay(
      albums.filter(
        (a) =>
          a.album.artist.toLowerCase().includes(lowerCaseKeyword) ||
          a.album.name.toLowerCase().includes(lowerCaseKeyword) ||
          (a.album.tracks?.track?.find((t) =>
            t.name.toLowerCase().includes(lowerCaseKeyword)
          ) ??
            false)
      )
    )
  }

  function spliceIntoChunks(arr: any[], chunkSize: number) {
    const res = []
    while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize)
      res.push(chunk)
    }
    return res
  }

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
                id="searchBox"
                onInput={(e) => filter(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
              />
            </div>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  onclick={() => filter()}
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Artists <FaSolidAngleDown class="ml-2" />
                </button>
                <div
                  id="dropdownNavbar"
                  class="z-10 hidden grid grid-cols-2 w-auto font-normal bg-white divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <For
                    each={spliceIntoChunks(
                      artists,
                      Math.round(artists.length / 2)
                    )}
                  >
                    {(chunks) => (
                      <div class="p-4">
                        <ul
                          class="text-sm text-gray-700 dark:text-gray-400 "
                          aria-labelledby="dropdownLargeButton"
                        >
                          <For each={chunks}>
                            {(artist) => (
                              <li>
                                <a
                                  href="#"
                                  onclick={() => filter(artist)}
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  {artist}
                                </a>
                              </li>
                            )}
                          </For>
                        </ul>
                      </div>
                    )}
                  </For>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div style={{ height: "70px" }}></div>

      <div class="flex flex-wrap gap-10 m-10 justify-center">
        <For each={display()}>
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
        data-modal-backdrop="dynamic"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <AlbumPopup info={selected()} />
      </div>

      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" - "}
            <a href="https://nhan.pt/" class="hover:underline">
              NhanPT
            </a>
          </span>
          <p class="items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <a class="ml-2 mr-2">{albums.length} albums</a>|
            <a
              href="https://github.com/help-14/vinyl-collection"
              class="ml-2 mr-2"
            >
              Github
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
