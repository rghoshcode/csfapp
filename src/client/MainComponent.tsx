import * as React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import {Layout} from 'antd';
import {NewPost} from "./NewPost";

const {Header, Content, Footer} = Layout;


interface IState {
    showNewDraftPost: boolean;
}

export class MainComponent extends React.Component<any, IState> {
    constructor(props : any) {
        super(props);
        this.state = {
            showNewDraftPost: false,
        }
    }

    public render() {
        return (
            <div>

                <Layout style={{minHeight: '100vh'}}>
                    <Header id='header'>
                        Minimalist. Resourceful. Reliable.

                    </Header>
                    <Content style={{ margin: '0 2px' }}>
                        <div ><button className='bar-button' onClick={this.onNewPost}>New Question</button></div>
                        { this.state.showNewDraftPost && <NewPost/>}

                    </Content>
                    <Footer style={{textAlign: 'center', fontSize: '10px'}}>
                        CtrlShiftF.com ©2018 Designed by Ranajoy Ghosh
                    </Footer>

                </Layout>
            </div>
        );
    }

    private onNewPost = () => {

        if (!this.state.showNewDraftPost) {
            this.setState({showNewDraftPost: true});
        }

    }
}
