import React from "react";
import ButtonComp from "./ButtonComp";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <ul className="list">
        <div className="icon">
          <svg
            width="30"
            height="20"
            viewBox="0 0 40 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 34V22H24V34H34V18H40L20 0L0 18H6V34H16Z"
              fill="#2A9D8F"
            />
          </svg>

          <li>Home</li>
        </div>
        <div className="icon">
          <svg
            width="30"
            height="20"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 8H0V36C0 38.2 1.8 40 4 40H32V36H4V8ZM36 0H12C9.8 0 8 1.8 8 4V28C8 30.2 9.8 32 12 32H36C38.2 32 40 30.2 40 28V4C40 1.8 38.2 0 36 0ZM34 18H14V14H34V18ZM26 26H14V22H26V26ZM34 10H14V6H34V10Z"
              fill="#2A9D8F"
            />
          </svg>

          <li>Feed</li>
        </div>
        <div className="icon">
          <svg
            width="30"
            height="20"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1601 3.16L8.30006 0.3C3.50006 3.96 0.340059 9.6 0.0600586 16H4.06006C4.36006 10.7 7.08006 6.06 11.1601 3.16ZM35.9401 16H39.9401C39.6401 9.6 36.4801 3.96 31.7001 0.3L28.8601 3.16C32.9001 6.06 35.6401 10.7 35.9401 16ZM32.0001 17C32.0001 10.86 28.7201 5.72 23.0001 4.36V3C23.0001 1.34 21.6601 0 20.0001 0C18.3401 0 17.0001 1.34 17.0001 3V4.36C11.2601 5.72 8.00006 10.84 8.00006 17V27L4.00006 31V33H36.0001V31L32.0001 27V17ZM20.0001 39C20.2801 39 20.5401 38.98 20.8001 38.92C22.1001 38.64 23.1601 37.76 23.6801 36.56C23.8801 36.08 23.9801 35.56 23.9801 35H15.9801C16.0001 37.2 17.7801 39 20.0001 39Z"
              fill="#2A9D8F"
            />
          </svg>

          <li>Notification</li>
        </div>
        <div className="icon">
          <svg
            width="30"
            height="20"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4V32C0 34.2 1.78 36 4 36H32C34.2 36 36 34.2 36 32V4C36 1.8 34.2 0 32 0H4C1.78 0 0 1.8 0 4ZM24 12C24 15.32 21.32 18 18 18C14.68 18 12 15.32 12 12C12 8.68 14.68 6 18 6C21.32 6 24 8.68 24 12ZM6 28C6 24 14 21.8 18 21.8C22 21.8 30 24 30 28V30H6V28Z"
              fill="#2A9D8F"
            />
          </svg>

          <li>Profile</li>
        </div>
        <div className="icon">
          <svg
            width="30"
            height="20"
            viewBox="0 0 48 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44 0H14C12.62 0 11.54 0.7 10.82 1.76L0 18L10.82 34.22C11.54 35.28 12.76 36 14.14 36H44C46.2 36 48 34.2 48 32V4C48 1.8 46.2 0 44 0ZM18 21C16.34 21 15 19.66 15 18C15 16.34 16.34 15 18 15C19.66 15 21 16.34 21 18C21 19.66 19.66 21 18 21ZM28 21C26.34 21 25 19.66 25 18C25 16.34 26.34 15 28 15C29.66 15 31 16.34 31 18C31 19.66 29.66 21 28 21ZM38 21C36.34 21 35 19.66 35 18C35 16.34 36.34 15 38 15C39.66 15 41 16.34 41 18C41 19.66 39.66 21 38 21Z"
              fill="#2A9D8F"
            />
          </svg>

          <li>More</li>
        </div>
        <div className="icon">
          <svg
            width="30"
            height="20"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.18 25.18L17 28L27 18L17 8L14.18 10.82L19.34 16H0V20H19.34L14.18 25.18ZM32 0H4C1.78 0 0 1.8 0 4V12H4V4H32V32H4V24H0V32C0 34.2 1.78 36 4 36H32C34.2 36 36 34.2 36 32V4C36 1.8 34.2 0 32 0Z"
              fill="#2A9D8F"
            />
          </svg>

          <li>Logout</li>
        </div>
      </ul>
      <div className="btn">
        <ButtonComp />
      </div>
    </div>
  );
}

export default Menu;
