const mapElement = document.getElementById('map');
const places = JSON.parse(mapElement.dataset.travelLocations);
const map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    detectRetina: true,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const continentFilter = document.getElementById('continentFilter');
const stateFilter = document.getElementById('stateFilter');

// 🗺️ Build unique continent list
const continents = [...new Set(places.map(p => p.continent))].sort();
continents.forEach(cont => {
    const opt = document.createElement('option');
    opt.value = cont;
    opt.textContent = cont;
    continentFilter.appendChild(opt);
});

// 🧭 Build state list (will be filtered dynamically)
function updateStateOptions(selectedContinent) {
    stateFilter.innerHTML = '<option value="all">All States / Regions</option>';
    const filtered = selectedContinent === 'all'
        ? places
        : places.filter(p => p.continent === selectedContinent);

    const states = [...new Set(filtered
        .map(p => p.state || p.country)
        .filter(Boolean)
    )].sort();

    states.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s;
        opt.textContent = s;
        stateFilter.appendChild(opt);
    });
}

updateStateOptions('all'); // initial

function updateMarkers() {
    const continent = continentFilter.value;
    const region = stateFilter.value;

    // Clear markers
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) map.removeLayer(layer);
    });

    // Filter & add markers
    const filtered = places.filter(p =>
        (continent === 'all' || p.continent === continent) &&
        (region === 'all' || p.state === region || p.country === region)
    );

    filtered.forEach(p => {
        const linkHTML = p.draft ? '' : `<br><a href="${p.post}" target="_blank">View Post</a>`;
        L.marker([p.lat, p.lng])
            .addTo(map)
            .bindPopup(`<strong>${p.name}</strong><br>${p.state || p.country || ''}${linkHTML}`);
    });

    // 🧭 Auto-zoom behavior
    if (region !== 'all') {
        // Zoom to selected state or country
        const regionPoints = places.filter(p =>
            p.state === region || p.country === region
        );

        if (regionPoints.length > 0) {
            const bounds = L.latLngBounds(regionPoints.map(p => [p.lat, p.lng]));
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    } else if (continent !== 'all') {
        // Zoom to continent
        if (continent === 'Asia') {
            map.setView([15, 90], 4);
        } else if (continent === 'North America') {
            map.setView([37, -95], 3);
        } else {
            const contPoints = places.filter(p => p.continent === continent);
            const bounds = L.latLngBounds(contPoints.map(p => [p.lat, p.lng]));
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    } else {
        // Global view
        map.setView([20, 0], 2);
    }
}

// 🌍 Handle continent change
continentFilter.addEventListener('change', e => {
    updateStateOptions(e.target.value);
    updateMarkers();
});

// 🏙️ Handle state change
stateFilter.addEventListener('change', updateMarkers);

// Run once on load
updateMarkers();

map.on('load', () => {
  document.querySelector('.leaflet-control-zoom-in')?.setAttribute('aria-label', 'Zoom in');
  document.querySelector('.leaflet-control-zoom-out')?.setAttribute('aria-label', 'Zoom out');
  document.querySelector('.leaflet-control-attribution')?.setAttribute('aria-hidden', 'true');
});

// Hide non-interactive map layers from screen readers
map.whenReady(() => {
  // Hide non-interactive panes from assistive tech
  const hiddenSelectors = [
    '.leaflet-tile-pane',
    '.leaflet-shadow-pane',
    '.leaflet-overlay-pane',
    '.leaflet-tooltip-pane'
  ];
  hiddenSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.setAttribute('aria-hidden', 'true');
      el.setAttribute('role', 'presentation');
    });
  });

  // 🧩 Fix for the failing element: markers
  document.querySelectorAll('img.leaflet-marker-icon').forEach(img => {
    img.setAttribute('alt', '');
    img.setAttribute('aria-hidden', 'true');
    img.removeAttribute('tabindex'); // prevent keyboard focus
    img.setAttribute('role', 'presentation');
  });

  // Label zoom buttons (optional a11y improvement)
  document.querySelector('.leaflet-control-zoom-in')?.setAttribute('aria-label', 'Zoom in');
  document.querySelector('.leaflet-control-zoom-out')?.setAttribute('aria-label', 'Zoom out');
});