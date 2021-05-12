import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Diego Fernades</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img src="https://avatars.githubusercontent.com/u/37906413?s=400&v=4"
              alt="Vitor Nunes" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}