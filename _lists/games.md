---
list:
  collection: games
  sort: title
---
Can't Decide?: [Spin a wheel](https://pickerwheel.com?choices={% for game in site.games %}{% unless forloop.first %},{% endunless %}{{game.title |replace:","," " |url_encode}}{%endfor%})

<strong>Filter:</strong> <a class="btn" href="/services">Service</a> <a class="btn" href="/developers">Developer</a> <a class="btn" href="/brands">Brand</a> <a class="btn" href="/categories">Category</a>