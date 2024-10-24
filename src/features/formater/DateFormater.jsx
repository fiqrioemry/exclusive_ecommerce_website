const DateFormater = (value) => {
  console.log("formater", value);
  return new Date(value).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export default DateFormater;
