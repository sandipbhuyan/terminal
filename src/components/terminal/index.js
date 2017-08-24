import Terminal from 'react-bash'
import React,{ Component } from 'react'
import { connect } from 'react-redux'

class TerminalBash extends Component {
    render() {
        return(
            <Terminal/>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return state;
}

export default connect(mapStateToProps)(TerminalBash)
