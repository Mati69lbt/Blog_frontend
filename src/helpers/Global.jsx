const Global = {
  url: "http://localhost:3900/api/",
  not_imagen:
    "data:image/jpeg;base64,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",
};

export default Global;
