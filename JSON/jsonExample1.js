let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room
};

room.occupiedBy = meetup;

document.write( JSON.stringify(meetup, function replacer(key, value) {
    document.write(`${key}: ${value}</br>`);
    return (key == 'occupiedBy') ? undefined: value;
}));

/*
:             [object Object]
title:        Conference
participants: [object Object],[object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy:   [object Object]
{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
*/
