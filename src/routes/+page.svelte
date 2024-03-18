<style>
    #dropdown-menu a {
        display: none;
    }
</style>

<div class="w-screen items-stretch">
        
    <!-- <input id="search-input" class="block w-full px-4 py-2 text-gray-800 border rounded-md  border-gray-300 focus:outline-none" type="text" placeholder="Search items" autocomplete="off"> -->
    <!-- <input type="search" id="search-input" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Items..." required autocomplete="off" />-->
    <!-- <button type="submit" class="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:bg-blue-900">
                        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fill-rule="evenodd"></path> </g></svg>
                    </button>-->
<!--
    <form class="max-w-md mx-auto">   
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Items..." required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z" fill-rule="evenodd"></path> </g></svg>
            </button>
        </div>
    </form>
-->

    <form action="https://www.google.com/search" method="get" target="_blank" class="max-w-lg mx-auto"> 
        <div class="relative">
            <div id="dropdown-menu" class="mt-2 rounded-md shadow-lg bg-base-200 ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                <!-- Search input -->
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="search-input" name="q" class="kbd block w-full p-4 ps-10 text-sm rounded-lg bg-base-100 dark:placeholder-gray-400" placeholder="Search Items..." required autocomplete="off"/>
                </div>
                    <!-- Dropdown content goes here -->
                    <ul class="menu">
                        <li>
                            <a href="https://10web.io/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                10web
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                CodePen
                            </a>
                        </li>
                        <li>
                            <a href="https://tome.app/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                Tome
                            </a>
                        </li>
                        <li>
                            <a href="https://dlpsgame.com/category/ps4/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-accent">
                                    <b>Emulators</b>
                                </div>
                                DLPSGame
                            </a>
                        </li>
                        <li>
                            <a href="https://www.ovagames.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-secondary">
                                    <b>Games</b>
                                </div>
                                Ova Games
                            </a>
                        </li>
                        <li>
                            <a href="https://www.you.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                You.com
                            </a>
                        </li>
                        <li>
                            <a href="https://www.svgrepo.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                Svg Repo
                            </a>
                        </li>
                        <li>
                            <a href="https://monkeytype.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                Monkeytype
                            </a>
                        </li>
                        <li>
                            <a href="https://cine.to/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-success">
                                    <b>Cinema</b>
                                </div>
                                Cine.to
                            </a>
                        </li>
                        <li>
                            <a href="https://playnite.link/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-secondary">
                                    <b>Games</b>
                                </div>
                                Playnite
                            </a>
                        </li>
                        <li>
                            <a href="https://getintopc.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-primary">
                                    <b>Software</b>
                                </div>
                                GetintoPC
                            </a>
                        </li>
                        <li>
                            <a href="https://windowskr.xyz/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-primary">
                                    <b>Software</b>
                                </div>
                                WindowsKR
                            </a>
                        </li>
                        <li>
                            <a href="https://w14.monkrus.ws/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-primary">
                                    <b>Software</b>
                                </div>
                                Monkrus
                            </a>
                        </li>
                        <li>
                            <a href="https://drive.gookie.dev/0:/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-primary">
                                    <b>Software</b>
                                </div>
                                GookieDrive
                            </a>
                        </li>
                        <li>
                            <a href="https://en.taiwebs.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-primary">
                                    <b>Software</b>
                                </div>
                                Taiwebs
                            </a>
                        </li>
                        <li>
                            <a href="https://www.getintomac.net/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-primary">
                                    <b>Software</b>
                                </div>
                                GetintoMAC
                            </a>
                        </li>
                        <li>
                            <a href="https://oceanofdmg.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-primary">
                                    <b>Software</b>
                                </div>
                                OceanOfDMG
                            </a>
                        </li>
                        <li>
                            <a href="https://www.torrentmac.net/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-primary">
                                    <b>Software</b>
                                </div>
                                TorrentMac
                            </a>
                        </li>
                        <li>
                            <a href="https://macoshome.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-primary">
                                    <b>Software</b>
                                </div>
                                MacOSHome
                            </a>
                        </li>
                        <li>
                            <a href="https://cracked-games.org/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-secondary">
                                    <b>Games</b>
                                </div>
                                CrackedGames
                            </a>
                        </li>
                        <li>
                            <a href="https://game3rb.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-secondary">
                                    <b>Games</b>
                                </div>
                                Games3RB
                            </a>
                        </li>
                        <li>
                            <a href="https://igg-games.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-secondary">
                                    <b>Games</b>
                                </div>
                                IGG Games
                            </a>
                        </li>
                        <li>
                            <a href="https://fitgirl-repacks.site/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-secondary">
                                    <b>Games</b>
                                </div>
                                FitGirlRepack
                            </a>
                        </li>
                        <li>
                            <a href="https://dodi-repacks.site/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-secondary">
                                    <b>Games</b>
                                </div>
                                DODIRepack
                            </a>
                        </li>
                        <li>
                            <a href="https://www.skidrowcodex.net/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-secondary">
                                    <b>Games</b>
                                </div>
                                SkidrowCodex
                            </a>
                        </li>
                        <li>
                            <a href="https://www.allkeyshop.com/blog/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-secondary">
                                    <b>Games</b>
                                </div>
                                AllKeyShop
                            </a>
                        </li>
                        <li>
                            <a href="https://nxbrew.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-accent">
                                    <b>Emulators</b>
                                </div>
                                NXBrew
                            </a>
                        </li>
                        <li>
                            <a href="https://orbispatches.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-accent">
                                    <b>Emulators</b>
                                </div>
                                OrbisPatches
                            </a>
                        </li>
                        <li>
                            <a href="https://gamezmedia.net/category/games-ps4/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-accent">
                                    <b>Emulators</b>
                                </div>
                                GamezMedia
                            </a>
                        </li>
                        <li>
                            <a href="https://nopaystation.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-accent">
                                    <b>Emulators</b>
                                </div>
                                NoPayStation
                            </a>
                        </li>
                        <li>
                            <a href="https://romslab.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-accent">
                                    <b>Emulators</b>
                                </div>
                                RomsLab
                            </a>
                        </li>
                        <li>
                            <a href="https://romspure.cc/roms/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-accent">
                                    <b>Emulators</b>
                                </div>
                                RomsPure
                            </a>
                        </li>
                        <li>
                            <a href="https://romsfun.com/roms" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-accent">
                                    <b>Emulators</b>
                                </div>
                                RomsFun
                            </a>
                        </li>
                        <li>
                            <a href="https://vimm.net/vault" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-accent">
                                    <b>Emulators</b>
                                </div>
                                Vimm
                            </a>
                        </li>
                        <li>
                            <a href="https://www.anime-base.net/calendar" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-success">
                                    <b>Cinema</b>
                                </div>
                                AnimeBase
                            </a>
                        </li>
                        <li>
                            <a href="https://uflix.cc/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-success">
                                    <b>Cinema</b>
                                </div>
                                uFlix
                            </a>
                        </li>
                        <li>
                            <a href="https://aniwave.to/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-success">
                                    <b>Cinema</b>
                                </div>
                                AniWave
                            </a>
                        </li>
                        <li>
                            <a href="https://sloflix.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-success">
                                    <b>Cinema</b>
                                </div>
                                SloFlix
                            </a>
                        </li>
                        <li>
                            <a href="https://risanke.net/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-success">
                                    <b>Cinema</b>
                                </div>
                                Risanke
                            </a>
                        </li>
                        <li>
                            <a href="https://ziv-zav.rtvslo.si/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-success">
                                    <b>Cinema</b>
                                </div>
                                ŽivŽav
                            </a>
                        </li>
                        <li>
                            <a href="https://365.rtvslo.si/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-success">
                                    <b>Cinema</b>
                                </div>
                                RTV 365
                            </a>
                        </li>
                        <li>
                            <a href="https://fmoviesz.to/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-success">
                                    <b>Cinema</b>
                                </div>
                                FMovies
                            </a>
                        </li>
                        <li>
                            <a href="https://ihavenotv.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-success">
                                    <b>Cinema</b>
                                </div>
                                IHaveNoTV
                            </a>
                        </li>
                        <li>
                            <a href="https://www.qbittorrent.org/download" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-info">
                                    <b>Torrents</b>
                                </div>
                                qBittorrent
                            </a>
                        </li>
                        <li>
                            <a href="https://bt4gprx.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-info">
                                    <b>Torrents</b>
                                </div>
                                BT4G
                            </a>
                        </li>
                        <li>
                            <a href="https://btdig.com/index.htm" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-info">
                                    <b>Torrents</b>
                                </div>
                                BTDig
                            </a>
                        </li>
                        <li>
                            <a href="https://1337x.to/home/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-info">
                                    <b>Torrents</b>
                                </div>
                                1337x
                            </a>
                        </li>
                        <li>
                            <a href="https://torrentgalaxy.to/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-info">
                                    <b>Torrents</b>
                                </div>
                                TorrentGalaxy
                            </a>
                        </li>
                        <li>
                            <a href="https://yts.mx/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-info">
                                    <b>Torrents</b>
                                </div>
                                YTS
                            </a>
                        </li>
                        <li>
                            <a href="https://rlsbb.ru/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-info">
                                    <b>Torrents</b>
                                </div>
                                ReleaseBB
                            </a>
                        </li>
                        <li>
                            <a href="http://videoteka.org/?p=torrents&pid=10" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-info">
                                    <b>Torrents</b>
                                </div>
                                Videoteka
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/XIU2/TrackersListCollection" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-info">
                                    <b>Torrents</b>
                                </div>
                                TrackersList
                            </a>
                        </li>
                        <li>
                            <a href="https://drive.google.com/drive/u/1/folders/1UuNytBYQHPdhUzHhickl1YDU1tluP6wF" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-info badge-outline">
                                    <b>Documents</b>
                                </div>
                                Old Technology
                            </a>
                        </li>
                        <li>
                            <a href="https://five.sh/files/vaporwave/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-info badge-outline">
                                    <b>Documents</b>
                                </div>
                                Vaporwave
                            </a>
                        </li>
                        <li>
                            <a href="https://patents.google.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-info badge-outline">
                                    <b>Documents</b>
                                </div>
                                Google Patents
                            </a>
                        </li>
                        <li>
                            <a href="https://notesonai.com/Notes+on+AI" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-info badge-outline">
                                    <b>Documents</b>
                                </div>
                                Notes on AI
                            </a>
                        </li>
                        <li>
                            <a href="https://chat.openai.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                ChatGPT
                            </a>
                        </li>
                        <li>
                            <a href="https://bard.google.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                Google Bard
                            </a>
                        </li>
                        <li>
                            <a href="https://www.blackbox.ai/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                BlackBox
                            </a>
                        </li>
                        <li>
                            <a href="https://www.bing.com/search?showconv=1&q=bing%20AI&sf=codex3p&form=MG0AUO" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                Copilot
                            </a>
                        </li>
                        <li>
                            <a href="https://www.notion.so/product/ai" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                Notion AI
                            </a>
                        </li>
                        <li>
                            <a href="https://v0.dev/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                Web Template Generator
                            </a>
                        </li>
                        <li>
                            <a href="https://openai.com/dall-e-2" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                DALL-E 2
                            </a>
                        </li>
                        <li>
                            <a href="https://beta.dreamstudio.ai/generate" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                DreamStudio
                            </a>
                        </li>
                        <li>
                            <a href="https://contentdetector.ai/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                Content Detector
                            </a>
                        </li>
                        <li>
                            <a href="https://undetectable.ai/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                AI Checker
                            </a>
                        </li>
                        <li>
                            <a href="https://aitextconverter.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                Text Converter
                            </a>
                        </li>
                        <li>
                            <a href="https://www.diffchecker.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning">
                                    <b>AI</b>
                                </div>
                                Text Comparator
                            </a>
                        </li>
                        <li>
                            <a href="guides/stremio" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-warning badge-outline">
                                    <b>Guides</b>
                                </div>
                                Streaming Bundle
                            </a>
                        </li>
                        <li>
                            <a href="https://kemono.su/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-success badge-outline">
                                    <b>Leaks</b>
                                </div>
                                Leaked Patreon
                            </a>
                        </li>
                        <li>
                            <a href="https://vag.gg/forums/fivem-ymap/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-success badge-outline">
                                    <b>Leaks</b>
                                </div>
                                FiveM YMAP
                            </a>
                        </li>
                        <li>
                            <a href="https://launcherleaks.net/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-success badge-outline">
                                    <b>Leaks</b>
                                </div>
                                FiveM Leaks
                            </a>
                        </li>
                        <li>
                            <a href="https://tinywow.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                TinyWow
                            </a>
                        </li>
                        <li>
                            <a href="https://uxthemepatcher.com/windows-11-cursors-concept/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                Modern Cursors
                            </a>
                        </li>
                        <li>
                            <a href="https://nilesoft.org/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                Better ContextMenu
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/ShadowWhisperer/Remove-MS-Edge" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                Remove MS Edge
                            </a>
                        </li>
                        <li>
                            <a href="https://www.fullblackscreen.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                Test Screen Colors
                            </a>
                        </li>
                        <li>
                            <a href="https://stirlingsupply.co/en-eur/collections/free-presets" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                DaVinci Presets
                            </a>
                        </li>
                        <li>
                            <a href="https://www.yougetsignal.com/tools/open-ports/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                PortForward Tester
                            </a>
                        </li>
                        <li>
                            <a href="https://ninite.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                Batch Install
                            </a>
                        </li>
                        <li>
                            <a href="https://filldb.info/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                MySQL DummyData
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/SpotX-Official/SpotX" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                Cracked Spotify
                            </a>
                        </li>
                        <li>
                            <a href="https://sharkle.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                Random Websites
                            </a>
                        </li>
                        <li>
                            <a href="https://tiiny.host/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                Project Hoster
                            </a>
                        </li>
                        <li>
                            <a href="https://www.namecheckr.com/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                Brand Checker
                            </a>
                        </li>
                        <li>
                            <a href="https://it-tools.tech/" target="_blank" class="block px-4 py-2 text-base-content cursor-pointer rounded-md">
                                <div class="badge badge-error">
                                    <b>Misc</b>
                                </div>
                                IT Tools
                            </a>
                        </li>
                    <!--<a href="#" class="block px-4 py-2 text-base-content hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Lowercase</a>
                    <a href="#" class="block px-4 py-2 text-base-content hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Camel Case</a>
                    <a href="#" class="block px-4 py-2 text-base-content hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md">Kebab Case</a>-->
                </ul>
            </div>
        </div>
      </form>
