import React from 'react'

const SelectStatus = ({ filter, setFilter }) => {
    const handleSelect = (e) => {
        setFilter(e.target.value)
    }

  return (
      <div>
          <select className="select" onChange={handleSelect} value={filter} name="status">
              <option value="all" selected>All</option>
              <option value="uncompleted">Uncompleted</option>
              <option value="completed">Completed</option>
          </select>
      </div>
  )
}

export default SelectStatus