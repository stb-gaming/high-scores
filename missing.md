---
title: Missing Things
---

{% assign missing_players = "" | split:"," %}
{% assign missing_games = "" | split:"," %}
{% assign missing_modes = "" | split:"," %}
{% assign missing_levels = "" | split:"," %}
{% for score in site.scores %}
{% if score.game %}
{% assign game = site.games | where:"slug", score.game | first %}
{% unless game %}
{% assign missing_games = missing_games | push:score.game | sort %}
{% endunless %}
{% endif %}
{% if score.author %}
{% assign player = site.players | where:"slug", score.author | first %}
{% unless player %}
{% assign missing_players = missing_players | push:score.author | sort %}
{% endunless %}
{% endif %}
{% if score.mode %}
{% assign mode = site.modes | where:"slug", score.mode | first %}
{% unless mode %}
{% assign mode_name = score.game | append: " - " | append: score.mode %}
{% assign missing_modes = missing_modes | push:mode_name | sort %}
{% endunless %}
{% endif %}
{% if score.level %}
{% assign level = site.levels | where:"slug", score.level | first %}
{% unless level %}
{% assign level_name = score.game | append: " - " | append: score.level %}
{% assign missing_levels = missing_levels | push:level_name | sort %}
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