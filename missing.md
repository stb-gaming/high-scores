---
title: Missing Things
---

{% assign missing_players = site.emptyarr %}
{% assign missing_games = site.emptyarr %}
{% assign missing_modes = site.emptyarr %}
{% assign missing_levels = site.emptyarr %}
{% assign missing_services = site.emptyarr %}
{% assign missing_developers = site.emptyarr %}
{% assign missing_brands = site.emptyarr %}
{% assign missing_categories = site.emptyarr %}
{% for score in site.scores %}
{% if score.game %}
{% assign game = site.games | where:"slug", score.game | first %}
{% if game %}

{% if score.mode %}
{% unless game.modes contains score.mode %}
{% assign mode_name = score.game | append: " - " | append: score.mode %}
{% assign missing_modes = missing_modes | push:mode_name | sort %}
{% endunless %}
{% endif %}

{% if score.level %}
{% unless game.levels contains score.level %}
{% assign level_name = score.game | append: " - " | append: score.level %}
{% assign missing_levels = missing_levels | push:level_name | sort %}
{% endunless %}
{% endif %}

{% else %}
{% assign missing_games = missing_games | push:score.game | sort %}
{% assign mode_name = score.game | append: " - " | append: score.mode %}
{% assign missing_modes = missing_modes | push:mode_name | sort %}
{% assign level_name = score.game | append: " - " | append: score.level %}
{% assign missing_levels = missing_levels | push:level_name | sort %}
{% endif %}
{% endif %}
{% if score.author %}
{% assign player = site.players | where:"slug", score.author | first %}
{% unless player %}
{% assign missing_players = missing_players | push:score.author | sort %}
{% endunless %}
{% endif %}

{% endfor %}

{% for game in site.games %}
{% if game.service %}
{% assign service = site.services | where_exep:"service","game.service contains service.slug" | first %}
{% unless service %}
{% assign missing_services = missing_services | push:game.service | sort|uniq %}
{% endunless %}
{% endif %}
{% if game.brand %}
{% assign brand = site.brands | where:"slug", game.brand | first %}
{% unless brand %}
{% assign missing_brands = missing_brands | push:game.brand | sort|uniq %}
{% endunless %}
{% endif %}
{% if game.developer %}
{% assign developer = site.developers | where:"slug", game.developer | first %}
{% unless developer %}
{% assign missing_developers = missing_developers | push:game.developer | sort|uniq %}
{% endunless %}
{% endif %}
{% if game.category %}
{% assign category = site.categories | where:"slug", game.category | first %}
{% unless category %}
{% assign missing_categories = missing_categories | push:game.category | sort|uniq %}
{% endunless %}
{% endif %}
{% endfor %}

# Games

{% for game in missing_games %}
- {{game}}
{% endfor %}

# Players


{% for player in missing_players %}
- {{player}}
{% endfor %}

# Modes


{% for mode in missing_modes %}
- {{mode}}
{% endfor %}

# Levels

{% for level in missing_levels %}
- {{level}}
{% endfor %}

# Services

{% for service in missing_services %}
- {{service}}
{% endfor %}

# Developers

{% for dev in missing_developers %}
- {{dev}}
{% endfor %}

# Brands

{% for brand in missing_brands %}
- {{brand}}
{% endfor %}

# Category

{% for category in missing_categories %}
- {{category}}
{% endfor %}

# Game Data
{% assign important_keys = "title,developer,url,brand,splash,gameplay,date,archived,image,menu" | split :"," %}
{% for key in important_keys %}
{% for game in site.games %}
{% unless game[key] %}* Missing "{{key}}" in "{{game.slug }}"
{% endunless %}
{% endfor %}
{% endfor %}