import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { Link } from 'gatsby'
import strory1 from '../../images/story/1.jpg'
import strory2 from '../../images/story/2.jpg'
import strory3 from '../../images/story/3.jpg'
import strory4 from '../../images/story/4.jpg'
import './style.css'

const Story = () => {
  return (
    <div id="story" className="story-area section-padding">
      <div className="container">
        <div className="col-l2">
          <div className="section-title text-center">
            <h2>
              <FormattedMessage id="our_story" />
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="story clearfix">
              <div className="story-top"></div>
              <div className="content-wrapper">
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory1} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>
                      <FormattedMessage id="story_1_title" />
                    </h2>
                    <span className="date">
                      <FormattedMessage id="story_1_date" />
                    </span>
                    <p>
                      <FormattedMessage id="story_1_text" />
                    </p>
                    <div className="story-button">
                      <Link className="theme-btn" to="/" title="READ MORE">
                        <FormattedMessage id="read_more" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory2} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>
                      <FormattedMessage id="story_2_title" />
                    </h2>
                    <span className="date">
                      <FormattedMessage id="story_2_date" />
                    </span>
                    <p>
                      <FormattedMessage id="story_2_text" />
                    </p>
                    <div className="story-button">
                      <Link className="theme-btn" to="/" title="READ MORE">
                        <FormattedMessage id="read_more" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory3} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>
                      <FormattedMessage id="story_3_title" />
                    </h2>
                    <span className="date">
                      <FormattedMessage id="story_3_date" />
                    </span>
                    <p>
                      <FormattedMessage id="story_3_text" />
                    </p>
                    <div className="story-button">
                      <Link className="theme-btn" to="/" title="READ MORE">
                        <FormattedMessage id="read_more" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="story-icon">
                    <span className="flaticon-birds-in-love"></span>
                  </div>
                  <div className="story-content">
                    <div className="image-wrap">
                      <div className="single-image">
                        <div>
                          <img src={strory4} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>
                      <FormattedMessage id="story_4_title" />
                    </h2>
                    <span className="date">
                      <FormattedMessage id="story_4_date" />
                    </span>
                    <p>
                      <FormattedMessage id="story_4_text" />
                    </p>
                    <div className="story-button">
                      <Link className="theme-btn" to="/" title="READ MORE">
                        <FormattedMessage id="read_more" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="story-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
