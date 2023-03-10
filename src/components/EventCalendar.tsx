import { Calendar } from "antd";
import { Moment } from "moment";
import { FC } from "react";
import { ICalendar } from "../models/ICalendar";
import { formatDate } from "../utils/date";

interface EventCalendarProps {
  events: ICalendar[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
  function dateCellRender(value: Moment | any) {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(
      (ev) => ev.date === formatedDate
    );

    return (
      <div>
        {currentDayEvents.map((ev, index) => (
          <div key={index}>{ev.description}</div>
        ))}
      </div>
    );
  }

  return <Calendar dateCellRender={dateCellRender} />;
};

export default EventCalendar;
