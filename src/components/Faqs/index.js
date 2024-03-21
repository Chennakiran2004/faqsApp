import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faqs-main-container">
        <h1 className="faqs-heading">FAQs</h1>
        {faqsList.map(eachFaq => (
          <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
        ))}
      </div>
    </div>
  )
}

export default Faqs
