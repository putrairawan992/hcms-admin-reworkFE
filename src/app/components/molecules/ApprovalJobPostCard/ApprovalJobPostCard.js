import React, { memo } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import styles from '../../../styles/approvalJobPost.module.css';
import style from './ApprovalJobPostCard.styles';
import moment from 'moment';
import { noop } from '@/app/utils/helpers';
import { ApproveIcon, RejectIcon, ShareIcon } from '../../icons';

const ApprovalJobPost = ({
  data = [],
  onClickDetail = noop,
  onClickIcon = noop,
}) => {
  const onHandlePressDetail = () => {
    onClickDetail(data?.id);
  };

  const onHandlePressIcon = (e, decision) => {
    e.stopPropagation();
    onClickIcon(decision, data?.id);
  };

  return (
    <Flex className={styles['job-post-card']} onClick={onHandlePressDetail}>
      <Flex className={styles['job-post-card-inner']}>
        <Box className={styles['job-post-image-wrapper']}>
          <Image
            className={styles['job-post-image']}
            src={'/images/company-dummy.jpeg'}
          />
        </Box>
        <Box className={styles['job-post-content-wrapper']}>
          <Flex className={styles['job-post-time-status-wrapper']}>
            <Text className={styles['job-post-time']}>
              {moment(data?.start_date)
                .utcOffset('+07:00')
                .format('D MMMM YYYY | HH:mm') + ' WIB'}
            </Text>
            <Box className={styles['job-post-status']}>
              {data?.status_approve}
            </Box>
          </Flex>
          <Box>
            <Text className={styles['job-post-role']}>
              {data?.job_title}
            </Text>
            <Text className={styles['job-post-rest']}>
              {data?.job_provider_name}
            </Text>
            <Text className={styles['job-post-rest']}>
              IDR {data?.start_from_salary} - {data?.end_from_salary}
            </Text>
            <Text className={styles['job-post-rest']}>3 Orang</Text>
          </Box>
          <Flex className={styles['job-post-button']}>
            <ShareIcon style={style.shareIcon} />
            {data.status_approve !== 'Approved' &&
              data.status_approve !== 'Rejected' && (
                <React.Fragment>
                  <RejectIcon onClick={(e) => onHandlePressIcon(e, false)} style={style.rejectIcon} />
                  <ApproveIcon onClick={(e) => onHandlePressIcon(e, true)} style={style.approvedIcon} />
                </React.Fragment>
              )}
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default memo(ApprovalJobPost);
