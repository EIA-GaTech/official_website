import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinkItems, FooterLinkTitle, FooterLink, FooterLinksWrapper, WebsiteRights, SocialMedia, SocialMediaWrapper, SocialLogo, SocialIconLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle to='about'>About us</FooterLinkTitle>
              <FooterLink to='about'>Mission</FooterLink>
              <FooterLink to='about'>Impact</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
            <FooterLinkTitle to='team'>Our Team</FooterLinkTitle>
              <FooterLink to='team'>Members</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
            <FooterLinkTitle to='projects'>Projects</FooterLinkTitle>
              <FooterLink to='2021'>2021: Keen</FooterLink>
              <FooterLink to='2019'>2019: Humapirhua</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
            <FooterLinkTitle to='sponsorships'>Sponsorships</FooterLinkTitle>
              <FooterLink to='sponsorships'>Sponsorship Levels</FooterLink>
              <FooterLink to='sponsorships'>Our Sponsors</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo>

            </SocialLogo>
            <WebsiteRights>Engineers in Action @Georgia Tech © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIconLink href='https://www.facebook.com/GeorgiaTechEIA/' target="blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='https://www.instagram.com/gatecheia/' target="blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='https://www.linkedin.com/company/gatecheia/' target="blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
