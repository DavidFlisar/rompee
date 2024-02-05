
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800&amp;display=swap">

<div class="navbar bg-primary">
    <div class="navbar-start">
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    </div>
    <div class="navbar-center">
      <label class="btn btn-ghost">
        <img class="w-12 h-12" src="src/images/rompeelogo-removebg.png" alt="logo">
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
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex p-20">

    <slot/>


  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a href="/software">Software</a></li>
      <li><a href="/games">Games</a></li>
      <li><a href="/emulators">Emulators</a></li>
      <li><a href="/movieseries">Movies/Series</a></li>
      <li><a href="/torrents">Torrents</a></li>
      <li><a href="/documents">Documents</a></li>
      <li><a href="/ai">AI</a></li>
      <li><a href="/guides">Guides</a></li>
      <li><a href="/leaks">Leaks</a></li>
      <li><a href="/misc">Misc</a></li>
    </ul>
  </div>
</div>