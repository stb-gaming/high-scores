---
list:
  collection: games
  sort: title
---
Can't Decide?: [Spin a wheel](https://pickerwheel.com?choices={% for game in site.games %}{% unless forloop.first %},{% endunless %}{{game.title |replace:","," " |url_encode}}{%endfor%})

<strong>Filter:</strong> <a class="btn" href="{% include url.html url='/services' %}">Service</a> <a class="btn" href="{% include url.html url='/developers' %}">Developer</a> <a class="btn" href="{% include url.html url='/brands' %}">Brand</a> <a class="btn" href="{% include url.html url='/categories' %}">Category</a>