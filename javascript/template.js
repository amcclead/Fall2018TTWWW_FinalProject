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
`;


let footerContent= `<a href= "https://www.facebook.com/immigrantsandwich"><img class="facebookLogo" src="/images/facebook.png" alt="Facebook Icon" width="50px">`

document.querySelector('.MainNavigation').innerHTML = navContent;
document.querySelector('footer').innerHTML = footerContent;
