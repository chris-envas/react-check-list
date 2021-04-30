import React from "react"
import PropTypes from "prop-types"
import { Radio } from 'antd'
import { UnorderedListOutlined, LineChartOutlined } from '@ant-design/icons'

const ViewTab = ({ mode, handleModeChange }) => {
  return (
    <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
      <Radio.Button value="list"><UnorderedListOutlined />列表模式</Radio.Button>
      <Radio.Button value="chart"><LineChartOutlined />图表模式</Radio.Button>
    </Radio.Group>
  )
}

ViewTab.propTypes = {
  mode: PropTypes.string.isRequired,
  handleModeChange: PropTypes.func.isRequired
}

export default ViewTab
