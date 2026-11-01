
/* ==============ALTRON MUSIC - JAVASCRIPT================*/

// HTML elements
const audio = document.getElementById("audio");
const trackList = document.getElementById("trackList");
const searchInput = document.getElementById("searchInput");

const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const shuffleBtn = document.getElementById("shuffleBtn");
const repeatBtn = document.getElementById("repeatBtn");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

const playerTitle = document.getElementById("playerTitle");
const playerArtist = document.getElementById("playerArtist");
const playerCover = document.getElementById("playerCover");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const playerLike = document.getElementById("playerLike");
const favouriteStrip = document.getElementById("favouriteStrip");
const toast = document.getElementById("toast");


// ===========MUSIC DATA==========

// Demo audio streams.
// Replace these URLs with audio files you own or have permission to use.


const songs = [
    {
        id: 1,
        title: "Afgan Jalebi",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "party",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Afgan_Jalebi.mp3"
    },
    {
        id: 2,
        title: "Apna Bana Le",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Apna bana le.mp3"
    },
    {
        id: 3,
        title: "Arz Kia Hai",
        artist: "Unknown Artist",
        album: "Coke Studio",
        category: "chill",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Arz-Kia-hai-coke-studio.mp3"
    },
    {
        id: 4,
        title: "Barsat Banjare",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Barsat-banjare.mp3"
    },
    {
        id: 5,
        title: "Chaleya",
        artist: "Unknown Artist",
        album: "Jawan",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Chaleya-jawan.mp3"
    },
    {
        id: 6,
        title: "Dare Nijat",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "chill",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Dare_nijat.mp3"
    },
    {
        id: 7,
        title: "Deewaniyat Title Track",
        artist: "Unknown Artist",
        album: "Deewaniyat",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Deewaniayat-title-track.mp3"
    },
    {
        id: 8,
        title: "Dil Diyan Gallan",
        artist: "Unknown Artist",
        album: "Tiger Zinda Hai",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Dil-diya-gallan.mp3"
    },
    {
        id: 9,
        title: "Gahra Hua",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "chill",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Gahra hua.mp3"
    },
    {
        id: 10,
        title: "Gehra Hua",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "chill",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Gehra Hua.mp3"
    },
    {
        id: 11,
        title: "Jaan Se Guzarte Hain",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Jaan-se-gujarte-hain.mp3"
    },
    {
        id: 12,
        title: "Jaiye Sajna",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "sad",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Jaiye-sajna.mp3"
    },
    {
        id: 13,
        title: "Kabira",
        artist: "Arijit Singh",
        album: "Yeh Jawaani Hai Deewani",
        category: "chill",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/kabira.mp3"
    },
    {
        id: 14,
        title: "Kaun Tujhe",
        artist: "Unknown Artist",
        album: "M.S. Dhoni: The Untold Story",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Kaun Tujhe.mp3"
    },
    {
        id: 15,
        title: "Khairiyat",
        artist: "Unknown Artist",
        album: "Chhichhore",
        category: "sad",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/khairiyat.mp3"
    },
    {
        id: 16,
        title: "Kya Fitoor",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "sad",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/kya-fitoor-door-raha-kyu-jaye-na.mp3"
    },
    {
        id: 17,
        title: "Moosetape",
        artist: "Sidhu Moose Wala",
        album: "Moosetape",
        category: "party",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Moosetape.mp3"
    },
    {
        id: 18,
        title: "Moosetape Copy",
        artist: "Sidhu Moose Wala",
        album: "Moosetape",
        category: "party",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Moosetape - Copy.mp3"
    },
    {
        id: 19,
        title: "Navjot Ahuja",
        artist: "Navjot Ahuja",
        album: "Unknown Album",
        category: "chill",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Navjot_Ahuja.mp3"
    },
    {
        id: 20,
        title: "Navjot Ahuja",
        artist: "Navjot Ahuja",
        album: "Unknown Album",
        category: "chill",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Navjot_Ahuja_.mp3"
    },
    {
        id: 21,
        title: "Noor Khan",
        artist: "Noor Khan",
        album: "Unknown Album",
        category: "chill",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Noor_Khan.mp3"
    },
    {
        id: 22,
        title: "Parvati Hanuman",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "devotional",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Parvati Hanuman.mp3"
    },
    {
        id: 23,
        title: "Raanjhan",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Raanjhan.mp3"
    },
    {
        id: 24,
        title: "Rahman Dakait BQM",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "party",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/rahman dakait bqm.mp3"
    },
    {
        id: 25,
        title: "Ramayana Judi Jodi Song",
        artist: "Unknown Artist",
        album: "Ramayana",
        category: "devotional",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Ramayana Judi Jodi Song.mp3"
    },
    {
        id: 26,
        title: "Ranabali",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "party",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/ranabali.mp3"
    },
    {
        id: 27,
        title: "Sahiba",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Sahiba.mp3"
    },
    {
        id: 28,
        title: "Saiyaara",
        artist: "Unknown Artist",
        album: "Saiyaara",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Saiyaara.mp3"
    },
    {
        id: 29,
        title: "Sajni",
        artist: "Unknown Artist",
        album: "Laapataa Ladies",
        category: "sad",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/sajni.mp3"
    },
    {
        id: 30,
        title: "Shararat",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "party",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Shararat.mp3"
    },
    {
        id: 31,
        title: "Shiv Kailash",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "devotional",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Shiv_Kailash.mp3"
    },
    {
        id: 32,
        title: "Tera Chehra",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Tera chehra.mp3"
    },
    {
        id: 33,
        title: "Tum Ho Toh",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/tum ho toh.mp3"
    },
    {
        id: 34,
        title: "Tum Se",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/tum se kirti senon.mp3"
    },
    {
        id: 35,
        title: "Udariaan",
        artist: "Satinder Sartaaj",
        album: "Seasons of Sartaaj",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Udariaan.mp3"
    },
    {
        id: 36,
        title: "Vaari Javaan",
        artist: "Unknown Artist",
        album: "Unknown Album",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Vaari Javaan.mp3"
    },
    {
        id: 37,
        title: "Zara Sa",
        artist: "Unknown Artist",
        album: "Jannat",
        category: "romantic",
        duration: "00:00",
        cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
        src: "Music/Zara sa.mp3"
    }
];



