import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "categories",
  initialState: {
    categories: [
      {
        subreddit: "r/politics",
        profileImage: "https://styles.redditmedia.com/t5_2cneq/styles/communityIcon_fy84mdgh75201.jpg?width=256&format=pjpg&v=enabled&s=0c2677bba9cad8197049fc052cfc803f644fc31d",
        category: "News and Politics",
      },
      {
        subreddit: "r/technology",
        profileImage: "https://b.thumbs.redditmedia.com/J_fCwTYJkoM-way-eaOHv8AOHoF_jNXNqOvPrQ7bINY.png",
        category: "Technology",
      },
      {
        subreddit: "r/science",
        profileImage: "https://styles.redditmedia.com/t5_mouw/styles/communityIcon_xtjipkhhefi41.png?width=256&v=enabled&s=50e89a45dfa23c726e4e393c42a7ad03357a2f7b",
        category: "Science",
      },
      {
        subreddit: "r/gaming",
        profileImage: "https://styles.redditmedia.com/t5_2qh03/styles/communityIcon_1isvxgkk7hw51.png",
        category: "Gaming",
      },
      {
        subreddit: "r/movies",
        profileImage: "https://styles.redditmedia.com/t5_2qh3s/styles/communityIcon_yq9ah8eniar81.jpg?format=pjpg&s=6b1c89349dfd155ccc867879871911db55c86760",
        category: "Movies and TV shows",
      },
      {
        subreddit: "r/music",
        profileImage: "https://b.thumbs.redditmedia.com/UO8Hj8ZnQmYGeE9ZIjKPQEwlX46OBPC_kj2Jqlt5nqo.png",
        category: "Music",
      },
      {
        subreddit: "r/books",
        profileImage: "https://styles.redditmedia.com/t5_2qh4i/styles/communityIcon_d77x0sszups01.png?width=256&v=enabled&s=9a9896cc2e4c96e768f4ab3ce4a8e0e00c9535e1",
        category: "Books",
      },
      {
        subreddit: "r/sports",
        profileImage: "https://styles.redditmedia.com/t5_2qgzy/styles/communityIcon_rvt3zjh1fc551.png?width=256&v=enabled&s=bf9f1d8884e1e600cd99dbc03d02ed9c71d9efef",
        category: "Sports",
      },
      {
        subreddit: "r/fitness",
        profileImage: "https://b.thumbs.redditmedia.com/Ted4KOMuRbaCYlDS55cTqjpVVZ2ENHKtYFbBFjI1i2o.png",
        category: "Fitness and Health",
      },
      {
        subreddit: "r/food",
        profileImage: "https://a.thumbs.redditmedia.com/bDWcvO6mkX1TIcTnrO-N-5QJPUaWaq6nnQFel3kywD8.png",
        category: "Food and Cooking",
      },
      {
        subreddit: "r/travel",
        profileImage: "https://styles.redditmedia.com/t5_2qh41/styles/communityIcon_x4pa3xf5z4d11.jpg?format=pjpg&s=2c3e7079e3a255a8ec024e8b3e72184bf9e8ac46",
        category: "Travel",
      },
      {
        subreddit: "r/FashionReps",
        profileImage: "https://styles.redditmedia.com/t5_31hcv/styles/communityIcon_6irwzodk50c31.png",
        category: "Fashion and Style",
      },
      {
        subreddit: "r/DIY",
        profileImage: "https://styles.redditmedia.com/t5_2qh7d/styles/communityIcon_mcc4gmbv1tl11.png",
        category: "DIY and Crafts",
      },
      {
        subreddit: "r/photography",
        profileImage: "https://styles.redditmedia.com/t5_2qh2a/styles/communityIcon_81jag4glzan31.jpg?format=pjpg&s=cbd0d862f37bced175700eabc5906474cb969eaa",
        category: "Photography",
      },
      {
        subreddit: "r/writing",
        profileImage: "https://styles.redditmedia.com/t5_2s3nb/styles/communityIcon_2iquajxvyd3b1.jpg?format=pjpg&s=da16efb9f47e77935b09fd9a49ea17a121a5349e",
        category: "Writing and Literature",
      },
    ],
    selectedCategory: {},
  },
  reducers: {
    addSelectedCategory: (state, action) => {
      const index = action.payload;
      state.selectedCategory = state.categories[index];
    },
  }
};

const categoriesSlice = createSlice(options);

// selectors:
export const selecteCategories = state => state.categories.categories;

// exports:
export const { addSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;