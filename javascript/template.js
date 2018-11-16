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

let footerContent= `<a href= "https://www.facebook.com/immigrantsandwich/?hc_ref=ARTxAhBZs3E2KV7mUAvh3QJxdRXtIpwGAX2DeyGGkTLkc3SIQxsQjJJdGuas2ngPjBI&__xts__%5B0%5D=68.ARAR1RKSlJ1NL0vkE8N4qxST-DNOLqTGXm5vRSX7Fmb90GnV6ik_tv7I_PyiXohKpg4tCKaSU9dkttKIQECuR1joJMU-0NauLM825Jb_5rMJzhjEit4_RKX48qf2ZJHl5dheblbk2_-nvEBhy4DIJtgx5fOYJVKFyxbWjgdez6xJsyJiruqbTDkVsu06d-HMfMWy8Wcz4Rqmq24wUciidHJp2r5cyIkiWTeMmY4ktJXdzRxna969zGEPsqeHOPo6kuXv-PHwNrsYYgrfqQYP0luFsNGX0RP-la0YD2LFGI3rYIOIeIAuMAyaGOoJonajqNNHbxSuWGydA9J7vHhHPP1gu-2xPzqcFfVccPTF3g0&__tn__=kC-R"><img class="facebookLogo" src="/images/facebook.png" alt="Facebook Icon" width="50px">`

document.querySelector('.MainNavigation').innerHTML = navContent;
document.querySelector('footer').innerHTML = footerContent;
