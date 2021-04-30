import React from "react"
import PropTypes from "prop-types"
import {
  Button, List, Avatar
} from "antd"
import { FormOutlined, DeleteOutlined } from '@ant-design/icons'

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
 
  return (
     <List
      size="large"
      bordered
      dataSource={items}
      renderItem={item => (
        <List.Item>
            <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
          <div>
            <Button
              title="编辑"
              onClick={() => {
                onModifyItem(item)
              }}
            >
              <FormOutlined />
            </Button>
            <Button
              title="删除"
              danger
              onClick={() => {
                onDeleteItem(item)
            }}
            >
              <DeleteOutlined />
            </Button>
          </div>
        </List.Item>
      )}
    />
  )
}

PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired
} 

PriceList.defaultProps = {}

export default PriceList