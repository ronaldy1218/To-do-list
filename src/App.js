import { useState, useRef } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {

const [todos, setTodos] =  useState(["Todo1", "todo2"])
const todoNameRef = useRef()
const todoDayRef = useRef()
const todoMonthRef = useRef()
const todoYearRef = useRef()

function handleAddTodo(e) {
  const name = todoNameRef.current.value
  const day = todoDayRef.current.value
  const month = todoMonthRef.current.value
  const year = todoYearRef.current.value
  if (name === "" || day === "Day" || month === "Month" || year === "Year") {
    return alert("Item name or Expected completion date is missing!")
  }
  console.log(name, day, month, year)
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
      <div>
        <button onClick={handleAddTodo}>Add new item</button>
        <button>Clear Completed Task</button>
      </div>
      <TodoList todos={todos}/>
      <div>You have 0 things left to do</div>
      <br></br>
      <footer>By Ronald Yun</footer>
    </div>
  )
}


export default App;
