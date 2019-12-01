import React, {Component} from "react"

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            timeFormat: '24'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            timeFormat: event.target.value
        })
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    format12(date) {
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        const ampm = hours >= 12 ? 'PM' : 'AM'
        hours = hours % 12
        hours = hours ? hours : 12
        minutes = minutes < 10 ? minutes.toString().padStart(2,"0") : minutes
        seconds = seconds < 10 ? seconds.toString().padStart(2,"0") : seconds
        const strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm
        return strTime
    }



    render() {
        return <div>
            {this.state.timeFormat === '24' ? this.state.date.toLocaleTimeString() : this.format12(this.state.date)}
            <p>Format:</p>
            <form>
                <label>
                    <input type="radio" value="24" checked={this.state.timeFormat === '24'} onChange={this.handleChange}/>
                    24
                </label><br/>
                <label>
                    <input type="radio" value="12" checked={this.state.timeFormat === '12'} onChange={this.handleChange}/>
                    12
                </label>
            </form>
        </div>
    }
}

export default Clock