import './Images.css';
import React from 'react';
import ImgLoader from '../ImgLoader/ImgLoader';
import ImageLoader from 'rc-image-loader';
import ETScreen from '../../img/tinified/ET-desk.png';
import ETIphone from '../../img/tinified/ET-iphone.png';
import SIScreen from '../../img/tinified/SI-desk.png';
import SIIphone from '../../img/tinified/SI-iphone.png';
import SRScreen from '../../img/tinified/SR-desk.png';
import SRIphone from '../../img/tinified/SR-iphone.png';

export default class Images extends React.Component {
  state = {
    textVisible: false,
    projects: [
      {
        title: 'Even Teams',
        imgs: [ETScreen, ETIphone],
        liveSite: 'https://eventeams.now.sh/',
        frontendRepo: 'https://github.com/DustinHaefele/even-teams-client',
        backendRepo: 'https://github.com/DustinHaefele/even-teams-server',
        description:
          'is a full-stack app to help you make the most even teams possible for any two team sport or game.  The idea came from my friends and I playing volleyball on wednesday nights.  We always hated deciding on teams, and we think close games are more exciting than blowouts.  If you feel the same way, this app is for you!',
        stack: ['JavaScript', 'React', 'Express', 'Node', 'PostgreSQL', 'CSS3']
      },
      {
        title: 'Stay Informed',
        imgs: [SIScreen, SIIphone],
        liveSite: 'https://stayinformed.now.sh',
        frontendRepo:
          'https://github.com/thinkful-ei-dragonfly/stay-informed-client',
        backendRepo:
          'https://github.com/thinkful-ei-dragonfly/stay-informed-api',
        description:
          'is an app designed to help users find information on their congressional representatives by searching thier address.  Our project team wanted an easy way to look up who their representatives are and who are the biggest donors to thier campaigns.  We also wanted to have their contact info and current news all in one place.  This is an app for anyone who feels the same.',
        stack: [
          'JavaScript',
          'React',
          'Express',
          'Node',
          'PostgreSQL',
          'SASS',
          'Google Civic API',
          'ProPublica API',
          'OpenSecrets API',
          'NewsAPI.org'
        ]
      },
      {
        title: 'Spaced Repetition',
        imgs: [SRScreen, SRIphone],
        liveSite: 'https://spaced-repetition.dustinhaefele.now.sh',
        frontendRepo: 'https://github.com/DustinHaefele/spaced-repetition',
        backendRepo:
          'https://github.com/thinkful-ei-dragonfly/spaced-repetition-api-dustin-michaelb',
        description:
          'is a full-stack app that applies a spaced repition learning algorithm to help users learn vocabulary in a new language.  Currently it is an MVP with only ten words and one language loaded into the database.',
        stack: ['JavaScript', 'React', 'Express', 'Node', 'PostgreSQL', 'CSS3']
      }
    ]
  };

  showText() {
    this.setState({
      textVisible: true
    });
  }
  hideText() {
    this.setState({
      textVisible: false
    });
  }

  updateImg() {
    if (this.props.imgIdx === 0) {
      this.setState({
        imgIdx: 1
      });
    } else {
      this.setState({
        imgIdx: 0
      });
    }
  }

  render() {
    const classy1 = this.props.imgIdx === 0 ? 'img-div-desk' : 'img-div-mobile';
    const classy2 =
      this.props.imgIdx === 0
        ? 'project-screenshot-desk'
        : 'project-screenshot-mobile';

    const url = this.state.projects[this.props.projectId].imgs[
      this.props.imgIdx
    ];

    return (
      <div
        className={classy1}
        onMouseEnter={() => this.showText()}
        onMouseLeave={() => this.hideText()}
      >
        <ImageLoader
          placeholder="../../../2705-image-loading.gif"
          image={url}
          renderComponent={({ src }) => <img src={src} alt="project screenshot" className={classy2} onClick={this.props.updateImg}/>}
          renderLoading={() => <ImgLoader />}
          renderError={() => (
            <text>Failed to load the image</text>
          )}
        />
            {/* <img
              src={
                this.state.projects[this.props.projectId].imgs[
                  this.props.imgIdx
                ]
              }
              alt="project screenshot"
              className={classy2}
              onClick={this.props.updateImg}
            /> */}

        {this.state.textVisible && this.props.imgIdx === 0 && (
          <h2 className="text-over desktop">Click to see mobile view</h2>
        )}
        {this.state.textVisible && this.props.imgIdx === 1 && (
          <h2 className="text-over mobile">Click to see desktop view</h2>
        )}
      </div>
    );
  }
}
