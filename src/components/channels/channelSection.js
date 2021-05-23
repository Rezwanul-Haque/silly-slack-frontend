import React, {Component} from 'react';
import ChannelForm from "./channelForm";
import ChannelList from "./channelList";


class ChannelSection extends Component {
    render(){
        return (
            <div className="support card card-primary">
                <div className="card-header">
                    <strong>Channels</strong>
                </div>
                <div className="card-body channels">
                    <ChannelList {...this.props} />
                    <ChannelForm {...this.props} />
                </div>
            </div>
        )
    }
}

// ChannelSection.propTypes = {
//     channels: React.PropTypes.array.isRequired,
//     setChannel: React.PropTypes.func.isRequired,
//     addChannel: React.PropTypes.func.isRequired,
//     activeChannel: React.PropTypes.object.isRequired
// }

export default ChannelSection;
