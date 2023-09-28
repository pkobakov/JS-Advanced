function solve(arr){
    const parser = str =>
    str
        .split("|")
        .filter(x => x !== "")
        .map(x => x.trim())
        .map(x => (isNaN(x) ? x : Number(Number(x).toFixed(2))))
const headings = parser(arr[0])

return JSON.stringify(
    arr.slice(1).map(x => {
        const line = parser(x)
        return headings.reduce((row, heading, entry) => {
            row[heading] = line[entry]
            return row
        }, {})
    })
)
}

console.log(solve(['| Town | Latitude | Longitude |',
       '| Sofia | 42.696552 | 23.32601 |',
       '| Beijing | 39.913818 | 116.363625 |']));