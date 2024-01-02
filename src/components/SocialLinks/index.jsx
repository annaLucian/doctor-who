import { StyledLinks } from './socialLinks.styles';

export default function SocialLinks() {
  return (
    <StyledLinks className="socialLinks" role="list">
      <li>
        <a href="https://www.facebook.com/DoctorWho" target="_blank">
          <svg
            width="26"
            height="26"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            title="facebook"
          >
            <path
              d="M20 10.1606C20 4.63563 15.52 0.151611 10 0.151611C4.48 0.151611 0 4.63563 0 10.1606C0 15.0049 3.44 19.0385 8 19.9694V13.1633H6V10.1606H8V7.65834C8 5.72661 9.57 4.1552 11.5 4.1552H14V7.15789H12C11.45 7.15789 11 7.6083 11 8.15879V10.1606H14V13.1633H11V20.1195C16.05 19.6191 20 15.3552 20 10.1606Z"
              fill="white"
            />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/bbcdoctorwho" target="_blank">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            title="twitter"
          >
            <path
              d="M18.901 1.30396H22.581L14.541 10.5022L24 23.0164H16.594L10.794 15.4256L4.156 23.0164H0.474L9.074 13.1776L0 1.30496H7.594L12.837 8.24318L18.901 1.30396ZM17.61 20.8124H19.649L6.486 3.39283H4.298L17.61 20.8124Z"
              fill="white"
            />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/bbcdoctorwho/" target="_blank">
          <svg
            width="27"
            height="27"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            title="instagram"
          >
            <path
              d="M7.8 2.15259H16.2C19.4 2.15259 22 4.75492 22 7.95779V16.3653C22 17.905 21.3889 19.3815 20.3012 20.4702C19.2135 21.5589 17.7383 22.1705 16.2 22.1705H7.8C4.6 22.1705 2 19.5682 2 16.3653V7.95779C2 6.41816 2.61107 4.94158 3.69878 3.85289C4.78649 2.76421 6.26174 2.15259 7.8 2.15259ZM7.6 4.15438C6.64522 4.15438 5.72955 4.53401 5.05442 5.20974C4.37928 5.88548 4 6.80198 4 7.75761V16.5655C4 18.5573 5.61 20.1687 7.6 20.1687H16.4C17.3548 20.1687 18.2705 19.7891 18.9456 19.1134C19.6207 18.4376 20 17.5211 20 16.5655V7.75761C20 5.76583 18.39 4.15438 16.4 4.15438H7.6ZM17.25 5.65573C17.5815 5.65573 17.8995 5.78754 18.1339 6.02217C18.3683 6.2568 18.5 6.57503 18.5 6.90685C18.5 7.23867 18.3683 7.5569 18.1339 7.79153C17.8995 8.02616 17.5815 8.15797 17.25 8.15797C16.9185 8.15797 16.6005 8.02616 16.3661 7.79153C16.1317 7.5569 16 7.23867 16 6.90685C16 6.57503 16.1317 6.2568 16.3661 6.02217C16.6005 5.78754 16.9185 5.65573 17.25 5.65573ZM12 7.15707C13.3261 7.15707 14.5979 7.68433 15.5355 8.62285C16.4732 9.56138 17 10.8343 17 12.1616C17 13.4888 16.4732 14.7617 15.5355 15.7003C14.5979 16.6388 13.3261 17.166 12 17.166C10.6739 17.166 9.40215 16.6388 8.46447 15.7003C7.52678 14.7617 7 13.4888 7 12.1616C7 10.8343 7.52678 9.56138 8.46447 8.62285C9.40215 7.68433 10.6739 7.15707 12 7.15707ZM12 9.15887C11.2044 9.15887 10.4413 9.47522 9.87868 10.0383C9.31607 10.6014 9 11.3652 9 12.1616C9 12.9579 9.31607 13.7217 9.87868 14.2848C10.4413 14.8479 11.2044 15.1643 12 15.1643C12.7956 15.1643 13.5587 14.8479 14.1213 14.2848C14.6839 13.7217 15 12.9579 15 12.1616C15 11.3652 14.6839 10.6014 14.1213 10.0383C13.5587 9.47522 12.7956 9.15887 12 9.15887Z"
              fill="white"
            />
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.tiktok.com/@doctorwho" target="_blank">
          <svg
            width="29"
            height="29"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            title="tiktok"
          >
            <path
              d="M16.6 5.97512C15.9164 5.19404 15.5397 4.19095 15.54 3.15259H12.45V15.5637C12.4262 16.2353 12.1429 16.8715 11.6598 17.3382C11.1767 17.805 10.5315 18.0659 9.86 18.066C8.44 18.066 7.26 16.9049 7.26 15.4636C7.26 13.7421 8.92 12.4509 10.63 12.9814V9.81856C7.18 9.35815 4.16 12.0406 4.16 15.4636C4.16 18.7966 6.92 21.1687 9.85 21.1687C12.99 21.1687 15.54 18.6165 15.54 15.4636V9.16798C16.793 10.0686 18.2974 10.5519 19.84 10.5492V7.45645C19.84 7.45645 17.96 7.54653 16.6 5.97512Z"
              fill="white"
            />
          </svg>
        </a>
      </li>
    </StyledLinks>
  );
}
