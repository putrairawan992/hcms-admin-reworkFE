import React, { memo, useState } from 'react'
import { Gap } from '../../atoms';
import { Box, Divider, Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const QuestionSection = ({ questionNumber = 1 }) => {

  const [value, setValue] = useState(""); // State untuk nilai radio yang dipilih

  const handleBoxClick = (newValue) => {
    setValue(newValue); // Set nilai radio ketika box diklik
  };

  return (
    <Box>
      <Text color='#AE445A' fontWeight='bold' fontSize={16}>Pertanyaan {questionNumber + 1}</Text>
      <Gap height={2} />
      <ReactQuill
        theme="snow"
        // value={text}
        // onChange={setText}
        style={{ margin: '0px 0px 2rem 0px', height: "150px" }}
      />
      <Gap height={8} />
      <RadioGroup onChange={setValue} value={value}>
        <Flex flex={1} justify='space-between'>
          <Box flex={1}>
            <Box
              borderWidth={1}
              borderColor="#AE445A"
              borderRadius={8}
              paddingY={2}
              flex={1}
              paddingX={4}
              onClick={() => handleBoxClick("1")}
              cursor="pointer">
              <Radio value="1" pointerEvents="none">
                A. Pilihan Ganda 1
              </Radio>
            </Box>
            <Gap height={2} />
            <Box
              borderWidth={1}
              borderColor="#AE445A"
              borderRadius={8}
              paddingY={2}
              flex={1}
              paddingX={4}
              onClick={() => handleBoxClick("2")}
              cursor="pointer">
              <Radio value="2" pointerEvents="none">
                B. Pilihan Ganda 2
              </Radio>
            </Box>
          </Box>
          <Gap width={8} />
          <Box flex={1}>
            <Box
              borderWidth={1}
              borderColor="#AE445A"
              borderRadius={8}
              paddingY={2}
              flex={1}
              paddingX={4}
              onClick={() => handleBoxClick("3")}
              cursor="pointer">
              <Radio value="3" pointerEvents="none">
                C. Pilihan Ganda 3
              </Radio>
            </Box>
            <Gap height={2} />
            <Box
              borderWidth={1}
              borderColor="#AE445A"
              borderRadius={8}
              paddingY={2}
              flex={1}
              paddingX={4}
              onClick={() => handleBoxClick("4")}
              cursor="pointer">
              <Radio value="4" pointerEvents="none">
                D. Pilihan Ganda 4
              </Radio>
            </Box>
          </Box>
        </Flex>
      </RadioGroup>
      <Gap height={8} />
      <Divider borderWidth={1} borderColor='#B6B6B6' />
      <Gap height={8} />
    </Box>
  )
}

export default memo(QuestionSection);