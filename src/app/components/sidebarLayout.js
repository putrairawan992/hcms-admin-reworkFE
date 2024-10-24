import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Box,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import ScalaLogo from "../../../public/images/scala-sidebar.png";
import DummyImage from "../../../public/images/dummy-image.png";
import styles from "../styles/dashboard.module.css";
import { NotificationLogo } from "./logo";

const SidebarLayout = ({ children }) => {
  return (
    <Flex className={styles["homepage-container"]}>
      <Box className={styles["sidebar-container"]}>
        <Image src={ScalaLogo} width={132} height={100} />
        <Box className={styles["divider-sidebar"]} />
        <Text className={styles["active-sidebar"]}>Dashboard</Text>
        <Text className={styles["nonactive-sidebar"]}>Help Center</Text>
        <Divider className={styles["sidebar-content-divider"]} />
        <Accordion allowToggle>
          <AccordionItem border="none" marginBottom={"2rem"}>
            <h2>
              <AccordionButton
                p={0}
                _focus={{ boxShadow: "none", background: "none" }}
                _active={{ background: "none" }}
                _hover={{ background: "none" }}
              >
                <Box
                  className={styles["nonactive-sidebar"]}
                  marginBottom={0}
                  as="span"
                  flex="1"
                  textAlign="center"
                >
                  Setup
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Accordion>
        <Text className={styles["nonactive-sidebar"]}>Blast Notification</Text>
        <Divider className={styles["sidebar-content-divider"]} />
        <Accordion allowToggle>
          <AccordionItem border="none" marginBottom={"2rem"}>
            <h2>
              <AccordionButton
                p={0}
                _focus={{ boxShadow: "none", background: "none" }}
                _active={{ background: "none" }}
                _hover={{ background: "none" }}
              >
                <Box
                  className={styles["nonactive-sidebar"]}
                  marginBottom={0}
                  as="span"
                  flex="1"
                  textAlign="center"
                >
                  Masterdata
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Accordion>
        <Text className={styles["nonactive-sidebar"]}>High Level</Text>
        <Divider className={styles["sidebar-content-divider"]} />
        <Accordion allowToggle>
          <AccordionItem border="none" marginBottom={"2rem"}>
            <h2>
              <AccordionButton
                p={0}
                _focus={{ boxShadow: "none", background: "none" }}
                _active={{ background: "none" }}
                _hover={{ background: "none" }}
              >
                <Box
                  className={styles["nonactive-sidebar"]}
                  marginBottom={0}
                  as="span"
                  flex="1"
                  textAlign="center"
                >
                  Approval
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Accordion>
        <Text className={styles["nonactive-sidebar"]}>Send Document</Text>
        <Text className={styles["nonactive-sidebar"]}>Data Talent</Text>
        <Text className={styles["nonactive-sidebar"]}>Payslip</Text>
      </Box>

      <Box className={styles["content-container"]}>
        <Flex className={styles["notification-container"]}>
          <Box className={styles["notification-wrapper"]}>
            <Box className={styles["notification-button"]}>
              <NotificationLogo />
            </Box>
            <Box className={styles["notification-counter"]}>
              <Text className={styles["notification-counter-text"]}>4</Text>
            </Box>
          </Box>
          <Box className={styles["profile-container"]}>
            <Image src={DummyImage} width={100} height={100} />
          </Box>
        </Flex>
        {children}
      </Box>
    </Flex>
  );
};

export default SidebarLayout;
