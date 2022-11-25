import { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {

const [todos, setTodos] =  useState([])
const todoNameRef = useRef()
const todoDayRef = useRef()
const todoMonthRef = useRef()
const todoYearRef = useRef()

useEffect(() => {
  const heading = document.getElementById("headerContainer")
  const congrat = document.querySelector("h2")
  if (todos.length === 0) {
    congrat.style.display = "block"
    heading.style.display = "none"
  }
  else {
    congrat.style.display = "none"
    heading.style.display = "flex"
  }
}, [todos])

useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  setTodos(prevTodos => [...prevTodos, ...storedTodos])
}, [])

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos])

function toggleTodo(id) {
  const newTodos = [...todos]
  const todo = newTodos.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTodos)
}

function handleAddTodo(e) {
  const name = todoNameRef.current.value
  const day = todoDayRef.current.value
  const month = todoMonthRef.current.value
  const year = todoYearRef.current.value
  if (name === "" || day === "Day" || month === "Month" || year === "Year") {
    return alert("Item name or Expected completion date is missing!")
  }
  setTodos(prevTodos => {
    return [...prevTodos, {id: uuidv4(), name: name, complete: false, day: day, month: month, year: year}]
  })
  todoNameRef.current.value = null;
  todoDayRef.current.value = "Day";
  todoMonthRef.current.value = "Month";
  todoYearRef.current.value = "Year";
}

function handleClearTodo() {
  const newTodos = todos.filter(todo => !todo.complete)
  const completedTodos = todos.filter(todo => todo.complete)
  if (completedTodos.length === 0) alert("You have no completed item. Let's get to work!")
  setTodos(newTodos)
}

  return (
    <div id="body">
      <header>
        <h1>To Do List</h1>
      </header>
      <form id="frame">
        <input ref={todoNameRef} id="input" className="no-outline" type="text" placeholder="e.g. Laundry" autoFocus/>
          <select ref={todoDayRef} defaultValue={"Day"} id="day" className="no-outline" name="day" required>
            <option hidden disabled>Day</option>
            <option value="Any">Any</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>

          <select ref={todoMonthRef} defaultValue={"Month"} id="month" className="no-outline" name="month" required>
            <option hidden disabled>Month</option>
            <option value="Any">Any</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
          <select ref={todoYearRef} defaultValue={"Year"} id="year" className="no-outline" name="year" required>
            <option hidden disabled>Year</option>
            <option value="Any">Any</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2030+">2030+</option>
          </select>
      </form>
      <div id="buttons">
        <button onClick={handleAddTodo}>Add new item</button>
        <button onClick={handleClearTodo}>Clear Completed Task</button>
      </div>
      <div id="itemList">
        <div id="headerContainer">
          <div id="nameHeader">Item Name</div>
          <div id="deadlineHeader">Deadline(DD/MM/YYYY)</div>
        </div>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
      </div>
      <div id="numberOfThings">You have {todos.filter(todo => !todo.complete).length} things left to do</div>
      <h2>Congratulation!</h2>
      <br />
      <footer>By Ronald Yun</footer>
    </div>
  )
}

export default App;
