import * as React from "react";
import {Button, message} from "antd";

class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.inputFile = React.createRef();
    }

    submit(event) {
        event.preventDefault();
        if (!this.inputFile.current.files.length) {
            message.error('请选择一个文件！');
            return;
        }
        alert(
            `选择的文件是:${this.inputFile.current.files[0].name}`
        )
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>
                    上传文件：
                    <input type="file" ref={this.inputFile}/>
                </label>
                <br/>
                <Button htmlType='submit'>确认</Button>
            </form>
        )
    }
}

export default FileInput;
