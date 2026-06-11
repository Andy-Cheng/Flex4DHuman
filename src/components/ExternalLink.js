import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

const ExternalLink = ({ title, link, history }) => {
  // Open the link in a new tab when the component mounts
  // and redirect back to home page
  useEffect(() => {
    window.open(link, '_blank', 'noopener,noreferrer');
    // Redirect back to home page
    history.push('/works');
  }, [link, history]);

  // Return a non-clickable element that shows the title
  return (
    <></>
  );
};

export default withRouter(ExternalLink);