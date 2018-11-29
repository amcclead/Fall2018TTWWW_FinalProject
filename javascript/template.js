let navContent= `<ul>
  <li><a href="index.html">Home</a></li>

    <li><div class="dropdown"><button onclick="myFunction()" class="dropbtn">About</button>
      <div id= "aboutDropdown" class="dropdown-content">
        <a href="About_Us.html">General</a>
        <a href="bios.html">The Crew</a>
        <a href="values.html">Our Values</a>
        <a href="community.html">Our Community</a>
      </div>
    </div></li>

  <li><a href="events.html">Events</a></li>
  <li><a href="media.html">Social Media</a></li>
</ul>
<img src="images/sandwich_banner.jpg"
  alt="sandwich_banner" width="100%">
`;


let footerContent= `<div class="contactUs"><h4>Contact Us</h4><a href="contact.html">Click Here</a><br><a href= "https://www.facebook.com/immigrantsandwich"><img class="facebookLogo" src="images/facebook.png" alt="Facebook Icon" width="50px"></div>`

document.querySelector('.MainNavigation').innerHTML = navContent;
document.querySelector('footer').innerHTML = footerContent;
