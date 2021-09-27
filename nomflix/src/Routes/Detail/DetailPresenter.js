import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"
import Loader from "../../Components/Loader";

const Container = styled.div`
    height:calc(100vh - 50px);
    width: 100%;
    position:absolute;
`;

const Backdrop = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.bgImage});
    background-position: center center;
    background-size: cover;
`;

const DetailPresenter = ({ result, loading, error }) =>
    // loading ? (
    //     <Loader />
    // ) : (
    //     <Container>
    //         <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
    //     </Container>
    // );
    <Loader />

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default DetailPresenter;