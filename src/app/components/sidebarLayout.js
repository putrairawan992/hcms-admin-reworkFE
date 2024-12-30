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
  Menu,
  Avatar,
  Button,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  HStack,
} from "@chakra-ui/react";
import styles from "../styles/dashboard.module.css";
import { NotificationLogo } from "./logo";
import { usePathname, useRouter } from "next/navigation";
import { Container } from "reactstrap";
import { clearUserData, getUserData } from "../utils/localStorage";
import { memo } from "react";
import { Navbar } from "./atoms";
import { navbarDataOptions } from "@/shared/general";

const SidebarLayout = ({ children }) => {
  const profile = getUserData();
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };

  const RenderAccordion = ({ title, children }) => {
    return (
      <Accordion allowToggle>
        <AccordionItem border="none" marginBottom={"1rem"}>
          <AccordionButton
            p={0}
            _focus={{ boxShadow: "none", background: "none" }}
            _active={{ background: "none" }}
            _hover={{ background: "none" }}
          >
            <Flex
              className={styles["nonactive-sidebar"]}
              marginBottom={0}
              as="span"
              flex="1"
              alignItems='center'
              justifyContent='center'
              textAlign="center"
            >
              <Text>
                {title}
              </Text>
              <AccordionIcon />
            </Flex>
          </AccordionButton>
          <AccordionPanel pb={0}>
            {children.map((row) => (
              <Navbar title={row.title} href={row.href} />
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  };

  const RenderContent = () => {
    return navbarDataOptions.map((item, index) => {
      switch (item.type) {
        case 'text':
          return <Navbar key={index} title={item.title} href={item.href} />;
        case 'accordion':
          return <RenderAccordion key={index} title={item.title} children={item.children} />;
        default:
          return <Divider key={index} className={styles["sidebar-content-divider"]} />;
      }
    });
  };

  return (
    <Container style={{ maxWidth: '100%', padding: '0' }}>
      <Flex>
        <Box width="180px"
          display="flex"
          flexDirection="column"
          position="fixed"
          top="100"
          left="100"
          right="100"
          bottom='100'
          background="#f1f5fe"
          boxShadow='-5px 0px 5px 0px #b3b9c5, 5px 0px 5px 0px #b3b9c5'
          borderRadius="30"
          zIndex="1000">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="sticky"
            top="0"
            paddingX="8"
            borderTopRadius="30"
            paddingTop="8"
            paddingBottom="8"
            zIndex="10"
          >
            <Image
              src={"/images/scala-sidebar.png"}
              width={'450px'}
              height={'66px'}
            />
          </Box>
          <Box className={styles["divider-sidebar"]} />
          <Box flex="1" overflowY="auto" padding="0px 1rem">
            <RenderContent />
          </Box>
        </Box>

        {/* Content */}
        <Box
          style={{
            marginLeft: '225px',
            width: 'calc(100% - 225px)',
            padding: '5rem',
          }}
        >
          <Flex className={styles["notification-container"]}>
            <Box className={styles["notification-wrapper"]}>
              <Box
                onClick={() => router.push("/inbox")}
                className={styles["notification-button"]}
              >
                <NotificationLogo />
              </Box>
              <Box className={styles["notification-counter"]}>
                <Text className={styles["notification-counter-text"]}>4</Text>
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="flex-end"
              bgImage="url('https://admin-hcms.productscala.online/storage/profile_photo/user.jpg')"
              bgSize="cover"
              bgPosition="center"
              borderRadius="full"
              w="40px"
              h="40px"
              overflow="hidden"
              className={styles["profile-container"]}
            >
              <Menu>
                <MenuButton as={Button} variant="ghost" p={0} _hover={{ bg: "transparent" }} _active={{ bg: "transparent" }}>
                  <HStack spacing={3}>
                    <Box w="40px" h="40px" borderRadius="full" />
                  </HStack>
                </MenuButton>
                <MenuList
                  boxShadow="lg"
                  borderRadius="md"
                  p={4}
                  minW="300px"
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <VStack align="start" spacing={1}>
                    <HStack spacing={4}>
                      <Avatar
                        size="lg"
                        src="https://admin-hcms.productscala.online/storage/profile_photo/user.jpg"
                        alt="profile-pict"
                      />
                      <Box>
                        <Text fontWeight="bold" fontSize="lg">
                          {profile?.name}
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                          superadmin
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                          {profile?.email}
                        </Text>
                      </Box>
                    </HStack>
                  </VStack>

                  <Divider my={4} />

                  <VStack align="stretch" spacing={3}>
                    <MenuItem
                      _hover={{ bg: "gray.50" }}
                      borderRadius="md"
                      p={3}
                      alignItems="start"
                      onClick={() => handleNavigate('/edit-profile')}
                    >
                      <HStack spacing={4}>
                        <Box
                          w="40px"
                          h="10px"
                          borderRadius="md"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 60 60" fill="none">
                            <path d="M29.9879 55C43.6902 55 55 43.6847 55 30C55 16.3153 43.666 5 29.9637 5C16.2856 5 5 16.3153 5 30C5 43.6847 16.3098 55 29.9879 55ZM29.9879 38.3656C23.173 38.3656 17.8806 40.8075 15.319 43.6122C12.0324 40.058 10.0266 35.2708 10.0266 30C10.0266 18.9023 18.8956 10.0048 29.9637 10.0048C41.0561 10.0048 49.9734 18.9023 49.9976 30C49.9976 35.2708 47.9918 40.058 44.681 43.6364C42.1194 40.8075 36.827 38.3656 29.9879 38.3656ZM29.9879 34.4004C34.6762 34.4487 38.3253 30.4352 38.3253 25.2611C38.3253 20.3772 34.652 16.2911 29.9879 16.2911C25.348 16.2911 21.6506 20.3772 21.6747 25.2611C21.6989 30.4352 25.3238 34.3762 29.9879 34.4004Z" fill="url(#paint0_linear_2180_46813)"></path>
                            <defs>
                              <linearGradient id="paint0_linear_2180_46813" x1="5" y1="30" x2="55" y2="30" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFAF10"></stop>
                                <stop offset="0.873574" stopColor="#AE445A"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </Box>
                        <Box>
                          <Text fontWeight="semibold">My Profile</Text>
                          <Text fontSize="sm" color="gray.500">
                            Account Settings
                          </Text>
                        </Box>
                      </HStack>
                    </MenuItem>

                    <MenuItem
                      _hover={{ bg: "gray.50" }}
                      borderRadius="md"
                      p={3}
                      alignItems="start"
                      onClick={() => handleNavigate('inbox')}
                    >
                      <HStack spacing={4}>
                        <Box
                          w="40px"
                          h="40px"
                          borderRadius="md"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                            <path d="M30.0334 31.8514C30.9902 31.8514 31.8358 31.4063 32.8371 30.405L52.2408 11.1571C51.3729 10.3783 49.8376 10 47.6791 10H11.7868C9.87316 10 8.5158 10.356 7.73698 11.0681L27.2296 30.405C28.2087 31.4063 29.0765 31.8514 30.0334 31.8514ZM5.6008 45.3138L21.5999 29.4704L5.62305 13.6938C5.22252 14.4059 5 15.5852 5 17.2541V41.8425C5 43.4668 5.20027 44.6239 5.6008 45.3138ZM54.4215 45.2915C54.7997 44.6017 55 43.4446 55 41.8425V17.2541C55 15.6297 54.7775 14.4504 54.3769 13.7606L38.4668 29.4704L54.4215 45.2915ZM12.3209 49.0966H48.2132C50.1713 49.0966 51.551 48.7183 52.352 47.984L36.0636 31.8069L34.684 33.1642C33.1486 34.6551 31.68 35.3672 30.0334 35.3672C28.3867 35.3672 26.8959 34.6551 25.3605 33.1642L23.9809 31.8069L7.71473 47.9395C8.60481 48.696 10.1624 49.0966 12.3209 49.0966Z" fill="url(#paint0_linear_2180_46819)"></path>
                            <defs>
                              <linearGradient id="paint0_linear_2180_46819" x1="5" y1="30" x2="55" y2="30" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFAF10"></stop>
                                <stop offset="1" stopColor="#AE445A"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                        </Box>
                        <Box>
                          <Text fontWeight="semibold">My Inbox</Text>
                          <Text fontSize="sm" color="gray.500">
                            See All Messages
                          </Text>
                        </Box>
                      </HStack>
                    </MenuItem>
                  </VStack>

                  <Divider my={4} />

                  <Button
                    w="100%"
                    color="white"
                    borderRadius="10"
                    boxShadow='5px 0px 5px 0px #B3B9C5'
                    py={2}
                    _hover={{ bgGradient: "linear(to-r, orange.500, red.600)" }}
                    bgGradient="linear-gradient(90deg, #F39F5A 0%, #AE445A 100%)"
                    onClick={() => {
                      clearUserData();
                      document.cookie = "userToken=; path=/; max-age=0; SameSite=Lax";
                      router.push('/login');
                    }}
                  >
                    Log Out
                  </Button>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
          {children}
        </Box>
      </Flex>
    </Container>
  );
};

export default memo(SidebarLayout);
