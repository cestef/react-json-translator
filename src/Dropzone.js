import {useDropzone} from 'react-dropzone';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((temes) => ({
    div: {
        textAlign: "center",
        fontSize: "20px"
    },
    icon: {
        fontSize: "40px"
    }
}))
const Dropzone = ({onDrop}) => {
    const classes = useStyles()
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <div className={classes.div}>
                        <p>Drop the file here !</p>
                        <ExpandMoreIcon className={classes.icon}/>
                    </div>
                    :
                    <div className={classes.div}>
                        <p>Drag and drop your <code>JSON</code> file or click to select</p>
                        <AttachFileIcon className={classes.icon}/>
                    </div>
            }
        </div>
    )
}

export default Dropzone
