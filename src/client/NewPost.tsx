import * as React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { TextArea } = Input;




export class NewPost extends React.Component {
    render() {
        return (
            <div style={{ margin: '10px 2px', borderColor:'black', }}>
                <TextArea placeholder="Put in a title for the question you wish to post here"  />
                <div style={{ margin: '24px 0' }} />
                <TextArea placeholder="The main content of your question goes here" autosize={{ minRows: 8, maxRows: 20 }} />
                <div >
                    <button className='bar-button' >Post</button>
                    <button className='bar-button' >Discard</button>
                </div>
            </div>
        );
    }
}
