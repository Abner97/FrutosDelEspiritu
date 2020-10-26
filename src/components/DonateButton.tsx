import React from "react";

const DonateButton: React.FC = () => {
  return (
    <form action="https://www.paypal.com/donate" method="post" target="_blank">
      <input type="hidden" name="cmd" value="_donations" />
      <input type="hidden" name="business" value="pastorfabella@gmail.com" />
      <input
        type="hidden"
        name="item_name"
        value="Ministerio de Toque de Gracia"
      />
      <input type="hidden" name="currency_code" value="USD" />
      <input
        type="image"
        src="https://www.paypalobjects.com/es_XC/i/btn/btn_donateCC_LG.gif"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donar con el botón PayPal"
      />
      <img
        alt=""
        src="https://www.paypal.com/es_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  );
};

export default DonateButton;
