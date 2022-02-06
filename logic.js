window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

window.onload = () => {
    if (window.mobileAndTabletCheck()) {
        console.log("mobile");
        document.write(`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="style.css">
                <link rel="icon" href="./imgs/favicon.png">
                <title>Zachary Ratkiewicz</title>
            </head>
            <body>
                <div style="text-align: center; padding: 5%">
                    <img src="./imgs/pic.JPG" style="max-width: 80%;height:auto;" class="home-img">
                </div>
                <div style="text-align: center">
                    <h1 style="font-size: 8vw">
                        Zachary Ratkiewicz
                    </h1>
                    <h3 style="font-size: 5vw; text-align: center; top: 20%;">PORTFOLIO</span>
                </div>
                <br>
                <div style="text-align: center; padding: 1%;">
                    <a href="https://discord.com/oauth2/authorize?client_id=755524223820103803&permissions=124992&scope=bot"><img src="./imgs/minesweeper.png" style="max-width: 75%;height:auto;" class="project-ms-img"></a>
                </div>
                <div class="project-sb-item">
                    <a href="https://github.com/ratokoko/mc-spongebob-plugin"><img src="./imgs/spongebob_plugin.png" style="max-width: 80%;height:auto;" class="project-sb-img"></a>
                </div>
                <div class="title-container">
                    <h1 style="font-size: 6vw" class="title-container-title">
                        Contact
                    </h1>
                </div>
                <div style="display: grid; grid-template-columns: 45% 45%; margin: 2%;">
                    <div class="contact-fb-item">
                        <img src="./imgs/facebooklogo.png" style="max-width: 50%;height:auto;" class="contact-fb-img">
                    </div>
                    <div class="contact-fb-item">
                        <h1 style="font-size: 4vw" class="title-fb">
                            Facebook
                        </h1>
                        <h3 style="font-size: 2.5vw" class="subtitle-fb">
                            <a href="https://www.facebook.com/zach.ratso/">@zach.ratso</a>
                        </h3>
                    </div>
                    <div class="contact-gm-item">
                        <img src="./imgs/gmail.png" style="max-width: 50%;height:auto;" class="contact-gm-img">
                    </div>
                    <div class="contact-gm-item">
                        <h1 style="font-size: 4vw" class="title-gm">
                            Email
                        </h1>
                        <h3 style="font-size: 2.5vw" class="subtitle-gm">
                            <a href="mailto:zacharyratkiewicz@gmail.com">zacharyratkiewicz@gmail.com</a>
                        </h3>
                    </div>
                </div>
            <script src="logic.js"></script>
            </body>
        </html>`);
    } else {
        console.log("desktop");
        document.write(`<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="style.css">
                <link rel="icon" href="./imgs/favicon.png">
                <title>Zachary Ratkiewicz</title>
            </head>
            <body>
                <div class="home-container">
                    <div class="home-item">
                        <img src="./imgs/pic.JPG" style="max-width: 80%;height:auto;" class="home-img">
                    </div>
                    <div class="home-item">
                        <h1 style="font-size: 6vw" class="title">
                            Zachary Ratkiewicz
                        </h1>
                        <h3 style="font-size: 2vw" class="subtitle">PORTFOLIO</span>
                    </div>
                </div>
                <br>
                <div class="project-ms-container">
                    <div class="project-ms-item">
                        <h1 style="font-size: 6vw" class="title-ms">
                            MINESWEEPER
                        </h1>
                        <h3 style="font-size: 2vw" class="subtitle-ms">
                            DISCORD BOT
                        </h3>
                        <h5 style="font-size: 0.85vw" class="description-ms">
                            Want to play the classic game Minesweeper while talking with your friends? <a href="https://discord.com/oauth2/authorize?client_id=755524223820103803&permissions=124992&scope=bot">Invite</a> MINESWEEPER to your discord server!
                        </h5>
                    </div>
                    <div class="project-ms-item">
                        <img src="./imgs/minesweeper.png" style="max-width: 75%;height:auto;" class="project-ms-img">
                    </div>
                </div>
                <div class="project-sb-container">
                    <div class="project-sb-item">
                        <img src="./imgs/spongebob_plugin.png" style="max-width: 90%;height:auto;" class="project-sb-img">
                    </div>
                    <div class="project-sb-item">
                        <h1 style="font-size: 4vw" class="title-sb">
                            MCSpongeBobPlugin
                        </h1>
                        <h3 style="font-size: 2vw" class="subtitle-sb">
                            MINECRAFT PLUGIN
                        </h3>
                        <h5 style="font-size: 0.85vw" class="description-sb">
                            Spigot 1.16.5 Minecraft plugin which outputs frames of SpongeBob! Check out the <a href="https://github.com/ratokoko/mc-spongebob-plugin">repo!</a>
                        </h5>
                    </div>
                </div>
                <div class="title-container">
                    <h1 style="font-size: 6vw" class="title-container-title">
                        Contact
                    </h1>
                </div>
                <div class="contact-fb-container">
                    <div class="contact-fb-item">
                        <img src="./imgs/facebooklogo.png" style="max-width: 40%;height:auto;" class="contact-fb-img">
                    </div>
                    <div class="contact-fb-item">
                        <h1 style="font-size: 2.5vw" class="title-fb">
                            Facebook
                        </h1>
                        <h3 style="font-size: 1.5vw" class="subtitle-fb">
                            <a href="https://www.facebook.com/zach.ratso/">@zach.ratso</a>
                        </h3>
                    </div>
                    <div class="contact-gm-item">
                        <img src="./imgs/gmail.png" style="max-width: 40%;height:auto;" class="contact-gm-img">
                    </div>
                    <div class="contact-gm-item">
                        <h1 style="font-size: 2.5vw" class="title-gm">
                            Email
                        </h1>
                        <h3 style="font-size: 1.5vw" class="subtitle-gm">
                            <a href="mailto:zacharyratkiewicz@gmail.com">zacharyratkiewicz@gmail.com</a>
                        </h3>
                    </div>
                </div>
            <script src="logic.js"></script>
            </body>
        </html>`);
    }
};