// ===========PLAYER VARIABLES==========

let currentSongIndex = -1;
let currentFilter = "all";
let isShuffle = false;
let isRepeat = false;

let favourites = JSON.parse(
    localStorage.getItem("altronFavourites") || "[]"
);


// ================TOAST NOTIFICATION============

let toastTimer;

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// ========FORMAT TIME==========

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) {
        return "0:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}


// ============DISPLAY SONGS==============

function displaySongs(list = songs) {

    trackList.innerHTML = `
        <div class="track-row track-header">
            <span>#</span>
            <span>Title</span>
            <span>Album</span>
            <span>Duration</span>
            <span></span>
        </div>
    `;

    if (list.length === 0) {
        trackList.innerHTML += `
            <div class="no-results">
                No songs found. Try another search.
            </div>
        `;

        return;
    }

    list.forEach((song, index) => {

        const originalIndex = songs.findIndex(
            item => item.id === song.id
        );

        const isLiked = favourites.includes(song.id);

        const isPlaying = currentSongIndex === originalIndex;

        const row = document.createElement("div");

        row.className = `track-row track-item ${isPlaying ? "playing" : ""}`;

        row.innerHTML = `
            <span class="track-number">
                ${isPlaying && !audio.paused ? "♫" : index + 1}
            </span>

            <div class="track-title">
                <img
                    src="${song.cover}"
                    alt="${song.title}"
                    class="track-cover"
                >

                <div class="track-info">
                    <strong>${song.title}</strong>
                    <small>${song.artist}</small>
                </div>
            </div>

            <span class="track-album">${song.album}</span>

            <span class="track-duration">${song.duration}</span>

            <div class="track-actions">
                <button
                    class="track-like ${isLiked ? "liked" : ""}"
                    data-like="${song.id}"
                    aria-label="Add ${song.title} to favourites"
                >
                    ${isLiked ? "♥" : "♡"}
                </button>
            </div>
        `;

        // Play song when row is clicked
        row.addEventListener("click", (event) => {

            if (event.target.closest(".track-like")) {
                return;
            }

            playSong(originalIndex);
        });

        trackList.appendChild(row);
    });
}


// ==========PLAY SONG===========

function playSong(index) {

    if (index < 0 || index >= songs.length) {
        return;
    }

    currentSongIndex = index;

    const song = songs[currentSongIndex];

    audio.src = song.src;

    playerTitle.textContent = song.title;
    playerArtist.textContent = song.artist;

    playerCover.style.backgroundImage = `url("${song.cover}")`;
    playerCover.style.backgroundSize = "cover";
    playerCover.style.backgroundPosition = "center";
    playerCover.textContent = "";

    audio.play()
        .then(() => {
            playBtn.textContent = "Ⅱ";
            displaySongs(getFilteredSongs());
            updatePlayerLike();
        })
        .catch(() => {
            showToast("Unable to play this audio. Try again.");
        });
}


// ==========PLAY AND PAUSE=========== 

function togglePlay() {

    if (currentSongIndex === -1) {
        playSong(0);
        return;
    }

    if (audio.paused) {

        audio.play()
            .then(() => {
                playBtn.textContent = "Ⅱ";
            })
            .catch(() => {
                showToast("Unable to play audio.");
            });

    } else {

        audio.pause();
        playBtn.textContent = "▶";

    }
}

playBtn.addEventListener("click", togglePlay);


// ===========NEXT SONG======== 

function nextSong() {

    if (songs.length === 0) return;

    let nextIndex;

    if (isShuffle && songs.length > 1) {

        do {
            nextIndex = Math.floor(Math.random() * songs.length);
        } while (nextIndex === currentSongIndex);

    } else {

        nextIndex = (currentSongIndex + 1) % songs.length;

    }

    playSong(nextIndex);
}

nextBtn.addEventListener("click", nextSong);


// ===========PREVIOUS SONG========== 

function previousSong() {

    if (audio.currentTime > 3) {
        audio.currentTime = 0;
        return;
    }

    let previousIndex =
        (currentSongIndex - 1 + songs.length) % songs.length;

    playSong(previousIndex);
}

prevBtn.addEventListener("click", previousSong);


// ==========SONG ENDED========== 

audio.addEventListener("ended", () => {

    if (isRepeat) {
        audio.currentTime = 0;
        audio.play();
    } else {
        nextSong();
    }

});

audio.addEventListener("play", () => {
    playBtn.textContent = "Ⅱ";
    displaySongs(getFilteredSongs());
});

audio.addEventListener("pause", () => {
    playBtn.textContent = "▶";
    displaySongs(getFilteredSongs());
});


// ===========SHUFFLE BUTTON=========== 

shuffleBtn.addEventListener("click", () => {

    isShuffle = !isShuffle;

    shuffleBtn.classList.toggle("active", isShuffle);

    showToast(
        isShuffle ? "Shuffle enabled" : "Shuffle disabled"
    );

});


// ==============REPEAT BUTTON=================

repeatBtn.addEventListener("click", () => {

    isRepeat = !isRepeat;

    repeatBtn.classList.toggle("active", isRepeat);

    showToast(
        isRepeat ? "Repeat enabled" : "Repeat disabled"
    );

});


// ==============PROGRESS BAR=================

audio.addEventListener("timeupdate", () => {

    if (!Number.isFinite(audio.duration)) return;

    const percentage =
        (audio.currentTime / audio.duration) * 100;

    progress.value = percentage;

    currentTime.textContent = formatTime(audio.currentTime);

    duration.textContent = formatTime(audio.duration);

});

progress.addEventListener("input", () => {

    if (Number.isFinite(audio.duration)) {

        audio.currentTime =
            (progress.value / 100) * audio.duration;

    }

});

audio.addEventListener("loadedmetadata", () => {

    duration.textContent = formatTime(audio.duration);

    currentTime.textContent = "0:00";

    progress.value = 0;

});


// ============VOLUME CONTROL====================

audio.volume = Number(volume.value);

volume.addEventListener("input", () => {

    audio.volume = Number(volume.value);

});


// ==============FAVOURITES==================

function saveFavourites() {

    localStorage.setItem(
        "altronFavourites",
        JSON.stringify(favourites)
    );

}

function toggleFavourite(songId) {

    const index = favourites.indexOf(songId);

    if (index === -1) {

        favourites.push(songId);

        showToast("Added to favourites ♥");

    } else {

        favourites.splice(index, 1);

        showToast("Removed from favourites");

    }

    saveFavourites();

    displaySongs(getFilteredSongs());

    displayFavourites();

    updatePlayerLike();

}


// Favourite button inside track list
trackList.addEventListener("click", (event) => {

    const button = event.target.closest(".track-like");

    if (!button) return;

    const songId = Number(button.dataset.like);

    toggleFavourite(songId);

});


// ==============PLAYER FAVOURITE BUTTON==========

function updatePlayerLike() {

    if (currentSongIndex === -1) {
        playerLike.textContent = "♡";
        playerLike.classList.remove("liked");
        return;
    }

    const songId = songs[currentSongIndex].id;

    const liked = favourites.includes(songId);

    playerLike.textContent = liked ? "♥" : "♡";

    playerLike.classList.toggle("liked", liked);

}

playerLike.addEventListener("click", () => {

    if (currentSongIndex === -1) {
        showToast("Choose a song first");
        return;
    }

    toggleFavourite(songs[currentSongIndex].id);

});


// ===========DISPLAY FAVOURITES===================

function displayFavourites() {

    favouriteStrip.innerHTML = "";

    const favouriteSongs = songs.filter(song =>
        favourites.includes(song.id)
    );

    if (favouriteSongs.length === 0) {

        favouriteStrip.innerHTML = `
            <span class="empty-faves">
                Tap the ♡ beside a track to save it here.
            </span>
        `;

        return;
    }

    favouriteSongs.forEach(song => {

        const card = document.createElement("div");

        card.className = "favourite-card";

        card.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <strong>${song.title}</strong>
            <small>${song.artist}</small>
        `;

        card.addEventListener("click", () => {

            const index = songs.findIndex(
                item => item.id === song.id
            );

            playSong(index);

        });

        favouriteStrip.appendChild(card);

    });

}


// =============FILTER SONGS===================

function getFilteredSongs() {

    const searchText = searchInput.value
        .trim()
        .toLowerCase();

    return songs.filter(song => {

        const matchesCategory =
            currentFilter === "all" ||
            song.category === currentFilter;

        const matchesSearch =
            song.title.toLowerCase().includes(searchText) ||
            song.artist.toLowerCase().includes(searchText) ||
            song.album.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;

    });

}

function applyFilters() {

    displaySongs(getFilteredSongs());

}


// Search input
searchInput.addEventListener("input", applyFilters);


// Filter buttons
document.querySelectorAll(".filter-btn").forEach(button => {

    button.addEventListener("click", () => {

        currentFilter = button.dataset.filter;

        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        applyFilters();

    });

});


// Mood cards
document.querySelectorAll(".mood-card").forEach(button => {

    button.addEventListener("click", () => {

        currentFilter = button.dataset.filter;

        document.querySelectorAll(".filter-btn").forEach(btn => {

            btn.classList.toggle(
                "active",
                btn.dataset.filter === currentFilter
            );

        });

        applyFilters();

        document.getElementById("tracks").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ===========CREATE PLAYLIST=====================

const addPlaylistBtn = document.getElementById("addPlaylist");

addPlaylistBtn.addEventListener("click", () => {

    const playlistName = prompt("Enter your playlist name:");

    if (!playlistName || !playlistName.trim()) {
        return;
    }

    const link = document.createElement("a");

    link.href = "#library";

    link.textContent = "♫   " + playlistName.trim();

    document.querySelector(".playlist-links").appendChild(link);

    showToast(`Playlist "${playlistName}" created`);

});


// ===========UPGRADE BUTTON=================

document.getElementById("premiumBtn").addEventListener("click", () => {

    showToast("Premium features coming soon!");

});


// ==========INITIALIZE APP==============

displaySongs();

displayFavourites();

updatePlayerLike();
