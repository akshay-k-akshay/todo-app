import React, { useState } from 'react';

import './App.css';

function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday</h2>
      </div>

      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="Add todo..." />
        <i className="fas fa-plus" onClick={() => setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])}></i>
      </div>
      <div className="todos">
        <div>
          <h3>Active</h3>
          {
            toDos.map((item) => {
              if (!item.status) {
                return (
                  <div className="todo" >
                    <div className="left">
                      <input onChange={(e) => {
                        setTodos(toDos.filter(x => {
                          if (x.id === item.id) {
                            x.status = e.target.checked
                          }
                          return x
                        }))
                      }} value={item.status} type="checkbox" name="" id="" />
                      <p>{item.text}</p>
                    </div>
                    <div className="right">
                      <i className="fas fa-times" onClick={(e) => {
                        setTodos(toDos.filter(x => {
                          if (x.id === item.id) {
                            return null
                          }
                          return x
                        }))
                      }}></i>
                    </div>
                  </div>
                )
              }
              return null
            })
          }
        </div>
        <div>
          <h3>completed</h3>
          {
            toDos.map((item) => {
              if (item.status) {
                return (
                  <div className="todo" >
                    <div className="left">
                      <input onChange={(e) => {
                        setTodos(toDos.filter(x => {
                          if (x.id === item.id) {
                            x.status = e.target.checked
                          }
                          return x
                        }))
                      }} value={item.status} checked type="checkbox" name="" id="" />
                      <p>{item.text}</p>
                    </div>
                    <div className="right">
                      <i className="fas fa-times" onClick={(e) => {
                        setTodos(toDos.filter(x => {
                          if (x.id === item.id) {
                            return null
                          }
                          return x
                        }))
                      }}></i>
                    </div>
                  </div>
                )
              }
              return null
            })
          }
        </div>
      </div >
    </div>
  );
}

export default App;