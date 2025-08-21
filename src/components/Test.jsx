import React, { useEffect } from 'react';

const Test = () => {
  useEffect(() => {
    const existingScript = document.getElementById("meddy-review-script");

    if (!existingScript) {
      const sc = document.createElement("script");
      sc.setAttribute("defer", true);
      sc.setAttribute("src", "https://dbwx2z9xa7qt9.cloudfront.net/bundle.js?cachebust=1754467080840");
      sc.setAttribute("theme", "light");
      sc.setAttribute("footer", "false");
      sc.setAttribute("widget-type", "carousel");
      sc.setAttribute("token", "687a20a3a7ee08492b66abfc");
      sc.setAttribute("apiurl", "https://server.onlinereviews.tech/api/v0.0.9");
      sc.setAttribute("stats", "true");
      sc.setAttribute("addReview", "true");
      sc.setAttribute("profile-pic", "true");
      sc.setAttribute("review-name", "true");
      sc.setAttribute("positive-stars", "false");
      sc.setAttribute("wl", "true");
      sc.setAttribute("wlndig", "https://go.meddyreviews.com/dr-vijay-anand-reddy");
      sc.setAttribute("lang", "us");
      sc.setAttribute("brandStyle", "%7B%22sidebar_background%22%3A%22%236CD79E%22%2C%22sidebar_text%22%3A%22black%22%2C%22brand_button_text_color%22%3A%22white%22%2C%22brand_main_color%22%3A%22%23676767%22%2C%22brand_button_border_radius%22%3A%2216px%22%2C%22brand_sidebar_text_color_opacity%22%3A%22%230000001a%22%2C%22brand_button_hover%22%3A%22rgb(118%2C%20118%2C%20118)%22%2C%22brand_button_active%22%3A%22rgb(88%2C%2088%2C%2088)%22%2C%22brand_main_color_opacity%22%3A%22%236767671a%22%2C%22brand_font%22%3A%22Montserrat%22%2C%22star_color%22%3A%22%23128c7e%22%2C%22brand_main_background%22%3A%22%23FBF8F6%22%2C%22brand_card_background%22%3A%22white%22%2C%22poweredByLink%22%3A%22https%3A%2F%2Fmeddyreviews.com%22%2C%22poweredicon%22%3A%22https%3A%2F%2Frecensioni-io-static-folder.s3.eu-central-1.amazonaws.com%2Fpublic_onlinereviews%2Fapp.meddyreviews.com%2Ftopbar.png%22%7D");

      sc.id = "meddy-review-script";
      document.getElementById("wid_1754467080840").appendChild(sc);
    }
  }, []);

  return <div id="wid_1754467080840" className="my-10" />;
};

export default Test;