## Setting Up
First install Ruby Version Manager or Ruble 2.7.5 and then setup Ruby
```
rvm use
gem install bundle
bundle install
```


## Development
```
bundle exec jekyll server -w --config _config.yml,_config-dev.yml
```

## Production
```
bundle exec jekyll build
```
serve the contents of the `_site` folder
