type Translations = Record<
  string,
  { label: string; params?: Record<string, string> }
>;

const translations: Translations = {
  layout: {
    label: "Шаблон (макет)",
    params: {
      grid: "Сетка",
      masonry: "Плиточная верстка",
    },
  },
  template: {
    label: "Карточка",
    params: {
      classic: "Классическая",
      hover: "Наведения",
    },
  },
  navigation: {
    label: "Навигация",
    params: {
      "load-more": "Кнопка 'Загрузить еще'",
      pagination: "Пагинация",
    },
  },
  columns: {
    label: "Колонок",
  },
  rows: {
    label: "Рядов",
  },
};

export default translations;
