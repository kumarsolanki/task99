export const loadData = () => (
    {
        type: 'LOAD'
    });

export const updateUpComment = (data) => (
    {
        type: 'UPCOMMENT',
        payload: data
    });

export const updateDownComment = (data) => (
    {
        type: 'DOWNCOMMENT',
        payload: data
    });
export const getSelectedPost = (data) => (
    {
        type: 'SELECTED_POST',
        payload: data
    });
export const sortBySelection = (sortBySelection) => (
    {
        type: 'SORT_POST',
        payload: sortBySelection
    });

