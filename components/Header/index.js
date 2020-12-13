import React, {useState} from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'
import { slide as Menu } from "react-burger-menu";

import { Head, Logo, List, Item, MenuContainer } from "./styles";

const Header = () => {

  const [keyword, setkeyword] = useState('')
  const router = useRouter()

  const handleSubmit= e =>{
    // e.preventDefault()
    router.push(`/search/${keyword}`)
  }
  const handleChange= e =>{
    setkeyword(e.target.value)
  }


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
              <a>Dragons</a>
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
          <Item>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="search..."
                onChange={handleChange}
                value={keyword}
              />
            </form>
          </Item>
        </List>
      </nav>
      <MenuContainer>
        <Menu right width={"100%"} s>
          <Item>
            <Link href="/rockets">
              <a className="menu-item">Rockets</a>
            </Link>
          </Item>
          <Item>
            <Link href="/launches">
              <a className="menu-item">Launches</a>
            </Link>
          </Item>
          <Item>
            <Link href="/capsules">
              <a className="menu-item">Capsules</a>
            </Link>
          </Item>
          <Item>
            <Link href="/stats">
              <a className="menu-item">Stats</a>
            </Link>
          </Item>
          <Item>
            <Link href="/about">
              <a className="menu-item">About</a>
            </Link>
          </Item>
        </Menu>
      </MenuContainer>
    </Head>
  );
};



export default Header;