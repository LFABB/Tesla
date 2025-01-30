const reception = document.getElementById("reception");

const Cloner = (x, y) => { let clone = x.cloneNode(true); clone.id = y; document.getElementById("controller").appendChild(clone); };

Cloner(reception, "info");
document.getElementById("info").querySelector("img").src = "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop-US.png";

Cloner(reception, "morely");
document.getElementById("morely").querySelector("img").remove();
document.getElementById("morely").appendChild(document.createElement("video"));
document.getElementById("morely").querySelector("video").preload = "auto";
document.getElementById("morely").querySelector("video").autoplay = true;
document.getElementById("morely").querySelector("video").loop = true;
document.getElementById("morely").querySelector("video").playsInline = true;
document.getElementById("morely").querySelector("video").muted = true;
document.getElementById("morely").querySelector("video").src = "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Homepage-We-Are-Tesla-Desktop.mp4";
document.getElementById("morely").querySelector("video").poster = "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-We-Are-Tesla-Desktop-Poster.png";
document.getElementById("morely").querySelector("video").type = "video/mp4";
document.getElementById("morely").querySelector("video").classList.add("w-full", "h-full", "object-cover");