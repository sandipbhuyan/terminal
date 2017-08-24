import React, { Component } from 'react'
import { pageStateUpdate } from '../../actions/pageState'
import { connect } from 'react-redux'
import heart from '../../images/heart.png'
import TerminalBash from '../terminal/index'

class PageState extends Component {
    constructor (props) {
        super(props)
        const { dispatch } = this.props;
        dispatch(pageStateUpdate("heloves"))
    }

    render() {

        return(
            <div className='main-page'>
                <div className='content-container'>
                    <h1>Welcome to my world <span>,Sandip..</span></h1>
                    <p>Terminal for oneline webservers</p>
                    <TerminalBash />
                </div>
            </div>
        )
    }


}

// PageState.propTypes = {
//     dispatch: React.PropTypes.func,
//     pageStateReducer: React.PropTypes.shape({
//         pageState: React.PropTypes.string
//     })
//
// }

const mapStateToProps = (state,ownProps) => {
    return state
}

export default connect(mapStateToProps)(PageState)