---
title: Missing Things
---

{% assign missing_players = "" | split:"," %}
{% assign missing_games = "" | split:"," %}
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
{% endfor %}

# Games

{% for game in missing_games %}
- {{game}}
{% endfor %}

# Players


{% for player in missing_players %}
- {{player}}
{% endfor %}