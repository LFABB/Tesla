const reception = document.getElementById("reception");

const Cloner = (x, y) => { let clone = x.cloneNode(true); clone.id = y; document.getElementById("controller").appendChild(clone); };

Cloner(reception, "info");
document.getElementById("info").querySelector("img").src = "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop-US.png";
document.getElementById("info").querySelector("div").classList.remove("text-center", "h-full", "w-full");
document.getElementById("info").querySelector("div p").remove(); document.getElementById("info").querySelector("div button").remove();
document.getElementById("info").querySelector("div h2").classList.add("absolute","top-[1vw]", "left-[43vw]"); document.getElementById("info").querySelector("div h2").innerHTML = "Ahorrativos";

Cloner(reception, "morely");
document.getElementById("morely").querySelector("img").remove();
document.getElementById("morely").querySelector("div").classList.remove("text-center", "top-[8vw]");
document.getElementById("morely").querySelector("div p").remove(); document.getElementById("morely").querySelector("div button").remove(); document.getElementById("morely").querySelector("div h2").remove();
document.getElementById("morely").querySelector("div").appendChild(document.createElement("video"));
document.getElementById("morely").querySelector("video").preload = "auto";
document.getElementById("morely").querySelector("video").autoplay = true;
document.getElementById("morely").querySelector("video").loop = true;
document.getElementById("morely").querySelector("video").playsInline = true;
document.getElementById("morely").querySelector("video").muted = true;
document.getElementById("morely").querySelector("video").src = "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Homepage-We-Are-Tesla-Desktop.mp4";
document.getElementById("morely").querySelector("video").poster = "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-We-Are-Tesla-Desktop-Poster.png";
document.getElementById("morely").querySelector("video").type = "video/mp4";
document.getElementById("morely").querySelector("video").classList.add("w-full", "h-full", "object-cover");
document.getElementById("morely").querySelector("div").appendChild(document.createElement("a")).id = "first"; document.getElementById("morely").querySelector("div").appendChild(document.createElement("a")).id = "second";
document.getElementById("morely").querySelector("div").querySelector("#first").innerHTML = "Ver mas"; document.getElementById("morely").querySelector("div").querySelector("#first").classList.add("right-[2vw]");
document.getElementById("morely").querySelector("div").querySelector("#second").innerHTML = "Contacto"; document.getElementById("morely").querySelector("div").querySelector("#second").classList.add("right-[11.5vw]");
document.getElementById("morely").querySelector("div").querySelector("#first").setAttribute("href", "javascript:alert('Esto es una demo...')");
document.getElementById("morely").querySelector("div").querySelector("#second").setAttribute("href", "mailto:lucas21mayo@gmail.com");
document.getElementById("morely").querySelector("div").querySelectorAll("a").forEach(x =>{x.classList.add("absolute", "bottom-[10vw]","text-2xl", "rounded", "p-1", "border-[3px]", "border-white", "hover:text-black", "hover:bg-white", "duration-300")}); 
