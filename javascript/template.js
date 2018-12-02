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
  <li><a href="events.html">Live Shows</a></li>
  <li><a href="media.html">Social Media</a></li>
  <li><a href="contact.html">Contact Us</a></li>
</ul>
<a href="index.html"><img src="images/sandwich_banner.jpg"
  alt="sandwich_banner" width="100%"></a>
`;


let footerContent= `<div class="contactUs"><a href="contact.html"><h4>Contact Us</h4></a><br><a href= "https://www.facebook.com/immigrantsandwich"><img class="facebookLogo" src="images/facebook.png" alt="Facebook Icon" width="50px"></div>`

document.querySelector('.MainNavigation').innerHTML = navContent;
document.querySelector('footer').innerHTML = footerContent;
