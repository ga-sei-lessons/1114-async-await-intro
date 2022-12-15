console.log('linking up my js!')

// nested dot thens (callback hell all over again)
const baseUrl = 'https://swapi.dev/api/'

let apiRes 

fetch(baseUrl)
    .then(swapiRes => swapiRes.json())
    .then(swapiData => {
        apiRes = swapiData
        console.log('api got back to us!')
        // fetch(swapiData.films)
        //     .then(filmRes => filmRes.json())
        //     .then(filmData => {
        //         console.log(swapiData)
        //         console.log(filmData)
        //     })
        //     .catch(console.error)
    })
    .catch(console.error)

// setTimeout(() => {
//     console.log('setTimeout Ran!')
//     console.log(apiRes)
// }, 10000)


// refactor to async/await syntax
// define a function that is async
const fetchSwapi = async () => {
    // try/catch block is like an if/else for errors
    try {
        // if there is no error, run the code in the try block
        const swapiRes = await fetch(baseUrl)
        const swapiData = await swapiRes.json()

        const filmRes =  await fetch(swapiData.films)
        const filmData = await filmRes.json()

        // console.log(swapiData, filmData)

        return filmData
    } catch (err) {
        // else, goto the catch because there was an error
        console.error(err)
    }
}

fetchSwapi() // don't forgot to invoke!
