const createNotices = () => {
  let list = [];

  const subscribe = (notice) => {
    list.push(...notice);
  };

  const showList = (numberToShow = list.length) => {
    console.log(`Total de Noticias: ${numberToShow}`);
    list.forEach((notice, index) => {
      const currentIndex = index + 1;
      
      if(currentIndex > numberToShow) return;
      
      console.log(notice);
    });
  };

  return {
    list,
    showList,
    subscribe,
  };
};

const notices = createNotices();

notices.subscribe([
  "1) Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora aperiam, nisi ullam quaerat illum, officiis in perferendis hic odit rem totam saepe repellat optio voluptas velit numquam iure veniam",
  "2) Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora aperiam, nisi ullam quaerat illum, officiis in perferendis hic odit rem totam saepe repellat optio voluptas velit numquam iure veniam",
  "3) Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora aperiam, nisi ullam quaerat illum, officiis in perferendis hic odit rem totam saepe repellat optio voluptas velit numquam iure veniam",
]);

notices.showList(2);
