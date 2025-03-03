import React, { memo } from 'react';
import { Box, Checkbox, Flex, Text, Grid } from '@chakra-ui/react';
import styles from './FormFieldsCheckbox.styles';
import { noop } from '@/app/utils/helpers';

const FormFieldsCheckbox = ({ data = [], onChangeCheckbox = noop }) => {
  // Handler for checkbox changes
  const onChange = (slug, valueKey, value, sectionLabel = null) => {
    onChangeCheckbox(slug, valueKey, value, sectionLabel);
  };

  return data?.map((item, index) => {
    return (
      <Box marginY="2rem" key={index}>
        <Text style={styles.label}>{item?.label}</Text>

        {/* Handle direct checkboxes (no sections) */}
        {item.checkbox && (
          <div className="grid grid-cols-5">
            {item.checkbox.map((checkboxItem, cbIndex) => (
              <Checkbox
                key={cbIndex}
                isChecked={checkboxItem.value}
                onChange={(event) =>
                  onChange(
                    item.slug,
                    checkboxItem.value_key,
                    event.target.checked
                  )
                }
                marginRight="2rem"
                marginBottom="1rem">
                {checkboxItem.label}
              </Checkbox>
            ))}
          </div>
        )}

        {/* Handle sections with nested checkboxes */}
        {item.sections &&
          item.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="grid grid-cols-4">
              <Text style={styles.labelChildren}>{section.label}</Text>

              {section.checkbox &&
                section.checkbox.map((checkboxItem, cbIndex) => (
                  <Checkbox
                    key={cbIndex}
                    isChecked={checkboxItem.value}
                    onChange={(event) =>
                      onChange(
                        item.slug,
                        checkboxItem.value_key,
                        event.target.checked,
                        section.label
                      )
                    }
                    marginRight="2rem"
                    marginBottom="1rem">
                    {checkboxItem.label}
                  </Checkbox>
                ))}
            </div>
          ))}
      </Box>
    );
  });
};

export default memo(FormFieldsCheckbox);
