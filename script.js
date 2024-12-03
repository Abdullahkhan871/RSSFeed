let headline = document.querySelector(".headline");
let cta = document.querySelector(".cta");

let url =
  "https://www.miamiherald.com/miami-com/things-to-do/?widgetName=rssfeed&widgetContentId=712015&getXmlFeed=true";

document.addEventListener("DOMContentLoaded", () => {
  handleRssFeed(url);
});

// Api Calling //

async function handleRssFeed(url) {
  try {
    let response = await fetch(url);
    let data = await response.text();
    const parser = new DOMParser(); // need to learn
    const xmlDoc = parser.parseFromString(data, "application/xml"); // need to learn

    const items = xmlDoc.querySelectorAll("item");

    const title = items[1].querySelector("title");
    const ctaLink = items[1].querySelector("guid");

    headline.textContent = title.textContent;

    linkVlv(ctaLink.textContent);
  } catch {
    console.log("wrong");
  }
}

// getting link value //

function linkVlv(link) {
  if (link) {
    cta.addEventListener("click", () => {
      cta.href = link;
    });
  } else {
    cta.textContent = "No link right Now";
  }
}

// how to identify JSON and XML APi's

// cta.addEventListener("click", () => {
//     if (link) {
//       cta.href = link;
//     } else {
//         console.log("ok");
//     //   show.innerHTML = "No link right Now";
//     }
//   });
