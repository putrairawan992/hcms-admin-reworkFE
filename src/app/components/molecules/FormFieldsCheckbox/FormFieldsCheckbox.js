import React, { memo } from 'react';
import { Box, Checkbox, Flex, Text } from '@chakra-ui/react';
import styles from './FormFieldsCheckbox.styles';
import { noop } from '@/app/utils/helpers';

const FormFieldsCheckbox = ({ data = [], onChangeCheckbox = noop }) => {

  const onChange = (slug, label, value, slugParent) => {
    onChangeCheckbox(slug, label, value, slugParent);
  };

  return data?.map((item, index) => {
    return (
      <Box marginY="2rem" key={index}>
        <Text style={styles.label}>{item?.label}</Text>
        {item.children && item.children.length > 0 ?
          (item.children.map((row, index) => (
            <Flex align={'center'} mb={'1rem'} key={index}>
              <Box width={90}>
                <Text style={styles.labelChildren}>{row.label}</Text>
              </Box>
              {row.checkbox?.map((e, index) => {
                return (
                  <Checkbox
                    onChange={(event) =>
                      onChange(row?.slug, e?.label?.toLowerCase(), event.target.checked, item?.slug)
                    }
                    isChecked={e.value}
                    marginRight="2rem" key={index}>
                    {e.label}
                  </Checkbox>
                )
              })}
            </Flex>
          )))
          :
          (item.checkbox?.map((e, index) => {
            return (
              <Checkbox
                isChecked={e.value}
                onChange={(event) =>
                  onChange(e?.slug, e?.label?.toLowerCase(), event.target.checked, item?.slug)
                }
                marginRight="2rem" key={index} mb={'1rem'}>
                {e.label}
              </Checkbox>
            )
          }))
        }
      </Box>
    );
  })
};

export default memo(FormFieldsCheckbox);
