import React from 'react';
import { observable } from 'mobx';
import {observer} from 'mobx-react'

const appState = observable({
  timer: 0,
})

appState.resetTimer = function () {
  appState.timer = 0;
};

setInterval(function () {
  appState.timer += 1;
}, 1000);

@observer
class TimerView extends React.Component {
  render() {
    return (
      <button onClick={this.onReset.bind(this)}>
        Seconds passed: {this.props.appState.timer}
      </button>
    );
  }

  onReset() {
    this.props.appState.resetTimer();
  }
};

function Rank(props) {
  return  (
    <div>
      Rank
      <TimerView appState={appState}></TimerView>
    </div>
  )
}

export default React.memo(Rank);