import React, { useState, useEffect,useCallback } from 'react';
import { Drawer, List, Avatar, Button, Tag, Table, Typography } from 'antd';
import { DrawerProps } from 'antd/es/drawer'

import Score from '../Score/Score'
import Checklist from 'components/Checklist/Checklist';
import { useFirebase } from 'components/Firebase/FirebaseContext'
import 'components/Projects/style.scss'


interface IProps {
  checklist: {
      key: number
      text: string
  }
}

interface IProjects {
  id: string
  projectTitle: string
  endDate: string
  projectDescription: string
  score: number
  startDate: string
}


const columns = [
  {
    title: 'Project Title',
    dataIndex: 'projectTitle',
  },

];

const { Title, Text } = Typography

const ProjectItem: React.FC = () => {
  const firebase = useFirebase();
  const [projectsListValue, setprojectsListValue] = useState([{
    id: '0', projectTitle: '0', endDate: 'CId',
    projectDescription: 'contentId', score: 0, startDate: 'contentId', tags: [],checklist: []
  }])
  const [value, setValue] = useState(false)
  const [checklistPassValue, setchecklistPassValue] = useState([{}])

  const showDrawer = (value:Array<Object>) => {
    
    // const data = value.map((value:any,index:any) => ( 
    //   console.log(value.key),
    //   console.log(value.text),
    //   setchecklistPassValue(value.text)
    //   ));
    setValue(true)
  };
  const onClose = () => {
    setValue(false)
  };
  useEffect(() => {
    const fetchData = async () => {
      firebase.projects().once('value', (snapshot: any) => {
        const data = snapshot.val();
        setprojectsListValue(data);
      });
    }
    fetchData();
  });

  return (
    <>
      <h1>Project List </h1>

      <div className={"container-table100"}>
        <div className={"wrap-table100"}>
          <div className={"table100 ver1 m-b-110"}>
            <table >
              <thead>
                <tr className={"row100 head"}>
                  <th className={"cell100 column1"}>Project Title</th>
                  <th className={"cell100 column2"}>Project Description</th>
                  <th className={"cell100 column1"}>Project Start Date</th>
                  <th className={"cell100 column1"}>Project End Date</th>
                  <th className={"cell100 column1"}>Project Tags </th>
                  <th className={"cell100 column1"}>Project Score </th>
                </tr>
              </thead>
              {Object.keys(projectsListValue).map((keyName: any, index) => {
                return (
                  <tbody>
                    <tr className={"row100 body"} key={projectsListValue[keyName].id} >
                      <td className={"cell100 column1"}> <Title level={4}> {projectsListValue[keyName].projectTitle} </Title> </td>
                      <td className={"cell100 column2"}> <text> {projectsListValue[keyName].projectTitle} </text> </td>
                      <td className={"cell100 column3"}> <text> {projectsListValue[keyName].startDate} </text> </td>
                      <td className={"cell100 column4"} > <text> {projectsListValue[keyName].endDate} </text> </td>
                      <td className={"cell100 column5"} > <text> {projectsListValue[keyName].tags} </text> </td>
                      <td className={"cell100 column5"} > <Button type="primary"   onClick={() => {showDrawer ( projectsListValue[keyName].checklist ) } } > {projectsListValue[keyName].score} </Button> </td>
                      {/* <td className={"cell100 column5"} > <Button type="primary"   onClick={myHandleClick} > {projectsListValue[keyName].score} </Button> </td> */}
                    </tr>
                  </tbody>
                )
              })
              }

            </table>
          </div>
        </div>
      </div>


      <Drawer
        width={640}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={value}
      >
        {/* here's gose the joel-checklist todos  */}

        <Checklist />
      </Drawer>
    </>


  )


}

export default ProjectItem;
