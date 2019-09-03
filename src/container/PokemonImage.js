import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Image from '../components/image';
import { getImage, getImageLoading } from '../selectors/pokemonSelectors';
import { fetchImage } from '../action/pokemonAction';

class PokemonImage extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    image: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { image, loading } = this.props;
    if(loading) return <h1>LOADING</h1>;

    return <Image image={image} />;
  }
}

const mapStateToProps = state => ({
  image: getImage(state),
  loading: getImageLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchImage());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonImage);
