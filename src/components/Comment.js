import React, {Component} from 'react'; 

class Comment extends Component {
    state = {
        karma: 'good'
    }; 

    changeKarma = () => {
        if (this.state.karma === 'good') {
            this.setState({
                karma: 'bad'
            })
        } else {
            this.setState({
                karma: 'good'
            })
        }
    }

    render () {
        let goodKarmaSrc = "https://media.giphy.com/media/1zJFtdNUhblPRT1yQy/giphy.gif";
        let badKarmaSrc = "https://media.giphy.com/media/AxVvk4TmDfmoMtSmmQ/giphy.gif";
        return (
            <div className={this.state.karma}>
                <img src={this.state.karma === 'bad' ? badKarmaSrc : goodKarmaSrc} />
                <p>{this.props.message}</p>
                <button className={'button'} onClick={this.changeKarma}>Change Karma</button>
            </div>
        )
    }
}; 

export default Comment; 