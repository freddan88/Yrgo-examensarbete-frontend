import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const FilterCalendar = (props) => {

  const [ publishedPerMonthTracker, setPublishedPerMonthTracker ] = useState([])

  useEffect(() => {
    publishedDates(props.objects);
  },[props]);

  const publishedDates = (objects) => {

    const localTrackingArray = [
      {'month': '01','short': 'Jan','published': 0},
      {'month': '02','short': 'Feb','published': 0},
      {'month': '03','short': 'Mar','published': 0},
      {'month': '04','short': 'Apr','published': 0},
      {'month': '05','short': 'Maj','published': 0},
      {'month': '06','short': 'Jun','published': 0},
      {'month': '07','short': 'Jul','published': 0},
      {'month': '08','short': 'Aug','published': 0},
      {'month': '09','short': 'Sep','published': 0},
      {'month': '10','short': 'Okt','published': 0},
      {'month': '11','short': 'Nov','published': 0},
      {'month': '12','short': 'Dec','published': 0},
    ];

    objects.forEach(object => {
      const objremote = (objects.find(obj => obj.month === object.month));
      const objlocal = (localTrackingArray.find(obj => obj.month === objremote.month));
      objlocal.published = objremote.published;
    });

    setPublishedPerMonthTracker(localTrackingArray);
  }

  return (
    <div className="calendar">
      {publishedPerMonthTracker.map((month, index) => (
        <div key={index} className="calendar__placeholder">
          <strong>{month.short}</strong>
          <div className="month">
          <small>{month.published}</small>
            <div style={{height: month.published}} className="indicator"/>
          </div>
        </div>
      ))}
    </div>
  );
};

FilterCalendar.propTypes = {
  objects: PropTypes.array,
};

export default FilterCalendar;