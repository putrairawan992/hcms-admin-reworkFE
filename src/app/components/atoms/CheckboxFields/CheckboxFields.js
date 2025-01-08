import React, { useState, memo } from 'react';
import { Checkbox, Flex } from '@chakra-ui/react';
import styles from './CheckboxFields.styles';
import { noop } from '@/app/utils/helpers';

const CheckboxFields = ({ data = [], form = [], slugParent = '', slug = '', onChangeCheckbox = noop }) => {
  const onChange = (label, value) => {
    onChangeCheckbox(slug, label, value, slugParent);
  };

  return (
    <Flex align="center">
      {data.map((item, index) => (
        <Checkbox
          marginRight="2rem"
          key={index}
          isChecked={item?.value}
          value={item?.value}
          sx={styles.checkbox}
          onChange={(e) =>
            onChange(item?.label?.toLowerCase(), e.target.checked)
          }>
          {item.label}
        </Checkbox>
      ))}
    </Flex>
  );
};

export default memo(CheckboxFields);
