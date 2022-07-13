import {Component} from 'react';
import './App.css';
import Card from './Ui/Card/Card';
import Text from './Components/Text';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: new Date().toLocaleTimeString()
    }
  }


componentDidMount() {
  console.log(7)
  this.setState({
    timer: (new Date()).toLocaleTimeString()
  })
}

componentDidUpdate() {
  this.myTimerTimeOut = setTimeout(() => {
    this.setState({
      timer: new Date().toLocaleTimeString()
    })
  }, 1000)
}

componentWillUnmount() {
  clearTimeout(this.myTimerTimeOut)
}

  render() {
    return (
      <Card className='container'>
        <Text>
            {this.state.timer}
        </Text>
      </Card>
    )
  }
}

export default App;
