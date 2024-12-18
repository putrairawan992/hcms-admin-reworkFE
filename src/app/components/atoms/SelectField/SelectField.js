import React, { memo } from 'react'
import { Box, Select, Text } from "@chakra-ui/react";
import styles from './SelectField.styles';

const SelectField = ({ label = '', slug = '', value = '', options = [], onChange = () => { }, marginRight = 2, disabled = false, withOptionDefault = true }) => {
  const onChangeValue = (e) => {
    onChange(slug, e.target.value);
  }

  return (
    <Box marginRight={marginRight} flex={1}>
      <Text style={styles.label}>{label}</Text>
      <Select
        value={value}
        onChange={onChangeValue}
        disabled={disabled}
        style={styles.select}>
        {withOptionDefault && (
          <option value="" selected>Semua</option>
        )}
        {options.map((item) => (
          <option value={item?.value}>{item?.label}</option>
        ))}
      </Select>
    </Box>
  );
}

export default memo(SelectField);