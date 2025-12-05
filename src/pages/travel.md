---
description: Interactive map showing places Karthik Kadambi has visited around the world.
keywords: travel, map, Karthik Kadambi, journeys, destinations, world travel, travel map, places visited, continents, states, interactive
title: My Travel map | Places I've explored worldwide
---

<section class="section-inset">
    <h1 class="header-branding">🌍 My Travel Map</h1>
    <p>The world is a book and those who do not travel read only one page.</p>
</section>
<h2 class="header-branding">Explore My Journeys</h2>
<a href="#after-map" class="skip-map">Skip interactive map</a>
<div id="map" 
     style="height: 600px; border-radius: 8px;"
     data-travel-locations='{{ travel | dump | safe }}'></div>
{# <div id="after-map" tabindex="-1"></div> #}
<form>
    <h3 class="header-branding">Filter by Continent or State</h3>
    <label for="continentFilter">Continent Filter:</label>
    <select id="continentFilter">
        <option value="all">All Continents</option>
    </select>
    <label for="stateFilter">State Filter:</label>
    <select id="stateFilter">
        <option value="all">All States</option>
    </select>
</form>

<h3 class="header-branding">Itineraries</h3>

<p>All itineraries below are from my personal travels. Each journey has been carefully documented with detailed day-by-day plans, costs, packing lists, number of people and insider tips based on my firsthand experiences exploring these incredible destinations.</p>

<h4>From San Jose, CA</h4>
<ul>
    <li><a href="/itineraries/alaska-winter/">View Alaska Winter Adventure Itinerary</a></li>
    <li><a href="/itineraries/las-vegas/">View Las Vegas Trip Itinerary</a></li>
</ul>

<script src="/assets/js/leaflet.js" defer></script>
<script src="/assets/js/travel.js" defer></script>
<link rel="stylesheet" href="/assets/css/leaflet.css"/>
<link rel="stylesheet" href="/assets/css/leaflet-a11y.css"/>