import React, { memo } from 'react';
import { Box, Select, Text } from '@chakra-ui/react';
import styles from './SelectField.styles';
import './style.css';

const SelectField = ({
  label = '',
  slug = '',
  value = '',
  options = [],
  onChange = () => { },
  marginRight = 2,
  disabled = false,
  placeholder = 'Semua',
}) => {
  const onChangeValue = (e) => {
    onChange(slug, e.target.value);
  };

  return (
    <Box marginRight={marginRight} flex={1}>
      {label !== '' && (
        <Text style={styles.label} mb={2}>
          {label}
        </Text>
      )}
      <Select
        value={value}
        onChange={onChangeValue}
        disabled={disabled}
        iconSize="18px"
        placeholder={placeholder}
        isDisabledPlaceholder={true}
        style={styles.select(value)}>
        {options.map((item, index) => (
          <option value={item?.value} key={index}>{item?.label}</option>
        ))}
      </Select>
    </Box>
  );
};

export default memo(SelectField);
