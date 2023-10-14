---
title: Submit High Score
game: all-games
form:
  collection: scores
  fields:
    game:
      collection: games
      required: true
    author:
      label: Player
      required: true
      type: text
      optionstype: datalist
      collection: players
    score:
      type: number
      required: true
    mode:
      label: Mode
      type: text
      optionstype: datalist
    level:
      description: If you are playing tetris, pick the level you started on
      label: Level
      type: text
      optionstype: datalist
    date:
      type: date
      required: true
    platform:
      required: true
      type: text
      optionstype: datalist
      options:
      - PC
      - Mobile
      - TV
      - Games Console
      - Other
    method:
      label: Method
      required: true
      description: if you are not sure, pick "Vanilla"
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
      required: true
      description: "Url to image,video,youtube,twitch,vimeo,odessee,peertube"
      type: url
      id: media_url
---
<p>welcome</p>

<script>

  document.addEventListener("DOMContentLoaded", () => {
    const mediaUpload = document.getElementById("media_upload")
      const mediaUrlInput = document.getElementById('media_url');
    // console.log(mediaUpload);
    mediaUpload?.addEventListener("input", () => {

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