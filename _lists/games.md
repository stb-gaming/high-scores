---
list:
  collection: games
  sort: title
---
Can't Decide?: [Spin a wheel](https://pickerwheel.com?choices={% for game in site.games %}{% unless forloop.first %},{% endunless %}{{game.title|replace:","," "|url_encode}}{%endfor%})