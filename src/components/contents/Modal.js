import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdClear } from "react-icons/md";
import { Input, Text, Button } from "../elements/index";
// import { useSelector ,useDispatch } from 'react-redux';
// import { actionCreators as scheduleActions} from '../../redux/modules/schedule';
import "../contents/Modal.css";
import "../elements/Button.js"

const Modal = React.memo((props) => {
//     const dispatch = useDispatch();
    const { visible, _closeModal, modalType } = props;
    const [contents, setContents] = useState('');
    const modal_scheduleInfo = useSelector(state => state.schedule.modal_scheduleInfo);
    let dateInfo = React.useRef();
    useEffect(() => {
        setContents(modal_scheduleInfo.contents);
        dateInfo.current.value = `${modal_scheduleInfo.date_info}T${modal_scheduleInfo.time_info}`;
      }, [modal_scheduleInfo])

      const changeContent = (e) => {
        setContents(e.target.value);
      }

      const addSchedule = (type) => {
        const dateValue = dateInfo.current.value;

        if (contents === '') {
          window.alert('일정을 입력해주세요!');
          return
        }
        if (dateValue === '') {
          window.alert('일시를 지정해주세요!');
          return
        }
        const dateArr = dateValue.split('T');
        const scheduleInfo = {
          'date': dateArr[0],
          'time_info': dateArr[1],
          'contents': contents,
          'finished': false
        }
        if (type === 'add') {
          dispatch(scheduleActions.addScheduleFB(scheduleInfo));
        } else {
          dispatch(scheduleActions.updateScheduleFB(scheduleInfo, modal_scheduleInfo.doc_id))
        }
        _closeModal();
      }

      const deleteSchedule = () => {
        const deleteYn = window.confirm('정말로 삭제하시겠습니까?');
        if (deleteYn) {
          dispatch(scheduleActions.deleteScheduleFB(modal_scheduleInfo.doc_id))
        }
        _closeModal();
      }

      const scheduleConfirm = () => {
        let toggleYn = modal_scheduleInfo.finished ? false : true
        dispatch(scheduleActions.updateConfirmFB(modal_scheduleInfo.doc_id, toggleYn));
      }

      <>
      <ModalContainer visible={visible}>
        <ModalOveraly>
          <ModalInner>
            <ContentsArea>
              {modalType && modalType === 'modify'
                ? (
                  <ScheduleConfirmBtn>
                  <Button
                    width="35%"
                    text={modal_scheduleInfo.finished? '완료': '미완료'}
                    bg={modal_scheduleInfo.finished? '#757984': '#3788d9'}
                    _onClick={() => scheduleConfirm()}
                  />
                </ScheduleConfirmBtn>
                )
                : ''
              }
              <ClearButton onClick={_closeModal}>
                <MdClear />
              </ClearButton>

              <Text>일정 내용</Text>
              <Input
                value={contents}
                _onChange={changeContent}
                placeholder='일정을 입력해주세요.'
                multiline />
            </ContentsArea>


            <ContentsArea>
              <Text>일시</Text>
              <input type="datetime-local" ref={dateInfo} style={{padding:'6px'}}/>
            </ContentsArea>
            <ContentsArea>
              {modalType && modalType === 'add'
                ?
                (
                  <ButtonArea>
                    <Button
                      width="35%"
                      text="취소"
                      color="#212121"
                      bg="#fff"
                      margin="0px 20px 0px 0px"
                      _onClick={_closeModal}
                    />
                    <Button
                      width="35%"
                      text="등록"
                      _onClick={() => addSchedule('add')} />
                  </ButtonArea>
                )
                :
                (
                  <ButtonArea>
                    <Button
                      width="35%"
                      text="수정"
                      bg="#212121"
                      margin="0px 20px 0px 0px"
                      _onClick={() => addSchedule('modify')}
                    />
                    <Button
                      width="35%"
                      text="삭제"
                      bg="#c34d68"
                      _onClick={() => deleteSchedule()} />
                  </ButtonArea>
                )
              }

            </ContentsArea>
          </ModalInner>
        </ModalOveraly>
      </ModalContainer>
    </>

});

Modal.defaultProps = {
  visible: false,
  modalType : 'add',
  _closeModal: () => {},
}

const ModalContainer = styled.div`
   display: ${(props) => (props.visible ? "block" : "none")};
`

const ModalOveraly = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 15px;
  z-index: 2;
`

const ModalInner = styled.div`
  width: 60vw;
  height: 50vh;
  border-radius: 12px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, .3);
  background-color: #fff;
  overflow-y:auto;
  position: relative;
  @media screen and (max-width: 496px){
    width: 90%;
  }
`

const ContentsArea = styled.div`
  padding: 0 30px;
  margin-top: 60px;
  @media screen and (max-width: 496px){
    margin-top: 30px;
  }
`

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

`

const ClearButton = styled.div`
  width: 45px;
  height: 45px;
  font-size: 30px;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
`

const ScheduleConfirmBtn = styled.div`
  position: absolute;
  width: 200px;
  cursor: pointer;
  top: 10px;
`


// // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
// // const { open, close, header } = props;
// const Modal = (props) => {
//   const { open, close, header } = props;
//   return (
//     // 모달이 열릴때 openModal 클래스가 생성된다.
//     <div className={open ? "openModal modal" : "modal"}>
//       {open ? (
//         <section>
//           <header>
//             {header}
//             {/* <button className="close" onClick={close}>
//               &times;
//             </button> */}
//           </header>

//           {/* <main>{props.children}</main> */}
//           <main>좀 돼라</main>

//           <footer>
//             <button className="close" onClick={close}>
//               close
//             </button>
//           </footer>
//         </section>
//       ) : null}
//     </div>
//   );
// };

// const Modal = ({modalClose}) => {
//     return (
//         <div className="modal__container">
//             <div className="modal">
//                 <button className="modal__button" onClick={modalClose}> Modal Close</button>
//             </div>
//         </div>
//     )
// }

export default Modal
