import { Row, Col, Switch } from 'antd'
import React from 'react'
import SeniorCare_room from '../images/SeniorCare_room.png';
import { CheckCircleTwoTone } from '@ant-design/icons';
import './Project_Task.scss';
const Project_Task = () => {
  return (
    <Row>
        <Col span={24}>
        <div className='SeniorCare_Rooms'>
            <div className='SeniorCareRooms_Img'>
                <img src={SeniorCare_room} alt='no-img'/>
            </div>
            <div className='SeniorCareRooms_body'>
                <div  className='SCRoom_title'>
                    <h1>Book Senior Care Room</h1>
                </div>
                <div className='SCRoom_descrip'>
                    <h2>"Find comfortable stays"</h2>
                </div>
                <div className='SCRoom_para'>
                    <h2>discover a variety of senior care room's tailored to your loved ones' needs. choose a cozy and safe environment for their well-being</h2>
                </div>
                <div className='SCRoom_services'>
                    <h1><CheckCircleTwoTone /> Adult Day care</h1>
                    <h1><CheckCircleTwoTone /> assisted living</h1>
                    <h1><CheckCircleTwoTone /> Board & Care</h1>
                </div>
            </div>
        </div>
        </Col>
    </Row>
  )
}

export default Project_Task;
