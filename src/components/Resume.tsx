import React, { Component } from 'react';
export default  class Resume extends Component<any> {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <br></br>
                          <em className="date">({item.Achievements})</em>
                          <br></br>
                          <em className="date">{item.MonthOfStarting} {item.YearOfStarting} - {item.MonthOfPassing} {item.YearOfPassing}</em></p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>

        <div className="row education">

          <div className="three columns header-col">
              <h1><span>Certificates</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.certificates && resumeData.certificates.map((item)=>{
                return(
                  <div className="row item">
                      <div className="twelve columns">
                        <h3>{item.UniversityName}</h3>
                        <p className="info">
                        {item.specialization}
                        <br></br>
                        <em className="date">({item.Achievements})</em>
                        <br></br>
                        <em className="date">{item.MonthOfStarting} {item.YearOfStarting} - {item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <br></br>
                          {(item.YearOfLeaving != undefined || item.YearOfLeaving != null) ? <em className="date">{item.MonthOfStarting} {item.YearOfStarting} - {item.MonthOfLeaving} {item.YearOfLeaving}</em> : <em className="date">From {item.MonthOfStarting} {item.YearOfStarting}</em>}
                          </p><p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Teaching</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.teaching && resumeData.teaching.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <br></br>
                          {(item.YearOfLeaving != undefined || item.YearOfLeaving != null) ? <em className="date">{item.MonthOfStarting} {item.YearOfStarting} - {item.MonthOfLeaving} {item.YearOfLeaving}</em> : <em className="date">From {item.MonthOfStarting} {item.YearOfStarting}</em>}
                          </p><p>
                            <ul>
                              {item.Modules && item.Modules.map((module) => {
                                return (
                                    <li>
                                      - {module.Name} ({module.ECTS} ECTS)
                                    </li>
                                )
                              })}
                            </ul>
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         {/* <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			  </div>

         </div> */}

      </section>
    );
  }
}