import React, { memo } from 'react'
import { Text } from "@chakra-ui/react";
import styles from './Navbar.styles';
import Link from 'next/link';
import { usePathname } from "next/navigation";

const Navbar = ({ href = '', title = '' }) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <Text style={styles.title(pathname, href)}>{title}</Text>
    </Link>
  );
}

export default memo(Navbar);