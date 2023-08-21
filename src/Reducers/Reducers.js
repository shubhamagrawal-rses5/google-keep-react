export const createNoteInitialState = {
  title: "",
  description: "",
  color: "white",
  imageSRC: null,
};

export function createNoteReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "CREATE_NOTE":
      return {
        ...state,
        ...payload,
      };
    default:
      console.error("Not Possible");
  }
}

export function noteReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_TITLE":
      return {
        ...state,
        title: payload.title,
      };

    case "UPDATE_DESCRIPTION":
      return {
        ...state,
        description: payload.description,
      };
    case "UPDATE_COLOR":
      return {
        ...state,
        color: payload.color,
      };

    case "UPDATE_IMAGE_SRC":
      return {
        ...state,
        imageSRC: payload.imageSRC,
      };
    default:
      console.error("Not Possible");
  }
}
