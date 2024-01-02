import React from 'react';
import { render, screen } from '@testing-library/react';
import { prettyDOM } from '@testing-library/react';
import '@testing-library/jest-dom';
import SocialLinks from '@/components/SocialLinks/index.jsx';

describe('<SocialLinks />', () => {
  render(<SocialLinks />);

  const facebookLink = screen.getByTitle(/facebook/i);
  const twitterLink = screen.getByTitle(/twitter/i);
  const instagramLink = screen.getByTitle(/instagram/i);
  const tiktokLink = screen.getByTitle(/tiktok/i);

  test('should render a list of links', () => {
    expect(facebookLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(tiktokLink).toBeInTheDocument();
  });

  test('should display the correct hrf for each link', () => {
    render(<SocialLinks />);

    expect(facebookLink.parentElement).toHaveAttribute(
      'href',
      'https://www.facebook.com/DoctorWho',
    );
    expect(twitterLink.parentElement).toHaveAttribute(
      'href',
      'https://twitter.com/bbcdoctorwho',
    );
    expect(instagramLink.parentElement).toHaveAttribute(
      'href',
      'https://www.instagram.com/bbcdoctorwho/',
    );
    expect(tiktokLink.parentElement).toHaveAttribute(
      'href',
      'https://www.tiktok.com/@doctorwho',
    );
  });
});
