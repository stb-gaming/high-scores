---
title: Submit High Score
game: all-games
form:
  collection: scores
  fields:
    game:
      collection: games
    author:
      label: Player
      type: text
    score:
      type: number
    date:
      type: date
    platform:
      label: Platform
      options:
      - PC
      - Mobile
      - TV
      - Games Console
      - Other
    method:
      label: Method
      options:
      - Vanilla
      - Userscript
      - Portal
      - Client
    media:
      label: Media
      description: "Url to image,video,youtube,twitch,vimeo,odessee,peertube"
      type: url
---
