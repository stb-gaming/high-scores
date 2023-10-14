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
      optionstype: datalist
      collection: players
    score:
      type: number
    mode:
      label: Mode
      type: text
    level:
      label: Level
      type: text
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
    # upload:
    #   label: Media Upload
    #   type: file
    #   id: media_upload
    media:
      label: Media
      description: "Url to image,video,youtube,twitch,vimeo,odessee,peertube"
      type: url
      id: media_url
---
<p>welcome</p>
<script>

  document.addEventListener("DOMContentLoaded", () => {
    const mediaUpload = document.getElementById("media_upload")
      const mediaUrlInput = document.getElementById('media_url');
    console.log(mediaUpload);
    mediaUpload.addEventListener("input", () => {

      const file = mediaUpload.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        const base64String = e.target.result;
        mediaUrlInput.value = base64String;
        updateUrlFromField(mediaUrlInput);
      };

      reader.readAsDataURL(file);

    })
  })
</script>