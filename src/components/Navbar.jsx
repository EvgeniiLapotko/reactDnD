import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Avatar } from '@mui/material';
import NavbarListBlock from './NavbarListBlock';
import { observer } from 'mobx-react-lite';

const Navbar = observer(({ state }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    state.filterComponents(value);
  };
  return (
    <NavbarContainer>
      <HeaderContainer>
        <HeaderUser>
          <HeaderAvatar />
        </HeaderUser>

        <ExitToAppIcon />
      </HeaderContainer>
      <NavbarSearchContainer>
        <NavbarSearch>
          <SearchIcon />
          <input type='text' placeholder='Search' value={value} onChange={handleChange} />
        </NavbarSearch>
      </NavbarSearchContainer>
      <div>
        <h3 style={{ textAlign: 'center', margin: '7px' }}>Components</h3>
        <NavbarListContainer>
          {state.filterList?.map((item) => {
            return <NavbarListBlock item={item} key={item.id} />;
          })}
        </NavbarListContainer>
      </div>
    </NavbarContainer>
  );
});

const NavbarContainer = styled.div`
  flex: 0.35;
  max-width: 300px;
  min-width: 230px;
  background-color: #2c2c2c;
  color: #fff;
  border-top: 1px solid #5c5c5c;
  transition: all 0.4s;
  box-sizing: border-box;
  hr {
    margin: 0 5px;
    opacity: 0.3;
    border-color: #5c5c5c;
  }
`;

const HeaderContainer = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 13px;
  height: 70px;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid #5c5c5c;
`;

const HeaderUser = styled.div`
  display: flex;
  padding-right: 13px;
  align-items: center;
`;

const HeaderAvatar = styled(Avatar)``;

const NavbarSearchContainer = styled.div`
  border-bottom: 1px solid #5c5c5c;
  padding: 13px;
  margin-bottom: 5px;
`;
const NavbarListContainer = styled.div`
  overflow: auto;
  height: calc(100vh - 200px);
  padding-bottom: 80px;
`;

const NavbarSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 25px;
  background-color: #1c1c1c;
  border: 1px solid gray;
  border-radius: 5px;
  input {
    background-color: transparent;
    outline: none;
    text-align: center;
    border: none;
    padding-left: 5px;
    padding-right: 5px;
    color: #fff;
    ::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

export default Navbar;
