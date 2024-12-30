import React, { memo } from 'react'
import { Checkbox, Flex } from "@chakra-ui/react";
import { noop } from '@/app/utils/helpers';

const CheckboxFields = ({ data = [], slugParent = '', slug = '', onChangeCheckbox = noop }) => {
  const sx = {
    "& .chakra-checkbox__control[data-checked]": {
      bg: "teal.500",
    },
    "& .chakra-checkbox__control": {
      bg: "#ffffff",
    },
    "& .chakra-checkbox__label": {
      fontSize: "14px !important",
      fontWeight: "400 !important",
      lineHeight: "18px !important",
      textAlign: "left !important",
      color: "#404041 !important",
    },
  };

  const onChange = (label, value) => {
    onChangeCheckbox(slug, label, value, slugParent);
  };

  return (
    <Flex align='center'>
      {data.map((item) => (
        <Checkbox marginRight='2rem' sx={sx} onChange={(e) => onChange(item?.label?.toLowerCase(), e.target.checked)}>{item.label}</Checkbox>
      ))}
    </Flex>
  );
}

export default memo(CheckboxFields);