import React from 'react'

export const RecentActivities = () => {
  return (
    <div className="hl_recent-activities">
    <div className="hl_recent-activities--inner">
      <ul className="hl_recent-activities--list list-unstyled">
        <li className="hl_recent-activities--item --notification">
          <div className="avatar --sm">
            <div className="avatar_img --blue">
              BM
            </div>
          </div>
          <p><strong>Bruce Mann</strong> sent a Review Request to Amanda Nunes.</p>
          <p className="location">Nike Store, 49 Garnet Stream, Baja, CA</p>
          <p className="time-date">10 min ago</p>
        </li>
        <li className="hl_recent-activities--item --notification">
          <div className="avatar --sm">
            <div className="avatar_img">
              <img src="./img/img-avatar-sample4.png" alt="Avatar Name"/>
            </div>
          </div>
          <p><strong>Henry J.</strong> sent a Review Request to Amanda Nunes.</p>
          <p className="location">Nike Store, 49 Garnet Stream, Baja, CA</p>
          <p className="time-date">10 min ago</p>
        </li>
        <li className="hl_recent-activities--item --notification">
          <span className="recent-activities--icon --rating">
          <i className="icon icon-star-filled"></i>
        </span>
          <p>Our Average Rating went up!</p>
          <p className="location">Nike Store, 49 Garnet Stream, Baja, CA</p>
          <p className="time-date">10 min ago</p>
        </li>
        <li className="hl_recent-activities--item">
          <span className="recent-activities--icon --reviews">
          <i className="icon icon-send"></i>
        </span>
          <p>Milestone of 5,000 team ReviewRequestes hit!</p>
          <p className="location">Nike Store, 49 Garnet Stream, Baja, CA</p>
          <p className="time-date">10 min ago</p>
        </li>
        <li className="hl_recent-activities--item">
          <div className="avatar --sm">
            <div className="avatar_img --orange">
              GT
            </div>
          </div>
          <p><strong>Gerald Terry</strong> sent a Review Request to Amanda Nunes.</p>
          <p className="location">Nike Store, 49 Garnet Stream, Baja, CA</p>
          <p className="time-date">10 min ago</p>
        </li>
        <li className="hl_recent-activities--item">
          <div className="avatar --sm">
            <div className="avatar_img --green">
              RF
            </div>
          </div>
          <p><strong>Ricardo Foster</strong> sent a Review Request to Amanda Nunes.</p>
          <p className="location">Nike Store, 49 Garnet Stream, Baja, CA</p>
          <p className="time-date">10 min ago</p>
        </li>
        <li className="hl_recent-activities--item">
          <div className="avatar --sm">
            <div className="avatar_img">
              <img src="./img/img-avatar-sample2.png" alt="Avatar Name"/>
            </div>
          </div>
          <p><strong>Samantha Irving</strong> sent a Review Request to Amanda Nunes.</p>
          <p className="location">Nike Store, 49 Garnet Stream, Baja, CA</p>
          <p className="time-date">10 min ago</p>
        </li>
        <li className="hl_recent-activities--item">
          <div className="avatar --sm">
            <div className="avatar_img">
              <img src="./img/img-avatar-sample3.png" alt="Avatar Name"/>
            </div>
          </div>
          <p><strong>Cecelia Atkins</strong> sent a Review Request to Amanda Nunes.</p>
          <p className="location">Nike Store, 49 Garnet Stream, Baja, CA</p>
          <p className="time-date">10 min ago</p>
        </li>
        <li className="hl_recent-activities--item">
          <div className="avatar --sm">
            <div className="avatar_img --purple">
              NP
            </div>
          </div>
          <p><strong>Norman E. Parque</strong> sent a Review Request to Amanda Nunes.</p>
          <p className="location">Nike Store, 49 Garnet Stream, Baja, CA</p>
          <p className="time-date">10 min ago</p>
        </li>
        <li className="hl_recent-activities--item">
          <a href="#">Load More</a>
        </li>
      </ul>
    </div>
  </div>
  )
}
