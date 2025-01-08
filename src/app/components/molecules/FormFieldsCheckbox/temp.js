import React, { memo } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { CheckboxFields } from '../../atoms';
import styles from './FormFieldsCheckbox.styles';
import { noop } from '@/app/utils/helpers';

const FormFieldsCheckbox = ({ data = [], form = [], onChangeCheckbox = noop }) => {
  return data.map((item, index) => (
    <Box marginY="2rem" key={index}>
      <Text style={styles.label}>{item.label}</Text>
      {item.children && item.children.length > 0 ? (
        item.children.map((row, index) => (
          <Flex align={'center'} mb={'1rem'} key={index}>
            <Box width={90}>
              <Text style={styles.labelChildren}>{row.label}</Text>
            </Box>
            <CheckboxFields
              key={index}
              data={row.checkbox}
              form={form}
              slugParent={item.slug}
              slug={row.slug}
              onChangeCheckbox={onChangeCheckbox}
            />
          </Flex>
        ))
      ) : (
        <CheckboxFields
          key={index}
          data={item.checkbox}
          slug={item.slug}
          form={form}
          onChangeCheckbox={onChangeCheckbox}
        />
      )}
    </Box>
  ));
};

export default memo(FormFieldsCheckbox);






