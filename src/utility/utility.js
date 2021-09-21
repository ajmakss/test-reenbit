const filterDate = (data, filterText) => data.toLowerCase().indexOf(filterText.toLowerCase()) > -1;

export const filterChatsBySearch = (obj, filterText) => {
    return obj.filter(i => {
        if (filterText.length !== 0) {
            let c = i.messages.filter(j => filterDate(j.messageText,filterText));
            let userNames = i.members.filter(m => filterDate(m.username, filterText));

            return (c.length + userNames.length)  > 0  ? true : false;
        } else {
            return obj
        }

    });
}

export const getCurrentMemember = (members, authId, users) => {
    let memberId = members.filter(m => m.userId !== authId)[0];
    let currentMember = users.filter(u => u.userId === memberId.userId)[0];

    return currentMember;
}