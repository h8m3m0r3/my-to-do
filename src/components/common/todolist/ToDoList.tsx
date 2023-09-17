import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import "./ToDoList.scss"
import { ToDoListType } from 'types';


interface IToDoList {
    listFilter: string,
    toDoList: ToDoListType[],
    handleCompleteTask: (number: number) => void,
    handleDeleteTask: (number: number) => void,
}

const ToDoList = ({listFilter, toDoList, handleCompleteTask, handleDeleteTask}:IToDoList ) => {
    return (
        <div className="listItem">
            {listFilter === "all" ? toDoList.map(item => {
                return (
                    <div className={`${item.active ? 'toDoListItem' : 'toDoListItemCompleted'}`} key={item.id} >
                        {item.active ?
                            <button onClick={() => handleCompleteTask(item.id)} className='completeTaskButton'>

                            </button>
                            :
                            <button className='completedTaskButton'>
                                <CheckOutlined />
                            </button>}
                        <p>{item.text}</p>
                        <button onClick={() => handleDeleteTask(item.id)} className='deleteTaskButton'>
                            -
                        </button>
                    </div>
                )
            }) : null}
            {listFilter === "active" ? toDoList.filter(item => item.active).map(item => {
                return (
                    <div className='toDoListItem' key={item.id} >
                        <button onClick={() => handleCompleteTask(item.id)} className='completeTaskButton'>

                        </button>
                        <p>{item.text}</p>
                        <button onClick={() => handleDeleteTask(item.id)} className='deleteTaskButton'>
                            -
                        </button>
                    </div>
                )
            }) : null}
            {listFilter === "completed" ? toDoList.filter(item => !item.active).map(item => {
                return (
                    <div className='toDoListItemCompleted' key={item.id} >
                        <button className='completedTaskButton'>
                            <CheckOutlined />
                        </button>
                        <p>{item.text}</p>
                        <button onClick={() => handleDeleteTask(item.id)} className='deleteTaskButton'>
                            -
                        </button>
                    </div>
                )
            }) : null}
        </div>
    );
};

export { ToDoList };