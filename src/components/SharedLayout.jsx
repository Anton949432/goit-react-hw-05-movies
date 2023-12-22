import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <Logo>
                    <span role="img" aria-label="computer icon">
                        💻
                    </span>{" "}
                    GoMerch Store
                </Logo>
                <nav>
                    <Link to="https://www.themoviedb.org/" end>
                        Головна
                    </Link>
                    <Link to="https://www.themoviedb.org/discuss">Давайте спілкуватися</Link>
                    <Link to="https://www.themoviedb.org/movie">Популярні фільми</Link>
                </nav>
            </Header>
            <Outlet />
        </Container>
    );
};

export default SharedLayout;







