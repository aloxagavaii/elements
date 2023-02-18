const element = document.querySelector("select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
});

// Map

ymaps.ready(init);
function init() {
  let map = new ymaps.Map("map", {
    center: [48.872185073737896, 2.354223999999991],
    zoom: 15,
  });

  let placemark = new ymaps.Placemark(
    [48.872185073737896, 2.354223999999991],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "Subtract.svg",
      iconImageSize: [28, 40],
      iconImageOffset: [0, 0],
    }
  );
  map.geoObjects.add(placemark);
}

// form

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

const validation = new JustValidate("#form", {
  errorLabelStyle: {
    color: "#FF5C00",
  },
});

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Вы не ввели имя",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "минимум 2 буквы",
    },
    {
      rule: "maxLength",
      value: 13,
    },
  ])
  .addField("#tel", [
    {
      rule: "required",
      errorMessage: "Вы не ввели телефон",
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Boolean(Number(phone) && phone.length === 10);
      },
      errorMessage: "введите телефон полностью",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Вы не ввели e-mail",
    },
    {
      rule: "email",
      errorMessage: "Email неверный!",
    },
  ]);
