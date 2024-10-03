import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};
const onOk = (value) => {
  console.log('onOk: ', value);
};
const RangeDate = () => (
  <Space direction="vertical" size={12}>
    <RangePicker
      
      format="DD-MM-YYYY"
      onChange={onChange}
      onOk={onOk}
    />
  </Space>
);
export default RangeDate;