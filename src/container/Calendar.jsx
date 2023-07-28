import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 20px;
`;

const TodayText = styled.p`
  font-size: 16px;
  margin: 0;
`;

const ToggleButton = styled.button`
  background-color: #000000;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  font-size: 16px;
  margin-left: 10px; /* Add margin-left to position the button to the right of the date */
`;

const CalendarWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 50%; /* 중앙으로 위치 */
  transform: translateX(-50%);
  margin-top: 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  z-index: 3;
`;

export const MyCalendar = ({ onChange, date }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar((prevShowCalendar) => !prevShowCalendar);
  };

  const formatDateWithWeekday = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleString("ko-KR", options);
  };

  const prevLabel = ({ date }) => {
    const formattedDate = formatDateWithWeekday(date);
    return formattedDate; // 일요일과 일 글자를 모두 제거
  };

  return (
    <>
      <Container>
        <ButtonWrapper>
          <TodayText>{formatDateWithWeekday(date)}</TodayText>
          <ToggleButton onClick={toggleCalendar}>날짜 변경</ToggleButton>
          {showCalendar && (
            <CalendarWrapper>
              <Calendar
                onChange={onChange}
                value={date}
                prevLabel={prevLabel}
              />
            </CalendarWrapper>
          )}
        </ButtonWrapper>
      </Container>
    </>
  );
};
