import React from 'react'
import { Box, Select, Text } from "@chakra-ui/react";
import styles from './SelectField.styles';

const SelectField = ({ label = '', slug = '', value = '', options = [], onChange = () => { } }) => {
  const onChangeValue = (e) => {
    onChange(slug, e.target.value);
  }

  return (
    <Box marginRight={2} flex={1}>
      <Text className={styles.label}>{label}</Text>
      <Select
        value={value}
        onChange={onChangeValue}
        style={styles.select}>
        <option value="" selected>Semua</option>
        {options.map((item) => (
          <option value={item?.value}>{item?.label}</option>
        ))}
      </Select>
    </Box>
  );
}

export default SelectField;