import {Component} from 'react'

import './index.css'

const plusIconImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

const minusIconImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  onClickToggleFaqAnswer = () => {
    this.setState(previousState => ({isActive: !previousState.isActive}))
  }

  renderActiveImageUrl = () => {
    const {isActive} = this.state

    const imageUrl = isActive ? minusIconImage : plusIconImage
    const imageAltText = isActive ? 'minus' : 'plus'

    return (
      <button
        className="button"
        type="button"
        onClick={this.onClickToggleFaqAnswer}
      >
        <img src={imageUrl} alt={imageAltText} className="image" />
      </button>
    )
  }

  renderFaqAnswer = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="faq-answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="Faq-item-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImageUrl()}
        </div>
        {this.renderFaqAnswer()}
      </li>
    )
  }
}

export default FaqItem
