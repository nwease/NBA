import React, {Component} from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home/Home';
import Layout from './hoc/Layout/Layout';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/' exact component={Home}/>
                </Switch>
            </Layout>
        );
    }
}

export default Routes;