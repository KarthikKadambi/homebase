---
description: Interactive map showing places Karthik Kadambi has visited around the world.
title: Travel Map | Places I've Explored Worldwide
---

<section class="section-inset">
    <h1 class="header-branding">🌍 My Travel Map</h1>
    <p>The world is a book and those who do not travel read only one page.</p>
</section>
<a href="#after-map" class="skip-map">Skip interactive map</a>
<div id="map" 
     style="height: 600px; border-radius: 8px;"
     data-travel-locations='{{ travel | dump | safe }}'></div>
{# <div id="after-map" tabindex="-1"></div> #}
<form>
    <label for="continentFilter">Continent:</label>
    <select id="continentFilter">
        <option value="all">All Continents</option>
    </select>
    <label for="stateFilter">State / Region:</label>
    <select id="stateFilter">
        <option value="all">All States</option>
    </select>
</form>

<script src="/assets/js/leaflet.js" defer></script>
<script src="/assets/js/travel.js" defer></script>
<link rel="stylesheet" href="/assets/css/leaflet.css"/>
<link rel="stylesheet" href="/assets/css/leaflet-a11y.css"/>