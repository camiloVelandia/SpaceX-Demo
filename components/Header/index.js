import React from 'react';
import Link from 'next/link'
import { slide as Menu } from "react-burger-menu";

import { Head, Logo, List, Item, MenuContainer } from "./styles";

const Header = () => {
  return (
    <Head>
      <Link href="/">
        <Logo>
          <img src="/images/logo.png" />
        </Logo>
      </Link>
      <nav>
        <List>
          <Item>
            <Link href="/rockets">
              <a>Rockets</a>
            </Link>
          </Item>
          <Item>
            <Link href="/launches">
              <a>Launches</a>
            </Link>
          </Item>
          <Item>
            <Link href="/capsules">
              <a>Capsules</a>
            </Link>
          </Item>
          <Item>
            <Link href="/stats">
              <a>Stats</a>
            </Link>
          </Item>
          <Item>
            <Link href="/about">
              <a>About</a>
            </Link>
          </Item>
        </List>
      </nav>
      <MenuContainer>
        <Menu right width={'100%'}>
          <Item>
            <Link href="/rockets">
              <a>Rockets</a>
            </Link>
          </Item>
          <Item>
            <Link href="/launches">
              <a>Launches</a>
            </Link>
          </Item>
          <Item>
            <Link href="/capsules">
              <a>Capsules</a>
            </Link>
          </Item>
          <Item>
            <Link href="/stats">
              <a>Stats</a>
            </Link>
          </Item>
          <Item>
            <Link href="/about">
              <a>About</a>
            </Link>
          </Item>
        </Menu>
      </MenuContainer>
    </Head>
  );
};



export default Header;