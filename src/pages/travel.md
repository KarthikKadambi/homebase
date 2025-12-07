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

<h3 class="header-branding">From San Jose, CA</h3>

<h4>2025</h4>
<ul>
    <li><a href="/itineraries/alaska-winter/">Alaska Winter Adventure Itinerary</a></li>
    <li><a href="/itineraries/crater-lake-shasta/">Crater Lake & Shasta Road Trip Itinerary</a></li>
    <li><a href="/itineraries/mammoth-tioga/">Mammoth Lakes & Tioga Pass Itinerary</a></li>
</ul>

<h4>2024</h4>
<ul>
    <li><a href="/itineraries/shasta/">Mount Shasta Winter Itinerary</a></li>
    <li><a href="/itineraries/santa-barbara/">Santa Barbara Weekend Itinerary</a></li>
    <li><a href="/itineraries/las-vegas/">Las Vegas Trip Itinerary</a></li>
    <li><a href="/itineraries/lake-tahoe/">Lake Tahoe Retreat Itinerary</a></li>
</ul>

<h4>2023</h4>
<ul>
    <li><a href="/itineraries/napa-sonoma/">Napa & Sonoma Wine Country Itinerary</a></li>
    <li><a href="/itineraries/los-angeles/">Los Angeles Getaway Itinerary</a></li>
</ul>

<h3 class="header-branding">From Bangalore, India</h3>

<h4>2019</h4>
<ul>
    <li><a href="/itineraries/thailand/">Thailand Adventure Itinerary</a></li>
</ul>

<h4>2017</h4>
<ul>
    <li><a href="/itineraries/dubai-abu-dhabi/">Dubai & Abu Dhabi</a></li>
</ul>

<h4>2015</h4>
<ul>
    <li><a href="/itineraries/kl-singapore/">Kuala Lumpur & Singapore</a></li>
</ul>

<script src="/assets/js/leaflet.js" defer></script>
<script src="/assets/js/travel.js" defer></script>
<link rel="stylesheet" href="/assets/css/leaflet.css"/>
<link rel="stylesheet" href="/assets/css/leaflet-a11y.css"/>