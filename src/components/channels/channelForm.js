import React, {Component} from 'react';

class ChannelForm extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {};
    // }
    onSubmit = (e) => {
        // let {channelName} = this.state;
        // this.setState({channelName: ""});
        // this.props.addChannel(channelName);
        e.preventDefault();
        const node = this.refs.channel;
        const channelName = node.value;
        this.props.addChannel(channelName);
        node.value = "";
    }

    // onChange = (e) => {
    //     this.setState({ 
    //         channelName : e.target.value
    //     })
    // }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <input
                        className="form-control"
                        placeholder="Add Channel"
                        type="text" 
                        ref="channel"
                        // onChange={this.onChange} 
                        // value={this.state.channelName} 
                    />
                </div>
            </form>
        )
    }
}

// ChannelForm.propTypes = {
//     addChannel: React.PropTypes.func.isRequired,
// }

export default ChannelForm;
