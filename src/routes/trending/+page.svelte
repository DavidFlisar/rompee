<script lang="ts">
  import { onMount } from 'svelte';

  let games = [];
  let error = '';

  const API_KEY = '1bd8a71355e04f8a92eba544559ab479'; // Rawg API key
  const API_URL = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2024-06-01,2025-02-01&ordering=-added&page_size=7`;

  // Fetch games from the Rawg API
  onMount(async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        console.error('Failed to fetch from Rawg API:', response.statusText);
        throw new Error('Error fetching games');
      }
      const data = await response.json();
      console.log('Rawg API response:', data); // Log the data to check

      if (data.results) {
        // Fetch Steam logo for each game
        games = await Promise.all(data.results.map(fetchSteamLogoFromRawg));
      } else {
        throw new Error('No results found');
      }
    } catch (err) {
      console.error('Error:', err); // Log the error
      error = 'Failed to fetch games. Please try again later.';
    }
  });

  // Fetch Steam logo based on the game's store link
  async function fetchSteamLogoFromRawg(game) {
    try {
      // Fetch stores data for the specific game (using game.id)
      const storeResponse = await fetch(`https://api.rawg.io/api/games/${game.id}/stores?key=${API_KEY}`);
      if (!storeResponse.ok) {
        console.error(`Failed to fetch stores for game: ${game.name}`);
        return { ...game, steamLogo: null };
      }

      const storeData = await storeResponse.json();
      const steamStore = storeData.results?.find(store => store.store_id === 1); // Store ID 1 corresponds to Steam

      if (!steamStore) {
        console.log(`No Steam store found for game: ${game.name}`);
        return { ...game, steamLogo: null };
      }

      const steamUrl = steamStore.url;
      if (!steamUrl) {
        console.error(`No Steam URL found for game: ${game.name}`);
        return { ...game, steamLogo: null };
      }

      const match = steamUrl.match(/app\/(\d+)/);
      if (!match) {
        console.error(`No Steam Game ID found in URL for game: ${game.name}`);
        return { ...game, steamLogo: null };
      }

      const steamGameId = match[1];
      const logoUrl = `https://steamcdn-a.akamaihd.net/steam/apps/${steamGameId}/logo.png`;

      return { ...game, steamLogo: logoUrl };
    } catch (error) {
      console.error('Error fetching Steam logo:', error); // Log the error
      return { ...game, steamLogo: null }; // Fallback in case of an error
    }
  }
</script>

<div class="mx-auto p-4">
  <h1 class="text-3xl font-bold text-center mb-8">Trending Games</h1>

  {#if error}
    <div class="alert alert-error">
      <span>{error}</span>
    </div>
  {/if}

  <div class="flex justify-center gap-8 flex-wrap py-16">
    {#each games as game}
      <a
        href="https://rawg.io/games/{game.slug}"
        alt="{game.name}"
        target="_blank"
        class="card"
      >
        <div class="wrapper">
          <img
            src="{game.background_image || 'https://via.placeholder.com/300x150?text=No+Image'}"
            class="cover-image"
            alt="Cover"
          />
        </div>
        <!-- Replace background image with the Steam logo -->
        {#if game.steamLogo}
          <img
            src="{game.steamLogo}"
            class="title"
            alt="Game Logo"
          />
        {:else}
          <img
            src="https://via.placeholder.com/300x150?text=No+Logo"
            class="title"
            alt=""
          />
        {/if}
      </a>
    {/each}
  </div>
</div>















<style>
  :root {
    --card-height: 600px;  /* Card height */
    --card-width: calc(var(--card-height) / 1.5); /* Card width */
  }

  * {
    box-sizing: border-box;
  }

  body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Align items to the bottom */
  background: #191c29;
  overflow: hidden;
  flex-wrap: wrap; /* Ensure multiple cards stay side-by-side */
  gap: 20px; /* Space between cards */
}

.card {
  width: var(--card-width);
  height: var(--card-height);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 36px;
  perspective: 2500px;
}


  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .wrapper {
    transition: all 0.5s;
    position: absolute;
    height: 120px;
    width: 100%;
    z-index: -1;
  }

  .card:hover .wrapper {
    transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
    box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  }

  .wrapper::before,
  .wrapper::after {
    content: "";
    opacity: 0;
    width: 100%;
    height: 80px;
    transition: all 0.5s;
    position: absolute;
    left: 0;
  }

  .wrapper::before {
    top: 0;
    height: 100%;
    background-image: linear-gradient(
      to top,
      transparent 46%,
      rgba(12, 13, 19, 0.5) 68%,
      rgba(12, 13, 19) 97%
    );
  }

  .wrapper::after {
    bottom: 0;
    opacity: 1;
    background-image: linear-gradient(
      to bottom,
      transparent 46%,
      rgba(12, 13, 19, 0.5) 68%,
      rgba(12, 13, 19) 97%
    );
  }

  .card:hover .wrapper::before,
  .wrapper::after {
    opacity: 1;
  }

  .card:hover .wrapper::after {
    height: 120px;
  }

  /* Title (Steam logo) Styling */
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%; /* Adjust width as needed */
    transition: transform 0.5s;
  }

  .card:hover .title {
    transform: translate(-50%, -50%) translate3d(0%, -50px, 100px);
  }

  /* Game Logo Styling for Hover Effect */
  .game-logo {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: auto;
    transition: transform 0.5s, opacity 0.5s;
  }

  .card:hover .game-logo {
    transform: translateX(-50%) translate3d(0%, -30%, 100px);
    opacity: 1;
  }

  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    :root {
      --card-height: 400px;  /* Smaller card size for mobile */
      --card-width: calc(var(--card-height) / 1.5);
    }

    .card {
      width: var(--card-width);
      height: var(--card-height);
      margin: 10px; /* Further reduce margin */
    }

    .title {
      width: 70%; /* More space for title on mobile */
    }

    .game-logo {
      width: 60%;  /* Smaller game logo size on mobile */
    }
  }

  /* Very small screen adjustments (phones in portrait) */
  @media (max-width: 480px) {
    :root {
      --card-height: 300px;  /* Even smaller card size for very small screens */
      --card-width: calc(var(--card-height) / 1.5);
    }

    .card {
      width: var(--card-width);
      height: var(--card-height);
      margin: 5px;  /* Minimal margin */
    }

    .title {
      width: 80%; /* Title takes more space */
    }

    .game-logo {
      width: 50%;  /* Adjust game logo size */
    }
  }
</style>




