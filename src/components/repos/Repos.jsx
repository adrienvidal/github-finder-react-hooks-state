import React from 'react';
import ReposItem from './ReposItem';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
  return repos.map((repo) => <ReposItem repo={repo} key={repo.id} />);
};

export default Repos;

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};
