import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import CalendarContainer from "../containers/CalendarContainer";
import Calendar from "../src/components/contents/Calendar";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import ModalContainer from "./components/contents/ModalContainer";
// import styled from "styled-components";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const App = () => {
  

    return (
      <div className="MainPage">
        <Layout>
          <Header className="header">
            <div className="logo" />

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">
                <Link to="/">홈</Link>
              </Menu.Item>

              <Menu.Item key="2">
                <Link to="/archive">자료실</Link>
              </Menu.Item>

              <Menu.Item key="3">
                <Link to="/attendance">출석부</Link>
              </Menu.Item>

              <Menu.Item key="4">
                <Link to="/managerPage">관리자</Link>
              </Menu.Item>
            </Menu>
          </Header>

          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Calendar />
              <BoardList />
            </Content>
            <ModalContainer />

            {/* <>
              <button
                type="button"
                class="btn btn-secondary"
                onClick={modalClose}
              >
                일정 추가
              </button>
              {modalOpen && <Modal modalClose={modalClose}></Modal>}
            </> */}

          </Layout>
        </Layout>
      </div>
    );
  };


export default App;

// import React ,{Component} from "react";
// import { Route, Routes } from "react-router-dom";
// import Main from "./pages/Main";

// class App extends Component {
//   render() {
//     return (
//       <>
//         {/* <Routes>
//           <Route path="/" element={<Main />} />
//         </Routes> */}
//         <Main />

//       </>
//     );
//   }
// }

// export default App
