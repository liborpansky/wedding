import React from 'react'
import './style.css'

interface Props {
  section: string
}

const SectionTitle: React.FC<Props> = ({ section }: Props) => {
  return (
    <div className="section-title">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{section}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTitle
