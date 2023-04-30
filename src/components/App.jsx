
import React, { Component } from 'react'
import { Section } from './Section/Section'
import { FidbackOptions } from './FidbackOptions/FidbackOptions'
import { Statistics } from './Statistics/Statistics'
import { Notification } from './Notification/Notification'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    return Object.values (this.state).reduce((acc,item)=>acc+item, 0)

  }
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback ();
    if(!total){
      return 0
    }
return Math.round(this.state.good/ this.countTotalFeedback () *100)
  }
  onLeaveFeedback= (e) => {
this.setState(prevState => ({
[e.target.name]: prevState[e.target.name]+1
}))
  }

  render() {
    const {good,neutral,bad} = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    
    return (
      <div>
        <Section title='Please leave feedback'>
        <FidbackOptions options={options} onLeaveFeedback= {this.onLeaveFeedback}/>
        </Section>
        <Section title="Statistics">
          {total ?
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message='No feedback given'/> }
        </Section>
      </div>
    )
  }
}


