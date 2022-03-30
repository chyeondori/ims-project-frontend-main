import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // for selectable
import { formatDate } from "@fullcalendar/core";
import Modal from "../contents/Modal";
import styled from 'styled-components';


const Calendar = (props) => {
  const handleDateClick = (arg) => {
    console.log(arg);
  };

  // 클릭 시 이벤트 정보 받아오기
  const handleEventClick = (clickInfo) => {
    console.log(clickInfo.event.id);
  };

  // const [events, setEvents] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("dummy.alendar_list.json")
  //     .then((res) => setEvents(Res.data.calendarList))
  //     .catch((err) => console.log(err));
  // }, []);

  //날짜를 문자열로
  let str = formatDate("2022-03-16", {
    month: "long",
    year: "numeric",
    day: "numeric",
    timeZoneName: "long",
    timeZone: "KST",
    locale: "ko",
  });


  const [modal, setModal] = useState(false);

  return (
    // <div className="FullCalendar">
    <div>
      <Container>
        <FullCalendar
          headerToolbar={{
            left: "today",
            center: "title",
            right: "prev,next",
          }}
          plugins={[interactionPlugin, dayGridPlugin]}
          defaultView="dayGridMonth"
          // dateClick={this.handleDateClick}
          weekends={true}
          // navLinks={true} // 달력 날짜 클릭할 수 있게 해줌, 기본값 falase라 설정해줘야함. 날짜 클릭시 그날로 이동
          // navLinkDayClick={}
          selectable={true} // 달력에서 드래그로 날짜 선택
          // editable={true} // 달력 내에서 일정 옮기고 수정
          // droppable={true}
          locale="ko" //  한국어 설정
          dayMaxEvents={true} // 하나의 날짜에 이벤트 갯수 제한 오버하면 more로 표시
          // eventClick={() => this.setModalIsOpen(true)}
          // events={this.state.event}

          // dateClick={handleDateClick} // 요일클릭 이벤트
          dateClick={function () {
            alert("요일 클릭");
          }} // 요일클릭 이벤트
          // eventClick={handleEventClick} // 일정 클릭 이벤트
          eventClick={
            (arg) => handleEventClick(arg)
          } // 일정 클릭 이벤트
          events={[
            { title: "event1", regDate: "2022-03-12" },
            { title: "event2", regDate: "2022-03-14" },
          ]}
          select={function (arg) {
            const title = prompt("Event Title:");
            if (title) {
              Calendar.addEvent({
                title: title,
                start: arg.start,
                end: arg.end,
                allDay: arg.allDay,
              });
            }
            // Calendar.unselect()
          }}
        />
      </Container>

      {/* {modal ? <Modal onClose={setModal} /> : null} */}
    </div>
  );
};

const Container = styled.div`
  height: 90%;
  width : 90%;
    a {
      cursor: pointer;
    }

  .fc-col-header-cell {
    background-color: #757984;
    color: #fff;
    &.fc-day-sat {
      background-color: #2f74b5;
    }
    &.fc-day-sun {
      background-color: #ca5973;
    }
  }
`

//모달 열렸을때 #root 엘리먼트 숨겨줘야 하기 때문
// Modal.setAppElement('#root')

export default Calendar;
