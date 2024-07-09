const KEY_CODES_ALLOWED = [65, 67, 68, 69, 81, 83, 87, 88, 90];
const KEY_MAP = {
  Q: "heater-1",
  W: "heater-2",
  E: "heater-3",
  A: "heater-4",
  S: "clap",
  D: "open-hh",
  Z: "kick-hat",
  X: "kick",
  C: "closed-hh",
};

function setButtonsListener() {
  $("button").on("click", function () {
    const id = $(this).attr("id");
    const childrenID = $(this).children("audio").attr("id").toUpperCase();
    const selector = getIDSelector(childrenID);

    $(selector)[0].play();

    $(getIDSelector("display")).text(id);
  });
}

function setKeysListener() {
  $(document).on("keydown", function (event) {
    const { keyCode, key } = event;

    if (KEY_CODES_ALLOWED.includes(keyCode)) {
      const selector = getIDSelector(KEY_MAP[key.toUpperCase()]);

      $(selector).addClass("elementActive");

      $(selector).trigger("click");

      setTimeout(function () {
        $(selector).removeClass("elementActive");
      }, 200);
    }
  });
}

function getIDSelector(id) {
  return `#${id}`;
}

$(document).ready(function () {
  setButtonsListener();
  setKeysListener();
});
