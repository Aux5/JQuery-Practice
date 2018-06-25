$(document).ready(function () {

            // Use jQuery to get a reference to `load-songs`

            const loadSongs = $("#load-songs")


            // Use jQuery to get a reference to `song-list`

            const songList = $("#song-list")

            loadSongs.on("click", (evt) => {

                        $.ajax("http://127.0.0.1:8080/songs.json")
                            .then(response => {
                                const $jsect = $("<section>")
                                $jsect.addClass("song")
                                $jsect.attr("id", "songs")
                                $jsect.appendTo("#song-list")
                                response.songs.forEach(element => {


                                    const $jh1 = $("<h1>")
                                    $jh1.text(element.title)
                                    $jh1.addClass("Song__title")
                                    $jh1.appendTo("#songs")

                                    const $jsect2 = $("<section>")
                                    $jsect2.text(`Performed by ${element.artist} on the album ${element.album}`)
                                    $jsect2.addClass("song__description")
                                    $jsect2.appendTo("#songs")

                                    console.log(response.songs)
                                })
                            })




                    })

                    /*
                        Chain a `.then()` method to the ajax call, and when
                        it is complete build a DOM component for each song with
                        the following structure. Use the jQuery append() method
                        to put an HTML representation of each song the DOM as a
                        child component of the .

                            <section class="song">
                                <h1 class="song__title">{Title of song}</h1>
                                <section class="song__description">
                                    Performed by {artist} on the album {album}
                                </section>
                            </section>
                */})