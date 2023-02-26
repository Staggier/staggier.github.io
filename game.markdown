---
layout: game
title: Games
permalink: /games/
---

#### Over the years I've had the pleasure of developing a few games as school projects and I'm looking forward to developping more as a hobby or professionally if given the chance.
{: #game-page-header}

<ul id="game-list">
{%- for game in site.data.games.games -%}
<li>
<div class="gallery">
<img id="{{ game.title | replace: ' ', '-' | downcase }}-img" src="/assets/images/{{ game.title | remove: ' ' }}0.png" />
<button id="{{ game.title | replace: ' ', '-' | downcase }}-button" data-pics="{{ game.gallery }}" data-index="0" onclick="nextImageclick(this.id, this.dataset.pics, this.dataset.index)"> Next </button>
<div class="game-info">
<h2> {{ game.title }} </h2>
<h3> {{ game.date }} </h3>
<p> {{ game.description }} </p>
<p><a href="https://github.com/Staggier/{{ game.title | remove: ' ' }}/#readme"> Click here to visit the repo </a></p>
</div>
</div>
</li>
{%- endfor -%}
</ul>
