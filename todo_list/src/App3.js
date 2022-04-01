import React, { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
    // filter start
    const [filter, setFilter] = useState('All');
    const FILTER_MAP = {
      All: () => true,
      Active: task => !task.completed,
      Completed: task => task.completed
    };
    const FILTER_NAMES = Object.keys(FILTER_MAP);

    const filterList = FILTER_NAMES.map(name => (
      <FilterButton
        key={name}
        name={name}
        isPressed={name === filter}
        setFilter={setFilter}
      />
    ));
    // filter end 

    // Todo components start
    const [tasks, setTasks] = useState(props.tasks);
    const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
        <Todo
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
        />
    ));
    // Todo components end 
  
    const tasksNoun = taskList.length > 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining~!!`;    

    function addTask(name) {
        const newTask = { id: "todo-" + nanoid(), name: name, completed: false };

        setTasks([...tasks, newTask]);
    }      

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
            // use object spread to make a new object
            // whose `completed` prop has been inverted
            return {...task, completed: !task.completed}
            }
            return task;
        });

        setTasks(updatedTasks);
    }
    
    function deleteTask(id) {     //해당 선택한 건을 제외하기 위해
      const remainingTasks = tasks.filter(task => id !== task.id);
      setTasks(remainingTasks);
    }  

    function editTask(id, newName) {
      const editedTaskList = tasks.map(task => {
      // if this task has the same ID as the edited task
        if (id === task.id) {
          //
          return {...task, name: newName}   // name 값을 변경 처리
        }
        return task;
      });
      setTasks(editedTaskList);
    }

    // cursor focus event // start
    const listHeadingRef = useRef(null);    

    function usePrevious(value) {
      const ref = useRef();
      useEffect(() => {
        ref.current = value;
      });
      return ref.current;
    }

    const prevTaskLength = usePrevious(tasks.length);

    useEffect(() => {
      if (tasks.length - prevTaskLength === -1) {
        listHeadingRef.current.focus();
      }
    }, [tasks.length, prevTaskLength]);
    // cursor focus event // end 
          
    return (        
      <div className="todoapp stack-large">
        <button type="button" onClick={() => alert("hi!")}>Say hi!</button>

        <h1>TodoMatic</h1>
        <Form addTask={addTask}/>
        <div className="filters btn-group stack-exception">
          {filterList}
        </div>
        
        <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>{headingText}</h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    );
  }
  
  export default App;
  //# 파일들을 삭제
  //rm -- App.test.js App.css logo.svg serviceWorker.js setupTests.js