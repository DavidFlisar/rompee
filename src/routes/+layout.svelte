<script>
  import "$lib/input.css";
  import Logo from "$lib/images/rompeelogo1.png";
</script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&amp;display=swap">
<div class="navbar bg-primary">
    <div class="navbar-start">
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      <!-- lg:hidden v classi label eno gor -->
    </div>
    <div class="navbar-center">
      <label class="btn btn-ghost">
        <img class="w-7 h-8" src={Logo} alt="logo">
      </label>
    </div>
    <div class="navbar-end">
      <div class="w-14 h-14 mr-40">
        <div class="dropdown mb-72">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle m-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
            <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default"/></li>
            <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Rompee" value="valentine"/></li>
            <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Nord" value="nord"/></li>
            <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dracula" value="dracula"/></li>
            <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Pastel" value="pastel"/></li>
            <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Forest" value="forest"/></li>
          </ul>
        </div>
      </div>
    </div>
</div>

<div class="drawer lg:drawer-open">
  <!-- lg:drawer-open v classi div eno gor -->
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex p-20">

    <slot/>


  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-44 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li>
        <a href="/software">
          <svg fill="oklch(var(--bc))" width="22px" height="22px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cd-dvd-solid</title> <path d="M18.17,1.92a16,16,0,1,0,16,16A16,16,0,0,0,18.17,1.92ZM26.23,18h1.54a9.61,9.61,0,0,1-9.6,9.53H18V26h.17A8.07,8.07,0,0,0,26.23,18ZM6.05,18H4.45v-.08A13.72,13.72,0,0,1,18,4.21v1.6A12.13,12.13,0,0,0,6.05,17.92Zm4.05,0H8.56v-.08A9.61,9.61,0,0,1,18,8.32V9.86a8.07,8.07,0,0,0-7.9,8.06Zm4.32-.08a3.75,3.75,0,1,1,3.75,3.75A3.75,3.75,0,0,1,14.42,17.92Zm3.75,13.71H18V30h.17A12.13,12.13,0,0,0,30.28,18h1.6A13.73,13.73,0,0,1,18.17,31.63Z" class="clr-i-solid clr-i-solid-path-1"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>
          <b>Software</b>
        </a>
      </li>
      <li>
        <a href="/games">
          <svg fill="oklch(var(--bc))" width="25px" height="25px" viewBox="-5.6 -5.6 67.20 67.20" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 7.3904 46.8061 C 10.0478 46.8061 11.8711 45.8363 13.5005 43.8190 L 17.0114 39.5709 C 17.5158 38.9696 18.0977 38.6787 18.6796 38.6787 L 37.3206 38.6787 C 37.9022 38.6787 38.4842 38.9696 38.9692 39.5709 L 42.4802 43.8190 C 44.1288 45.8363 45.9327 46.8061 48.6098 46.8061 C 53.0321 46.8061 56 43.8577 56 39.3188 C 56 37.3790 55.5344 35.1484 54.7975 32.6461 C 53.6141 28.6697 51.5388 23.2578 49.5406 19.0680 C 47.8920 15.5765 47.0383 13.9859 42.9263 13.0548 C 39.2600 12.2208 34.1974 11.6582 27.9903 11.6582 C 21.7832 11.6582 16.7205 12.2208 13.0738 13.0548 C 8.9615 13.9859 8.1081 15.5765 6.4399 19.0680 C 4.4614 23.2578 2.3859 28.6697 1.2026 32.6461 C .4461 35.1484 0 37.3790 0 39.3188 C 0 43.8577 2.9484 46.8061 7.3904 46.8061 Z M 12.2979 25.3333 C 12.2979 24.3635 12.8798 23.7621 13.9079 23.7621 L 17.3800 23.7621 L 17.3800 20.3676 C 17.3800 19.3783 17.9619 18.7771 18.9318 18.7771 C 19.8823 18.7771 20.4448 19.3783 20.4448 20.3676 L 20.4448 23.7621 L 23.7423 23.7621 C 24.8285 23.7621 25.4687 24.3635 25.4687 25.3333 C 25.4687 26.3420 24.8285 26.9627 23.7423 26.9627 L 20.4448 26.9627 L 20.4448 30.3572 C 20.4448 31.3465 19.8823 31.9672 18.9318 31.9672 C 17.9619 31.9672 17.3800 31.3465 17.3800 30.3572 L 17.3800 26.9627 L 13.9079 26.9627 C 12.8798 26.9627 12.2979 26.3420 12.2979 25.3333 Z M 37.0683 22.3074 C 37.0683 20.7168 38.3098 19.4947 39.8614 19.4947 C 41.4326 19.4947 42.6546 20.7168 42.6546 22.3074 C 42.6546 23.8785 41.4326 25.0812 39.8614 25.0812 C 38.3098 25.0812 37.0683 23.8785 37.0683 22.3074 Z M 31.3654 28.0489 C 31.3654 26.4584 32.5875 25.2363 34.1587 25.2363 C 35.7298 25.2363 36.9325 26.4584 36.9325 28.0489 C 36.9325 29.6201 35.7298 30.8422 34.1587 30.8422 C 32.5875 30.8422 31.3654 29.6201 31.3654 28.0489 Z"></path></g></svg>
          <b>Games</b>
        </a>
      </li>
      <li>
        <a href="/emulators">
          <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" width="22px" height="22px" fill="oklch(var(--bc))"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} </style> <path d="M17,18c-1.2,0-2.3,0.3-3.3,1H9.3c-1-0.7-2.1-1-3.3-1c-3.3,0-6,2.7-6,6s2.7,6,6,6c1.2,0,2.3-0.3,3.3-1h4.4c1,0.7,2.1,1,3.3,1 c3.3,0,6-2.7,6-6S20.3,18,17,18z M8,25H7v1c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h1v-1c0-0.6,0.4-1,1-1 s1,0.4,1,1v1h1c0.6,0,1,0.4,1,1S8.6,25,8,25z M16.9,25.4c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.3,0.2S16.1,26,16,26 c-0.1,0-0.3,0-0.4-0.1c-0.1,0-0.2-0.1-0.3-0.2C15.1,25.5,15,25.3,15,25c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.1-0.2,0.2-0.3 c0.3-0.3,0.7-0.4,1.1-0.2c0.1,0,0.2,0.1,0.3,0.2c0.2,0.2,0.3,0.5,0.3,0.7C17,25.1,17,25.3,16.9,25.4z M18.9,23.4 c-0.1,0.1-0.1,0.2-0.2,0.3C18.5,23.9,18.3,24,18,24c-0.1,0-0.3,0-0.4-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.2-0.3 c0-0.1-0.1-0.3-0.1-0.4c0-0.3,0.1-0.5,0.3-0.7c0.1-0.1,0.2-0.2,0.3-0.2C17.8,22,18,22,18.2,22c0.1,0,0.1,0,0.2,0.1 c0.1,0,0.1,0,0.2,0.1c0,0,0.1,0.1,0.1,0.1c0.2,0.2,0.3,0.5,0.3,0.7C19,23.1,19,23.3,18.9,23.4z"></path> <path d="M29,2h-3c-0.2,0-0.4,0.1-0.6,0.2l-4.3,3.4C20.4,6.2,20,7,20,8v8.6c2.9,1.2,5,4.1,5,7.4c0,1.6-0.5,3.1-1.3,4.4l1.7,1.4 c0.2,0.1,0.4,0.2,0.6,0.2h3c1.7,0,3-1.3,3-3V5C32,3.3,30.7,2,29,2z M28.9,25.4c-0.1,0.1-0.1,0.2-0.2,0.3C28.5,25.9,28.3,26,28,26 c-0.1,0-0.3,0-0.4-0.1c-0.1,0-0.2-0.1-0.3-0.2C27.1,25.5,27,25.3,27,25c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.1-0.2,0.2-0.3 c0.3-0.3,0.7-0.4,1.1-0.2c0.1,0,0.2,0.1,0.3,0.2c0.2,0.2,0.3,0.5,0.3,0.7C29,25.1,29,25.3,28.9,25.4z M29,15c0,0.6-0.4,1-1,1 s-1-0.4-1-1V6c0-0.6,0.4-1,1-1s1,0.4,1,1V15z"></path> </g></svg>
          <b>Emulators</b>
        </a>
      </li>
      <li>
        <a href="/cinema">
          <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 3h18v18H3V3zm2 2v2h2V5H5zm4 0v6h6V5H9zm8 0v2h2V5h-2zm2 4h-2v2h2V9zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2zm-4 2v-6H9v6h6zm-8 0v-2H5v2h2zm-2-4h2v-2H5v2zm0-4h2V9H5v2z" fill="oklch(var(--bc))"></path> </g></svg>
          <b>Cinema</b>
        </a>
      </li>
      <li>
        <a href="/torrents">
          <svg fill="oklch(var(--bc))" width="22px" height="22px" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"></path></g></svg>
          <b>Torrents</b>
        </a>
      </li>
      <li>
        <a href="/documents">
          <svg fill="oklch(var(--bc))" width="20px" height="20px" viewBox="0 0 512 512" id="_x30_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M416,160h-40c-33.137,0-60-26.863-60-60V60c0-33.137-26.863-60-60-60H96C62.863,0,36,26.863,36,60v392 c0,33.137,26.863,60,60,60h320c33.137,0,60-26.863,60-60V220C476,186.863,449.137,160,416,160z M366,432H146 c-16.569,0-30-13.431-30-30s13.431-30,30-30h220c16.569,0,30,13.431,30,30S382.569,432,366,432z M366,312H146 c-16.569,0-30-13.431-30-30s13.431-30,30-30h220c16.569,0,30,13.431,30,30S382.569,312,366,312z"></path></g></svg>
          <b>Documents</b>
        </a>
      </li>
      <li>
        <a href="/ai">
          <svg fill="oklch(var(--bc))" width="22px" height="22px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M208,512a24.84,24.84,0,0,1-23.34-16l-39.84-103.6a16.06,16.06,0,0,0-9.19-9.19L32,343.34a25,25,0,0,1,0-46.68l103.6-39.84a16.06,16.06,0,0,0,9.19-9.19L184.66,144a25,25,0,0,1,46.68,0l39.84,103.6a16.06,16.06,0,0,0,9.19,9.19l103,39.63A25.49,25.49,0,0,1,400,320.52a24.82,24.82,0,0,1-16,22.82l-103.6,39.84a16.06,16.06,0,0,0-9.19,9.19L231.34,496A24.84,24.84,0,0,1,208,512Zm66.85-254.84h0Z"></path><path d="M88,176a14.67,14.67,0,0,1-13.69-9.4L57.45,122.76a7.28,7.28,0,0,0-4.21-4.21L9.4,101.69a14.67,14.67,0,0,1,0-27.38L53.24,57.45a7.31,7.31,0,0,0,4.21-4.21L74.16,9.79A15,15,0,0,1,86.23.11,14.67,14.67,0,0,1,101.69,9.4l16.86,43.84a7.31,7.31,0,0,0,4.21,4.21L166.6,74.31a14.67,14.67,0,0,1,0,27.38l-43.84,16.86a7.28,7.28,0,0,0-4.21,4.21L101.69,166.6A14.67,14.67,0,0,1,88,176Z"></path><path d="M400,256a16,16,0,0,1-14.93-10.26l-22.84-59.37a8,8,0,0,0-4.6-4.6l-59.37-22.84a16,16,0,0,1,0-29.86l59.37-22.84a8,8,0,0,0,4.6-4.6L384.9,42.68a16.45,16.45,0,0,1,13.17-10.57,16,16,0,0,1,16.86,10.15l22.84,59.37a8,8,0,0,0,4.6,4.6l59.37,22.84a16,16,0,0,1,0,29.86l-59.37,22.84a8,8,0,0,0-4.6,4.6l-22.84,59.37A16,16,0,0,1,400,256Z"></path></g></svg>
          <b>AI</b>
        </a>
      </li>
      <li>
        <a href="/guides">
          <svg fill="oklch(var(--bc))" width="23px" height="23px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.012 18H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19c0-.101.009-.191.024-.273.112-.576.584-.717.988-.727zM8.648 7.642a2.224 2.224 0 0 1 3.125 0l.224.219.223-.219a2.225 2.225 0 0 1 3.126 0 2.129 2.129 0 0 1 0 3.069L11.998 14l-3.349-3.289a2.128 2.128 0 0 1-.001-3.069z"></path></g></svg>
          <b>Guides</b>
        </a>
      </li>
      <li>
        <a href="/leaks">
          <svg fill="oklch(var(--bc))" width="22px" height="22px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M174.03662,47.75049a254.574,254.574,0,0,0-41.44873-38.3042,7.99885,7.99885,0,0,0-9.17578,0,254.574,254.574,0,0,0-41.44873,38.3042C54.51074,79.3208,40,112.60352,40,144a88,88,0,0,0,176,0C216,112.60352,201.48926,79.3208,174.03662,47.75049Zm9.17578,105.646a55.85216,55.85216,0,0,1-45.76562,45.7085,8,8,0,1,1-2.6543-15.77832,39.8386,39.8386,0,0,0,32.64453-32.604,8.00019,8.00019,0,0,1,15.77539,2.67382Z"></path> </g></svg>
          <b>Leaks</b>
        </a>
      </li>
      <li>
        <a href="/misc">
          <svg width="22px" height="22px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="oklch(var(--bc))"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>random-filled</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="oklch(var(--bc))" transform="translate(46.976875, 46.976875)"> <path d="M379.689791,38.3564581 L379.689791,379.689791 L38.3564581,379.689791 L38.3564581,38.3564581 L379.689791,38.3564581 Z M283.689791,251.689791 C266.016679,251.689791 251.689791,266.016679 251.689791,283.689791 C251.689791,301.362903 266.016679,315.689791 283.689791,315.689791 C301.362903,315.689791 315.689791,301.362903 315.689791,283.689791 C315.689791,266.016679 301.362903,251.689791 283.689791,251.689791 Z M209.023125,177.023125 C191.350013,177.023125 177.023125,191.350013 177.023125,209.023125 C177.023125,226.696237 191.350013,241.023125 209.023125,241.023125 C226.696237,241.023125 241.023125,226.696237 241.023125,209.023125 C241.023125,191.350013 226.696237,177.023125 209.023125,177.023125 Z M134.356458,102.356458 C116.683346,102.356458 102.356458,116.683346 102.356458,134.356458 C102.356458,152.02957 116.683346,166.356458 134.356458,166.356458 C152.02957,166.356458 166.356458,152.02957 166.356458,134.356458 C166.356458,116.683346 152.02957,102.356458 134.356458,102.356458 Z" id="Combined-Shape" transform="translate(209.023125, 209.023125) rotate(-345.000000) translate(-209.023125, -209.023125) "> </path> </g> </g> </g></svg>
          <b>Misc</b>
        </a>
      </li>
    </ul>
  </div>
</div>