</div>

<script lang="ts">
    import { onMount } from 'svelte';

let dropdownMenu: HTMLDivElement | null;
let searchInput: HTMLInputElement | null;
let visibleWebsites = 0;
const maxVisibleWebsites = 5;

onMount(() => {
    dropdownMenu = document.getElementById('dropdown-menu') as HTMLDivElement;
    searchInput = document.getElementById('search-input') as HTMLInputElement;

    if (dropdownMenu && searchInput) {
        const items = dropdownMenu!.querySelectorAll('a');

        items.forEach((item: HTMLAnchorElement, index: number) => {
            if (index < maxVisibleWebsites) {
                item.style.display = 'block';
                visibleWebsites++;
            } else {
                item.style.display = 'none';
            }
        });

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput!.value.toLowerCase();

            visibleWebsites = 0; // Reset the counter

            items.forEach((item: HTMLAnchorElement) => {
                const text = item.textContent?.toLowerCase();
                if (text && text.includes(searchTerm)) {
                    if (visibleWebsites < maxVisibleWebsites) {
                        item.style.display = 'block';
                        visibleWebsites++;
                    } else {
                        item.style.display = 'none';
                    }
                } else {
                    item.style.display = 'none';
                }
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.ctrlKey && event.key === 'k') {
                event.preventDefault(); // Prevent the default behavior (e.g., opening bookmarks in some browsers)
                searchInput!.focus(); // Focus on the search input
            }
        });
    }
});


</script>



<!--import { onMount } from 'svelte';

            let dropdownMenu: HTMLDivElement | null;
            let searchInput: HTMLInputElement | null;
            let visibleWebsites = 3;
            const maxVisibleWebsites = 5;

            onMount(() => {
                dropdownMenu = document.getElementById('dropdown-menu') as HTMLDivElement;
                searchInput = document.getElementById('search-input') as HTMLInputElement;

                if (dropdownMenu && searchInput) {
                    searchInput.addEventListener('input', () => {
                        const searchTerm = searchInput!.value.toLowerCase();
                        const items = dropdownMenu!.querySelectorAll('a');

                        visibleWebsites = 0; // Reset the counter

                        items.forEach((item: HTMLAnchorElement) => {
                            const text = item.textContent?.toLowerCase();
                            if (text && text.includes(searchTerm)) {
                                if (visibleWebsites < maxVisibleWebsites) {
                                    item.style.display = 'block';
                                    visibleWebsites++;
                                } else {
                                    item.style.display = 'none';
                                }
                            } else {
                                item.style.display = 'none';
                            }
                        });
                    });
                }
            });-->