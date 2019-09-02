import React from 'react';
import {ReactComponent as NodeLogo} from '../../img/node.svg'
import {ReactComponent as CSSLogo} from '../../img/css3.svg'
import {ReactComponent as HTMLLogo} from '../../img/html.svg'
import {ReactComponent as ReactLogo} from '../../img/react.svg'
import {ReactComponent as PostgresLogo} from '../../img/postgresql.svg'
import {ReactComponent as JSLogo} from '../../img/js.svg'
import {ReactComponent as JqueryLogo} from '../../img/jquery.svg'

import './Skills.css'

export default class Skills extends React.Component {

  // logos = [NodeLogo, 'postgresql', 'react', 'js','jquery','html','css3']
  // logoDisplay = this.logos.map(logo=>{
   
  // })
  render () {
    return (
      <section className="category _50" id ="skills-section">
      <div className="row">
        <h2 className= "section-title">Things I can help with</h2>
      </div>
      <div className="row">
       <NodeLogo className='logo'/>
       <ReactLogo className='logo'/>
       <PostgresLogo className='logo'/>
       <JSLogo className='logo'/>
       <JqueryLogo className='logo'/>
       <HTMLLogo className='logo'/>
       <CSSLogo className='logo'/>
      </div>
    </section>
  )
}
}