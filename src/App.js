import Container from "@material-ui/core/Container";
import Menu from "./Menu";
import Dropzone from "./Dropzone";
import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Translator from "./Translator";
import {saveAs} from "file-saver";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh"
    },
    dropzone: {}
}));
const App = () => {
    const [dropped, setDropped] = useState(false);
    const [jsonFile, setJsonFile] = useState({});
    const [fileName, setFileName] = useState("");
    const [current, setCurrent] = useState(1)
    const onFiles = (files) => {
        const file = files[0];
        if (!file.name.endsWith(".json")) return
        setFileName(file.name)
        const reader = new FileReader();
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.onload = () => {
            const str = reader.result;
            setJsonFile(JSON.parse(str));
            setDropped(true);
        };
        reader.readAsText(file);

    };
    const finishTranslate = (file) => {
        let blob = new Blob([JSON.stringify(file)], {type: "application/json;charset=utf-8"});
        setDropped(false)
        setJsonFile({})
        setFileName(null)
        setCurrent(1)
        saveAs(blob, fileName)
    };
    const rowFinish = (rowIndex) => {
        setCurrent(rowIndex + 1)
    }
    const classes = useStyles();
    return (
        <>
            <Menu translating={fileName} current={current} total={Object.keys(jsonFile).length}/>
            <Container className={classes.container}>
                {
                    !dropped ?
                        (
                            <>
                                <Dropzone onDrop={onFiles} className={classes.dropzone}/>
                            </>
                        ) :
                        (
                            <>
                                <Translator file={jsonFile} onTranslateFinish={finishTranslate}
                                            onRowFinish={rowFinish}/>
                            </>
                        )
                }
            </Container>
        </>
    );
};

export default App;
