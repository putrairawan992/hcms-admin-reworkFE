import React, { memo, useState } from 'react'
import { Gap } from '../../atoms';
import { Box, Divider, Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { BrainIcon, VideoIcon } from '../../icons';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { typeOptions } from './shared/general';

const ChooseLogo = ({ questionNumber = 1 }) => {
  const [isActive, setIsActive] = useState('');

  const onHandlePress = (id) => {
    setIsActive(id);
  }

  return (
    <Flex>
      {typeOptions(isActive).map((item) => {
        return (
          <React.Fragment>
            <Flex alignItems='center' justifyContent='center' borderRadius={8} onClick={() => onHandlePress(item?.id)} cursor="pointer" padding={2} borderWidth={1} borderColor='#AE445A' backgroundColor={isActive === item?.id ? '#AE445A' : ''}>
              {item?.icon}
            </Flex>
            <Gap width={2} />
          </React.Fragment>
        );
      })}
    </Flex>
  )
}

export default memo(ChooseLogo);