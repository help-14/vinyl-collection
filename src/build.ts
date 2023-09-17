import { Albums } from "./data/albums"
import * as fs from "fs"
import * as https from "https"

async function downloadFile(url: string, targetFile: string) {
  console.log(`Download from '${url}' to '${targetFile}'`)
  return await new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        const code = response.statusCode ?? 0

        if (code >= 400) {
          return reject(new Error(response.statusMessage))
        }

        // handle redirects
        if (code > 300 && code < 400 && !!response.headers.location) {
          return resolve(downloadFile(response.headers.location, targetFile))
        }

        // save the file to disk
        const fileWriter = fs.createWriteStream(targetFile).on("finish", () => {
          resolve({})
        })

        response.pipe(fileWriter)
      })
      .on("error", (error) => {
        reject(error)
      })
  })
}

;(async () => {
  let fileText = fs.readFileSync("./data/albums.ts").toString()

  for (const album of Albums) {
    const imgUrl = album.album.image[0]["#text"]
    const imgFileName =
      "/assets/" + imgUrl.substring(imgUrl.lastIndexOf("/") + 1)
    try {
      await downloadFile(imgUrl, `.${imgFileName}`)
      fileText = fileText.replace(imgUrl, imgFileName)
    } catch {
      continue
    }
  }

  fs.writeFileSync("./data/albums.ts", fileText)
})()
