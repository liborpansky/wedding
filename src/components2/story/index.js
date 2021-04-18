import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'
import { Link } from 'gatsby'
import story1 from '../../images/story/1.png'
import story2 from '../../images/story/2.png'
import story3 from '../../images/story/3.png'
import story4 from '../../images/story/4.png'
import story5 from '../../images/story/5.png'
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
                          <img src={story1} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>
                      <FormattedMessage id="story_1_title" />
                    </h2>
                    <span className="date">
                      <FormattedMessage id="story_1_date" />
                    </span>
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
                          <img src={story2} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>
                      <FormattedMessage id="story_2_title" />
                    </h2>
                    <span className="date">
                      <FormattedMessage id="story_2_date" />
                    </span>
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
                          <img src={story3} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>
                      <FormattedMessage id="story_3_title" />
                    </h2>
                    <span className="date">
                      <FormattedMessage id="story_3_date" />
                    </span>
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
                          <img src={story4} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>
                      <FormattedMessage id="story_4_title" />
                    </h2>
                    <span className="date">
                      <FormattedMessage id="story_4_date" />
                    </span>
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
                          <img src={story5} alt="" />
                        </div>
                      </div>
                    </div>
                    <h2>
                      <FormattedMessage id="story_5_title" />
                    </h2>
                    <span className="date">
                      <FormattedMessage id="story_5_date" />
                    </span>
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
