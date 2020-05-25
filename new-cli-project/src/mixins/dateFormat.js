export const dateFormat = {
  methods: {
    getDateAndTime(date) {
      if (date !== null) {
        let hour = date.getHours();
        let minute = date.getMinutes();
        let fullYear = `${date.getFullYear()}/${date.getMonth() +
          1}/${date.getDate()}`;
        return `${fullYear} ${hour} : ${minute}`;
      } else {
        return null;
      }
    },
  },
};
