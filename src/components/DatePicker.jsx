import React from "react"
import { DatePicker, Space } from 'antd'

class DatePickers extends React.Component {
  render () {
    const { handleDateChange } = this.props
    return (
      <Space direction="vertical">
        <DatePicker onChange={handleDateChange} />
      </Space>
    )
  }
}

export default DatePickers