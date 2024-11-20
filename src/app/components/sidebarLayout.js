"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import styles from "../styles/dashboard.module.css";
import { NotificationLogo } from "./logo";
import { useGetProfile } from "../api/profile";
import { usePathname, useRouter } from "next/navigation";

const SidebarLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { data } = useGetProfile();

  return (
    <Flex className={styles["homepage-container"]}>
      <Box className={styles["sidebar-container"]}>
        <Image
          src={"/images/scala-sidebar.png"}
          width={"132px"}
          height={"66px"}
        />
        <Box className={styles["divider-sidebar"]} />
        <Text
          onClick={() => router.push("/")}
          className={
            pathname === "/"
              ? styles["active-sidebar"]
              : styles["nonactive-sidebar"]
          }
        >
          Dashboard
        </Text>
        <Text
          onClick={() => router.push("/help-center")}
          className={
            pathname === "/help-center"
              ? styles["active-sidebar"]
              : styles["nonactive-sidebar"]
          }
        >
          Help Center
        </Text>
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
                  className={
                    pathname.includes("/setup")
                      ? styles["active-sidebar"]
                      : styles["nonactive-sidebar"]
                  }
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
            <AccordionPanel pb={4}>
              <Flex
                onClick={() => router.push("/setup/admin-role")}
                className={styles["nonactive-sidebar"]}
                justify={"center"}
                mb={2}
              >
                Admin
              </Flex>
              <Flex
                className={styles["nonactive-sidebar"]}
                justify={"center"}
                mb={2}
              >
                Account
              </Flex>
              <Flex
                className={styles["nonactive-sidebar"]}
                justify={"center"}
                mb={2}
              >
                Document
              </Flex>
              <Flex
                onClick={() => router.push("/setup/remuneration")}
                className={styles["nonactive-sidebar"]}
                justify={"center"}
                mb={2}
              >
                Remuneration
              </Flex>
              <Flex
                className={styles["nonactive-sidebar"]}
                justify={"center"}
                mb={2}
              >
                Payslip
              </Flex>
            </AccordionPanel>
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
            <AccordionPanel pb={4}>
              <Flex
                onClick={() => router.push("/approval/job-post")}
                className={styles["nonactive-sidebar"]}
                justify={"center"}
                mb={2}
              >
                Job Post
              </Flex>
              <Flex
                onClick={() => router.push("/approval/remuneration")}
                className={styles["nonactive-sidebar"]}
                justify={"center"}
                mb={2}
              >
                Remuneration
              </Flex>
            </AccordionPanel>
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
          <Box
            onClick={() => router.push("/edit-profile")}
            className={styles["profile-container"]}
          >
            <Image
              src={data?.photo}
              width={100}
              height={100}
              alt="profile-pict"
            />
          </Box>
        </Flex>
        {children}
      </Box>
    </Flex>
  );
};

export default SidebarLayout;
