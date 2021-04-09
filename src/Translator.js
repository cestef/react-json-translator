import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
    input: {
        appearance: "none",
        borderRadius: "5px",
        border: "solid 1px white",
        padding: "15px",
        fontSize: "20px",
        margin: "0 auto",
        display: "block",
        width: "100vh"
    },
    button: {
        margin: "10px 5px",
        padding: "10px",
        display: "inline-block"
    },
    buttonGroup: {
        display: "block",
        margin: "0 auto",
        textAlign: "center"
    }
}))
const Translator = ({file, onTranslateFinish, onRowFinish}) => {
    const classes = useStyles();
    let rows = [];
    for (let row in file) rows.push({original: row, toTranslate: file[row], index: rows.length});
    console.log(rows)
    const [currentRow, setCurrentRow] = useState(rows[0]);
    const [inputValue, setInputValue] = useState(currentRow.original)
    const inputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onRowFinish(currentRow.index + 1)
        file[currentRow.original] = inputValue;
        if (currentRow.index + 1 === rows.length) {
            return onTranslateFinish(file)
        }
        setCurrentRow(rows[currentRow.index + 1])
        setInputValue(rows[currentRow.index + 1].toTranslate)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>{currentRow.original}</h2>
            <br/>
            <input className={classes.input} value={inputValue} onChange={inputChange}/>
            <div className={classes.buttonGroup}>
                <Button variant="contained" color="secondary" className={classes.button}
                        onClick={() => onTranslateFinish(file)}>
                    Exit
                </Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
                    Next
                </Button>
            </div>
        </form>
    )
}
export default Translator
