<script lang="ts">
	import Netflix from '$lib/images/netflix.png';
	import IMDB from '$lib/images/imdb.jpg';
	import TMDB from '$lib/images/tmdb.png';
	import Torrentio from '$lib/images/torrentio.png';
	import Christmas from '$lib/images/christmas.jpg';
</script>

<div class="w-screen items-stretch">
	<div class="m-2">
		<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
			<div class="collapse-title text-xl font-medium">Streaming Catalogs</div>
			<div class="collapse-content">
				<p>Enhance your streaming experience with this versatile add-on:</p>
				<ul>
					<li>
						-> Streaming Integration: Access popular catalogs like Netflix, Hulu, and Disney+.
					</li>
					<li>-> Top-Torrented Movies: View the top-seeded movies on torrent sites.</li>
					<li>
						-> Christmas Spirit: Enjoy a curated selection of Christmas movies for the holiday
						season.
					</li>
				</ul>
				<p>
					Additionally, this add-on provides access to the most-watched IMDb movies and series,
					along with various other categories. With a free API, it offers advanced search
					capabilities and detailed display of movies, shows, and their ratings, similar to IMDb.
				</p>
				<a
					class="btn btn-accent card card-normal h-32 m-3 md:w-3/4 xl:w-4/12"
					href="https://app.strem.io/shell-v4.4/#/addons/community/all?addon=https%3A%2F%2F7a82163c306e-stremio-netflix-catalog-addon.baby-beamup.club%2FbmZ4LGRucCxhbXAsYXRwLGhibSxwbXAscGNwLGhsdSxjdHMsbWdsLGZtbixkcGUsc3N0Ojo6MTY5NDk4NjE5MTIyMQ%253D%253D%2Fmanifest.json"
					target="_blank"
				>
					<img src={Netflix} alt="Netflix" class="w-28 h-28 m-3 rounded-lg" />
					<div>
						<h1 class="font-bold text-2xl">Popular Catalogs</h1>
					</div>
					<div>
						<div class="badge badge-error m-2">Download</div>
					</div>
				</a>
				<a
					class="btn btn-accent card card-normal h-32 m-3 md:w-3/4 xl:w-4/12"
					href="https://app.strem.io/shell-v4.4/#/addons/community/all?addon=https%3A%2F%2F1fe84bc728af-imdb-catalogs.baby-beamup.club%2Fmanifest.json"
					target="_blank"
				>
					<img src={IMDB} alt="IMDB" class="w-28 h-28 m-3 rounded-lg" />
					<div>
						<h1 class="font-bold text-2xl">IMDB Catalog</h1>
					</div>
					<div>
						<div class="badge badge-error m-2">Download</div>
					</div>
				</a>
				<a
					class="btn btn-accent card card-normal h-32 m-3 md:w-3/4 xl:w-4/12"
					href="https://app.strem.io/shell-v4.4/#/addons/community/all?addon=https%3A%2F%2F94c8cb9f702d-tmdb-addon.baby-beamup.club%2Fmanifest.json"
					target="_blank"
				>
					<img src={TMDB} alt="TMDB" class="w-28 h-28 m-3 rounded-lg" />
					<div>
						<h1 class="font-bold text-2xl">TMDB Catalog</h1>
					</div>
					<div>
						<div class="badge badge-error m-2">Download</div>
					</div>
				</a>
				<a
					class="btn btn-accent card card-normal h-32 m-3 md:w-3/4 xl:w-4/12"
					href="https://app.strem.io/shell-v4.4/#/addons/community/all?addon=https%3A%2F%2Ftorrent-catalogs.strem.fun%2Fmanifest.json"
					target="_blank"
				>
					<img src={Torrentio} alt="Torrentio" class="w-28 h-28 m-3 rounded-lg" />
					<div>
						<h1 class="font-bold text-2xl">Torrent Catalog</h1>
					</div>
					<div>
						<div class="badge badge-error m-2">Download</div>
					</div>
				</a>
				<a
					class="btn btn-accent card card-normal h-32 m-3 md:w-3/4 xl:w-4/12"
					href="https://app.strem.io/shell-v4.4/#/addons/community/all?addon=https%3A%2F%2Fcinemeta-catalogs.strem.io%2Fchristmaspopular%2Fmanifest.json"
					target="_blank"
				>
					<img src={Christmas} alt="Christmas" class="w-28 h-28 m-3 rounded-lg" />
					<div>
						<h1 class="font-bold text-2xl">Christmas Catalog</h1>
					</div>
					<div>
						<div class="badge badge-error m-2">Download</div>
					</div>
				</a>
			</div>
		</div>
	</div>
	<div class="m-2">
		<div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-200">
			<div class="collapse-title text-xl font-medium">IN DEVELOPMENT</div>
			<div class="collapse-content">
				<a
					class="btn btn-accent card card-normal h-32 m-3 md:w-3/4 xl:w-4/12"
					href="https://app.strem.io/shell-v4.4/#/addons/community/all?addon=https%3A%2F%2Fcinemeta-catalogs.strem.io%2Fchristmaspopular%2Fmanifest.json"
					target="_blank"
				>
					<img src={Christmas} alt="Christmas" class="w-28 h-28 m-3 rounded-lg" />
					<div>
						<h1 class="font-bold text-2xl">Christmas Catalog</h1>
					</div>
					<div>
						<div class="badge badge-error m-2">Download</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>

