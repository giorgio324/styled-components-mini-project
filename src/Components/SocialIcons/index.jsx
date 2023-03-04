import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './styles';
const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href='https://twitter.com'>
          <FaTwitter />
        </a>
        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
        <a href='https://linkedin.com'>
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
