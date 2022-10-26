import { display } from "./display.js";
import { player } from "./player.js";

let displayClass;
let playerClass;

export function events() {
    function init(config = {}) {
        displayClass = (config.display) ? config.display : display();
        playerClass = (config.player) ? config.player : player();
    }

    function start() {
        createButtonAction();
        muteActionMod();
        createButtonCollapse();
        btnPlaylist();
        playlist();
        reload();
        search();
        clear();

    }

    function btnsMusics() {
        playMusic();
        addPlayMusic();
        addPlaylist();
        downloadMusic();
        removeMusic();
    }

    function btnsPlaylists() {
        playPlaylist();
        downloadPlaylist();
        editPlaylist();
        duplicatePlaylist();
        removePlaylist();
    }

    function btnsSeacrh() {
        btnsMusics();
    }

    function muteActionMod() {
        $('#volume-mute').click(function (e) {
            e.stopPropagation();
        });
    }

    function createButtonCollapse() {
        buttonCollapse("btn-video-collapse", "display-video", "collapseVideo");
        buttonCollapse("btn-list-collapse", "display-list", "list-collapse");
    }

    function createButtonAction() {
        buttonAction("music-name", "display-music-name");
        buttonAction("music-anime", "display-music-anime");
        buttonAction("music-season", "display-music-season");
        buttonAction("playlist", "display-playlist");
        buttonAction("btn-json-fast", "display-json-fast");
    }

    function buttonAction(btn = "", id = "") {
        $("#" + btn).click(function () {
            $("#musicbarNav").removeClass("show");
            displayClass.displayShowById(id);
        });
    }

    function buttonCollapse(btn = "", idDisplay = "", collapse = "") {
        $("#" + btn).click(function () {
            $("#" + collapse).show();
            displayClass.displayMainShowById(idDisplay);
        });
    }

    function btnPlaylist() {
        $("#new-playlist").click(function () {
            $("#musicbarNav").removeClass("show")
            displayClass.displayShowById("display-new-playlist");
            displayClass.showById("new-playlist-child");
            displayClass.hiddenById("finish-playlist-child");
        });
    }

    function playlist() {
        $("#btnSaveNewPlaylist").click(function () {
            if ($("#newPlaylistName").val() != "") {
                displayClass.hiddenById("new-playlist-child");
                displayClass.showById("finish-playlist-child");
                playerClass.newPlayList($("#newPlaylistName").val());
            }
        });
    }

    function actionUrl(url) {
        switch (url) {
            case "json":
                $("#btn-json-fast").click();
                break;
            case "music-name":
                $("#music-name").click();
                break;
            case "music-anime":
                $("#music-anime").click();
                break;
            case "music-season":
                $("#music-season").click();
                break;
            case "playlist":
                $("#playlist").click();
                break;
            case "new-playlist":
                $("#new-playlist").click();
                break;
            case "search":
                $("#btn-search").click();
                break;
            default:
                $("#music-name").click();
                break;
        }
    }

    function reload() {
        $("#reload").click(function () {
            $("#musicbarNav").removeClass("show");
            playerClass.reload();
        });
    }

    function search() {
        $("#btn-search").click(function () {
            $("#musicbarNav").removeClass("show");
            displayClass.displayShowById("display-search");
            playerClass.searchAction();
        });
    }

    function clear() {
        $("#btn-clear-data").click(function () {
            playerClass.clearData();
        });
    }

    function playMusic() {
        $(".playNow").click(function () {
            const id = this.id.split("-music-")[1];
            console.log(id);
        });
    }

    function addPlayMusic() {
        $(".addMusic").click(function () {
            const id = this.id.split("-add-music-")[1];
            console.log(id);
        });
    }

    function addPlaylist() {
        $(".playlistAdd").click(function () {
            const id = this.id.split("-playlist-music-")[1];
            console.log(id);
        });
    }
    function downloadMusic() {
        $(".downloadMusic").click(function () {
            const id = this.id.split("-down-music-")[1];
            console.log(id);
        });
    }
    function removeMusic() {
        $(".removeMusic").click(function () {
            const id = this.id.split("-remove-music-")[1];
            console.log(id);
        });
    }

    function playPlaylist() {
        $(".playlistNow").click(function () {
            const id = this.id.split("playlist-id-")[1];
            console.log(id);
        });
    }

    function downloadPlaylist() {
        $(".downPlaylist").click(function () {
            const id = this.id.split("playlist-down-")[1];
            console.log(id);
        });
    }
    function duplicatePlaylist() {
        $(".duplicatePlaylist").click(function () {
            const id = this.id.split("playlist-duplicate-")[1];
            console.log(id);
        });
    }
    function editPlaylist() {
        $(".editPlaylist").click(function () {
            const id = this.id.split("playlist-edit-")[1];
            console.log(id);
        });
    }
    function removePlaylist() {
        $(".removePlaylist").click(function () {
            const id = this.id.split("playlist-remove-")[1];
            console.log(id);
        });
    }

    return {
        init,
        start,
        actionUrl,
        reload,
        btnsMusics,
        btnsPlaylists,
        btnsSeacrh
    }
}