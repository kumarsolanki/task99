import holdmybeer from '../../data-json/hold-my-beer.json';
const initialState = {
    posts: [],
    isUpVoted: false,
    idDownVoted: false,
    selectedPost: {},
    isSorted: false,
};

const FetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD':
            return {
                ...state,
                posts: holdmybeer.data.children,
                action: action.type,
            };
        case 'UPCOMMENT':
            let previousState = state;
            let selectedDPost = action.payload;
            previousState.posts.forEach(post => {
                if (post.data.id === selectedDPost) {
                    post.data.ups = post.data.ups + 1;
                }
            });
            return {
                ...state,
                posts: previousState.posts,
                action: action.type,
                isUpVoted: !state.isUpVoted
            };
        case 'DOWNCOMMENT':
            let previousStateForDownVote = state;
            let selectedDPostForDownVote = action.payload;
            previousStateForDownVote.posts.forEach(post => {
                if (post.data.id === selectedDPostForDownVote) {
                    post.data.ups = post.data.ups - 1;
                }
            });
            return {
                ...state,
                posts: previousStateForDownVote.posts,
                idDownVoted: !state.idDownVoted,
                action: action.type,
            };
        case 'SELECTED_POST':
            let selectedPostForPop;
            state.posts.forEach(post => {
                if (post.data.id === action.payload) {
                    selectedPostForPop = post.data;
                }
            });
            return {
                ...state,
                selectedDPost: selectedPostForPop,
                action: action.type,
            };
        case 'SORT_POST':
            let sortBySelection = action.payload;
            if (sortBySelection === 'top') {
                state.posts.sort((a, b) => { return b.data.ups - a.data.ups });
            } else if (sortBySelection === 'hot') {
                state.posts.sort((a, b) => { return b.data.num_comments - a.data.num_comments });
            } else if (sortBySelection === 'new') {
                state.posts.sort((a, b) => { let dateA = new Date(a.data.created_utc), dateB = new Date(b.data.created_utc); return dateB - dateA; });
            }
            return {
                ...state,
                isSorted: !state.isSorted,
                action: action.type,
            };
        default:
            return { ...state, action: '' };
    }
};

export default FetchReducer;
