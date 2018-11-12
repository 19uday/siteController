import React from 'react';
import { connect } from 'react-redux';
import Layout from './Layout'
import { } from '../_actions';
import { TrackerMetrics } from '../TrackerMetrics';
import { Reports } from '../Reports';
import { Trends } from '../Trends';
import { Broadcast } from '../Broadcast';
import { Configuration } from '../Configuration';
import { Commands } from '../Commands';
import { commissioningActions } from '../_actions'

class HomePage extends React.Component {

    componentDidMount() {
        this.props.getCommissioningData()
    }

    render() {

        return(
            <Layout selected={this.props.match.params.id}>
                {
                    this.props.match.params.id ?
                        this.props.match.params.id === 'TrackerMetrics' ? <TrackerMetrics /> :
                            this.props.match.params.id === 'Trends' ? <Trends /> :
                                this.props.match.params.id === 'Reports' ? <Reports /> :
                                    this.props.match.params.id === 'Commands' ? <Commands /> :
                                        this.props.match.params.id === 'Configuration' ? <Configuration /> : <Broadcast />
                    : <TrackerMetrics />
                }
            </Layout>
        )
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    getCommissioningData: () => {
        dispatch(commissioningActions.getCommissioningData())
    }
})

const connectedHomePage = connect(null, mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };