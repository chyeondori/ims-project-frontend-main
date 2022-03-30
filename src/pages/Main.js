// import React, { Component, useEffect } from 'react'
// import { Link } from "react-router-dom";
// import axios from 'axios';
// // import CalendarContainer from "../containers/CalendarContainer";
// import CalendarContainer from '../containers/CalendarContainer/CalendarContainer';
// import { Layout, Menu, Breadcrumb } from "antd";
// import {
//   UserOutlined,
//   LaptopOutlined,
//   NotificationOutlined,
// } from "@ant-design/icons";
// // import styled from "styled-components";

// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;

// const Main = () => {

//     return (
//       <div className="MainPage">
//         <Layout>
//           <Header className="header">
//             <div className="logo" />
  
//             <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
//               <Menu.Item key="1">
//                 <Link to="/">홈</Link>
//               </Menu.Item>
  
//               <Menu.Item key="2">
//                 <Link to="/archive">자료실</Link>
//               </Menu.Item>
  
//               <Menu.Item key="3">
//                 <Link to="/attendance">출석부</Link>
//               </Menu.Item>
  
//               <Menu.Item key="4">
//                 <Link to="/managerPage">관리자</Link>
//               </Menu.Item>
//             </Menu>
//           </Header>
  
//           <Layout>
//             <Sider width={200} className="site-layout-background">

//               <Content
//                 className="site-layout-background"
//                 style={{
//                   padding: 24,
//                   margin: 0,
//                   minHeight: 280,
//                 }}
//               > 
//                 <CalendarContainer />
//               </Content>
//             </Sider>
//           </Layout>
//         </Layout>
        
//       </div>
//     );
//   }

//   export default Main;

// // function App() {
// //   return (
// //     <div className="App">
// //       <Header />
// //       <Nav />
// //       <BrowserRouter>
// //         <Routes>
// //           <Route path="/" element={<Main />}></Route>
// //           <Route path="/signup" element={<SignUp />}></Route>
// //           <Route path="/signin" element={<SignIn />}></Route>
// //           <Route path="/management" element={<관리자 />}></Route>
// //           <Route path="/board/list" element={<자료실 />}></Route>
// //           <Route path="/attendence/list" element={<출석부 />}></Route>
// //         </Routes>
// //       </BrowserRouter>
// //     </div>
// //   );
