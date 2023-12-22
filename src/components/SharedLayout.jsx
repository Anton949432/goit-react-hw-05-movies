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
                    Films
                </Logo>
                <nav>
                    <Link to="https://www.themoviedb.org/" end>
                        Головна
                    </Link>
                    <Link to="https://developer.themoviedb.org/reference/trending-all">Популярні фільми</Link>
                    <Link to="https://developer.themoviedb.org/reference/search-movie">Пошук</Link>
                    <Link to="https://developer.themoviedb.org/reference/movie-details">Деталі</Link>
                    <Link to="https://developer.themoviedb.org/reference/movie-credits">Актори</Link>
                    <Link to="https://developer.themoviedb.org/reference/movie-reviews">Ревю</Link>
                </nav>
            </Header>
            <Outlet />
        </Container>
    );
};

export default SharedLayout;







