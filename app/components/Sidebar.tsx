import { Box, useDisclosure, IconButton, Flex, Text, Image, Button, Spacer } from "@chakra-ui/react";
import { HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { BsFillPersonFill, BsArrowLeftRight, BsCurrencyDollar, BsFillCreditCardFill, BsFillClipboard2MinusFill } from "react-icons/bs";
import { FaRing, FaSignOutAlt } from "react-icons/fa"

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
    onClose();
  };

  return (
    <>
      <IconButton display={{ base: "block", md: "none" }}
        aria-label="Open Menu" icon={<HamburgerIcon />} onClick={onOpen} mb={2}/>

      <Box as="nav" pos="fixed" left={0} w={{ base:  "42%", md: "250px" }} bg="purple" color="teal" h="100vh" top={0} p={4} roundedRight={25}
        zIndex={100}
        transition="transform 0.3s"
        transform={{ base: isOpen ? "translateX(0)" : "translateX(-100%)", md: "translateX(0)" }}
      >
        {/* <Flex align="center" mb={4}> */}
        <Flex textColor='white' mt={8} mx={{ base:1, md:4}} pt={4} justify='space-between'>
          <Image src='/images/Anas4.JPG' rounded='50%' w={{ base:30, md:50}} h={{ base:30, md:50}} />
          <Text fontSize={{ base:12, md:20}} color='teal' ><strong>Anas Isah</strong><br /> @anas.isah</Text>
        </Flex> 
        {/* </Flex> */}

        <Flex direction="column" mt={5}>
          <Flex fontSize={{base:18, md:25}} ml={{base:1, md:3}} gap={{base:1, md:3}}>
            <Box >
            <BsFillPersonFill />
            </Box>
          <Box alignItems='center' as="a" href="/" mb={2} fontSize={18}> My Profile</Box>
          </Flex>
          <Flex fontSize={{base:18, md:25}} ml={{base:1, md:3}} gap={{base:1, md:3}}>
          <Box>
          <BsArrowLeftRight /> 
          </Box>
          <Box as="a" href="/" mb={2} fontSize={18}> Transaction</Box>
          </Flex>
          <Flex fontSize={{base:18, md:25}} ml={{base:1, md:3}} gap={{base:1, md:3}}>
          <Box>
          <BsCurrencyDollar />
          </Box>
          <Box as="a" href="/" mb={2} fontSize={18} onClick={onOpen}>  Contributions</Box>
          </Flex>
          <Flex fontSize={{base:18, md:25}} ml={{base:1, md:3}} gap={{base:1, md:3}}>
          <Box>
          <BsFillCreditCardFill />
          </Box>
          <Box as="a" href="/" mb={2} fontSize={18}>  My Card</Box>
          </Flex>
          <Flex fontSize={{base:18, md:25}} ml={{base:1, md:3}} gap={{base:1, md:3}}>
          <Box>
          <BsFillClipboard2MinusFill /> 
          </Box>
          <Box as="a" href="/" mb={2} fontSize={18}> Promotion</Box>
          </Flex>
          <Flex fontSize={{base:18, md:25}} ml={{base:1, md:3}} gap={{base:1, md:3}}>
            <Box>
            <FaRing />
            </Box>
          <Box as="a" href="/" mb={2} fontSize={18}>  Notification</Box>
          </Flex>
          <Flex fontSize={{base:18, md:25}} ml={{base:1, md:3}} gap={{base:1, md:3}}>
          <Box>
            <SettingsIcon />
          </Box> 
          <Box as="a" href="/" mb={2} fontSize={18}> Password Setting</Box>
          </Flex>
          <Button mt={8}> Sign Out <Spacer/> <FaSignOutAlt /></Button>
        </Flex>
      </Box>

      {isOpen && (
        <Box
          pos="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.4)"
          zIndex={99}
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;
