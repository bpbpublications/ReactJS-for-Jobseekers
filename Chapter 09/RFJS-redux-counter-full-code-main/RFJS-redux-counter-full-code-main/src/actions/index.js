export const updateLikeCount = (value) => {
    return {
      type: "UPDATE_LIKES_COUNT",
      updateByValue: value
    }
}

export const updateDislikeCount = (value) => {
    return {
      type: "UPDATE_DISLIKES_COUNT",
      updateByValue: value
    }
}