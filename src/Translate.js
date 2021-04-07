import fs from "fs"
import path from "path"
const Translate = ({match}) => {
    const submit = (e, newValue) => {
        e.preventDefault()
        console.log(newValue)
        let filePath = path.join(__dirname, "../temp.json")
        let data = JSON.parse(fs.readFileSync(filePath, "utf-8"))
        data[match.params.text] = newValue
        fs.writeFileSync(filePath, JSON.stringify(data))
    }
    return (
        <form className="container" style={{textAlign:"center"}}>
            <h1><code>{match.params.text}</code></h1>
            <input type="text" placeholder="Translate this" value={match.params.text} onSubmit={(e)=>submit(e, )}/>
        </form>
    )
}
export default Translate
