import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Image from '../components/image';
import { getImage, getImageLoading } from '../selectors/pokemonSelectors';
import { fetchImage } from '../action/pokemonAction';
import Load from '../components/image/Load';

class PokemonImage extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    pokemonImg: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { pokemonImg, loading } = this.props;
    if(loading) return <h1>LOADING</h1>;

    return (
      <div>
        <Image image={pokemonImg} />
        <Load handleClick={fetch} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemonImg: getImage(state),
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
