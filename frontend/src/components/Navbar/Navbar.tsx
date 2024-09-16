import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Ensure this CSS file exists


const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="https://example.com/path-to-your-logo-image.jpg"
            alt="MyLogo"
            className="logo-image"
          />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/venues">Venues</Link>
        </li>
        <li>
          <Link to="/services">Bookings</Link>
        </li>
      </ul>
      <div className="navbar-profile">
        <button className="profile-button" onClick={toggleDropdown}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAD1CAMAAAAvfDqYAAAA6lBMVEVLrfT///8AAAD8xpdOtP0WMkYYN03/zZxNsvv/ypr/yZn/zp1LrfXu7u739/ceHh7Y2Njx8fG7u7umpqbBwcGCgoLl5eXS0tLHx8eYmJhAQECsrKxubm6WlpZ8fHxWVlZNTU2ffV8xMTEODg4nJydhYWFCQkLJnnhzc3PyvpEuLi4LCwszKB7droUZGRnAl3NJOi2yjGvjsoiBZU5pU0BUQjMlHRY+MCWLi4seRF9Ent4jT28nWX42fbA/ks0uaZQ5g7gOIS9uV0JdSjmQclYrIho3fbELFyERJjY9jccJERkxcJ4lVHdRvP/S3oYeAAANIElEQVR4nO2dfVfaShCHI6IJIKggCKJWUURKraL1qvha7W1r9X7/r3MTQJ2Z7CaZza4mPfn90XOquJsnOzs7O/uCNWNQ5dXqxmZ3bXGQczVY3OtutqpLyyZrtEwVvNrq5iTq1pZM1WoEp9z+JEN5RWobaSX9OMu1tTCWibbaFe2V68ZZlZqYSPu6rU4vTrXDgRk3UVPrA+jEqS5yYTx1dALpw2l+VoHxtKfP5HThNEJ9WZDWdbk5TTitODCe2nqeQwtOoxOXxvUJZR1PogOnFvaoX45OT4/+DftUVcOjaMAJGGm+bR8e9EuubNv7p39w+ONB/unNBOA0vkoe7n54XLILheIsULFQsO3joQxpLXaYEBdnVcLSK9qYBDLZs4ffxH/X+FicquiZvgxnbQnKK5Ld3/5H9LerH4kjcgJHPbsQzDJRoXD4RfDnKx+HI6D50gtrGABkHwpaKJaDi4MjoBlGa5m3FtrW2z4xcNq+B7mfZcF4svunvmJixKTqOE3fYxyWuDCuiqWhryD1kFQZp0Gf4ajPbpppAx37XIJyRKqKU9khT3AS3QX4GqhIR6G198bZIg8wVDG0V5V+kOL23xdng1Tfs+PQuDy0Aym6azWcJVL5QUwal+eQFKk2X1DDIR3nQNEJQNmER637KOFs6rW0KQ+xt9p74RBTO9RC49obiRBUzE0Fp4Nq/RHLpyGee1Twp/fBwcHNgzYaN4TD46lCsKOAg6oc6INxx9M+Kvvze+DgIUeHU3tTAbs3/uDDxqkY6jgTlVC4s2geByUI/9HaNp6wubGbh42Dqutpxymg0adjGge5NZ1e7UU28m7cTAgXpwMrO1aeE8hV7MEaumZxUEBwb6BxXG9wBOtghgZMHBStmWgc2jzMyI2JY7rneLLP1J0BDwelO3pGGoc6N16al4cDbe2LpkBaIIjTMogDVwu2tY85L7JPQDV75nCQX+sbsjXXGRzAelhJKhYOzOIembO12QK0AlaOl4UD19nM2RqxtnNjODDjYWbQmQgNPawcCAcH5nF3DNKQuJqzwsjBWQF1fDPYdchIyknAc3DgVMdk1yGdhzPp4eDsgzpMhQQTocBgwxAO3HbXN0mDR551QzjQsRltHOwLOK6NgQOTHmdGPYHbPKCur2ZwyqCKB8M4yLWZwYHDzolpHLgAzBh4GDgwAP1h1E+7ODDfxphgM3Dg9huzw46Lc28cp/meOHAcZUxIM5y/BAf2HeOuwHzfQZ7NtKOGGxIZ02vFcefeNA5MhZoZd5ZBDaeGcQpgX+8g+iOyQlCA86/hvgNTbbuGcOCJCbMwxWNQFWcFm4MDjxmYzHyQ3AdnezUHpw7qODRqbWhPJWcRgYMDV97MemoUgXK2F3Bw4DhqMgnqtg7cwctZseLgoDV4kzTIE+wwnpCXBYXnp0ymclAih7U8ysKBvsDkfLQEQxzWciILB544+GrQtaGcLmsXMgsHhjkGrQ2vJnIekLn6tvcu1laCeQ9O0pCLgzbkmKJBfo25LYeHg7a2Dw31HhttquYduGLuK4Bpav3bpaaCNMxdLEwcdMbFTNxmox2uzNMvTBzk2wztLIBVcKZuCjgz66Z7D+45nLUdFRy0tWBgYOjB2w25e6nZuw3h0KN9KyjdDMobdFRw8KEq3ZPSAtr9xT9Gyt94jG7y0O4NBrB07l5DFRzcPHrNjWzb55/xVdjljg9W6dysSw6JKBwpV8Ahh/j07ZwqHOOSFQ6Uq5wQqaNKz3ThFPuo4ygd4FE6joRfoq5l3+IZKpa9JVwZh5yAPdHiDgrkeK/SWVi1s2/r+nlscicDN7yJg0PP8sWemRYLhEbxIKwiDj1p+U12dUREmtkjUqDivSyqp3rp4f6j2Rg8hT69t0D1ULzyEfJ98gAD9aOwpR4pS7HjxMHxnbrObZeUGqho0wPX/EBaA05llz7FaV+hgezjM1rOlvIzxblNYpme8ffuxmA2kOh2DKXxMz4O2hE21dkBx+KKpZ7/7pLPce7+iXUTS3ngB3qIDOTCUPfstU2sm4zi3ZNTFt2X9xDpopxCQQQT916mmLcYVYS3TJ4N+6VAokJJcomRyjlrjTjS+78ehn3xJVPFom33h/7bZMaqx32a+Bea0XsyXnX0o9e3be8SsKm8678K/cMT0V1MY8W/Qi8izkp9/VwWePgvzHnT4PRke9g7GKs33D6RtMpYO7IpQVDlKjiNyYi5JokLK74AQUWyUKAxcTdrkfZNRcF5e/0ytxN6HWC4ZLn1t8xElPlcBBywO0IafpRj3aOZy+1L/TMIpSIYXDgO6uryo05NpStbJ+rIXzya94a7ilAcnLYJWttTtbivAWWS+0ZDkzthOJu08iALVgH6GvTKV+inw06RhuDQSVouZNrbZl6suxe4kkun8LnQiV0wjoAmtxgcVa2uC/5Gos1gZyWI2MN4AnF8ljZW2HykUo10xfZ62LKnYD7lKdDegnDOJQ8SnjSqNOu+uSp6I+fh10RUZK4yqLMF4Mg7dqQk2HKz1RU80e56qxllEiClCVzNluMIbzB9ebuRZyWN1Wq7dV7f3Kyft9rVpcgrNmWxpU0k73JSHIFXAVo0+uUMgpsTsaTeVYYj9CrR3pAGBQXpnqTH4WQ4pCcPrGdapI7royXy9dqnEfmBLHiU4FBXazn5C1oH66g6R76R6yrvUB7JvFWMQ69mHzmW5czTWrb0f8uEq4YvsLjML1jODfmh2DiEOPSSaY/GshbmaD1xrouVyX+17WXeq93HI3SSIpwK+cObMY21YPnaR8d95bhqf0BxOandcu7wz4XBiQiHFHk3LU/Is6O1gQRj3QuNZeWf8G9E3UeAQ5r7KW+9yvH5A41fyTDTEOQcrkDt+Sv8O8Gb9OOQEewZlOeW6PPXOe5VNjJV6oKib10vAGonb9Pvivw4aEtUbs6BNNZC/lZQ6Y6G75gQRojXeVy79Qv92p/88eGQYq0FCytPeuREuzEHVXG4e5MnldPhx2duFIcENzeOReWMBOsGbtyhdMvqWBXxN5B8Hwkq/4k/E4aDE0y3/gLdIgUObqy60rcYLImmvDno0gI6L/VuBAfHfvO0sV/KJC7zVXvcr6NarsmSCz/z1MynLxN3H/IGCQ6eZYhhvDJvcKFA3Wpkx11uS7PBvwWGNtEC7j7kRi2Mg434p6xIz+DIGICqaEWYOjfPO/ISbh1x04xNA/tW7IMQDo5uLiSmNi1V3kBjpPNqQ2J4laVqPfC71OakTTN5lb/hh/FOa4SDMzc+H00bSDQEIe1267Vqc6lRXnZVbiw1q7X6p9Dk71NA03gi5laT4ZRJqYGFekPqSBDzxNWlFVYvDXZkOGja9Du0VK/gR9Tw8TU/kjg0/CLR32yIcXCwdhOBxrW4/N13fTBzj1FgfHOFihAHNc5loB+ARTt3mlrIhYliEZ7yaCa5IcLBPWcU6TVNgR4lYQJHFzeRYVzhqakIB8XnV4yiPZMbBQxDUXQbqc+8CU8Van4cPOZwip4QLdwpu7nLRyfEN/uFnPWOHwcFBMLQM1gLTt66VjC6izvXWtm1WflLWEjVh4OiNX7xY7lEd8/C6YNYv67uFlRYPKHm2aM4aNnuNqpbExE5o+vLCM779/P1KK/KYtHmWSI4aJ4TEt5EQLIen67m/0jaZP7q6ca1MHZ/QcKhzibGQV76Wf2dvdXmeG9+9Pjz6fbq+fLC1eXz1e3T3ePIA4lHMlEedVSMgxwBY8wJk0fluK318o8OjqmcR/jMVYQDFwxkc9CkCc1LP0EctDZ1p8HW3kMOmuKXAQ5a1P3ox4wq7AxqAAdemHyVElsjkc7WGw6yNY2OwLDwPKH8igM3RX1PSc8ZC+K0X3E64KcK4dqHCUUG3RccNIaOPvoZGcJDzwsOXNBJla3hpMHqFAfOqnnzto8WWj7bmOJAxMePfkKWnGvw6GsTHJTBiRlMv7PwSFoZ48Cuc5EqW3N9G5xZrY5xYCo3NPWZMDkw5dIa48AVlptU2RoJDLoeDkrhaJyPvItw5/FwYMCWlqnOmxyIU3ZxoCdI16jjCY08TRcHZj+v04cDF5lqLg7M4aRncvAi5As2XRxofAupw0Hpw60ZCzq2X6nzBMQXzFgwxElbTOAJxQUVC+4sTJ9jIwmDhgV3xKUtxPGEwpxVC+5VSkuGDQpl26oWTLGlLWLzhDx124L7ldI37LhRG1wmbVlwH+tHP5qKUBBat+CmpRR2HYyzb3XA/1I4ilood9i1wI6fP6nEgWHBmgWWeH+nEicPcBYtsNA8l3qcAbS8+TS6AoSTy3ASpgwnycpwkqwMJ8nKcJKsDCfJynCSrAwnycpwkqwMJ8nKcJKsDCfJynCSrAwnycpwkqwMJ8nKcJKsDCfJynCSrAwnycpwkqwMJ8mS4/yXT6H+k+H8mZ9LoeZlOH+BMpwkK8NJsv42nL3wz6RH65aG72lKjlYs+j21adbejBX89RapUqcyvn6h9lf0ny3vKpb/AZkmmaS9IOU8AAAAAElFTkSuQmCC"
            alt="Profile"
            className="profile-icon"
          />
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <Link to="/profile">Profile</Link> {/* Placeholder link */}
            <Link to="#">Sign Out</Link> {/* Placeholder link */}
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar;
