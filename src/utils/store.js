const cards = [
    {
        id: 'card-1',
        title: 'Learning how to cook'
    },
    {
        id: 'card-2',
        title: 'Making Sandwich'
    },
    {
        id: 'card-3',
        title: 'Taking the trash out'
    }
];

const users = [
    {
        id: '1',
        name: 'Budi'
    }
]

const data = {
    lists: {
        'list-1': {
            id: 'list-1',
            title: 'Done',
            cards,
            users
        },

        // 'list-2': {
        //     id: 'list-2',
        //     title: 'Doing',
        //     cards: [
        //         {
        //             id: 'card-4',
        //             content: 'cloning trello'
        //         },
        //         {
        //             id: 'card-5',
        //             content: 'upload video to youtube'
        //         }
        //     ]
        // }
    },
    listIds: ['list-1']
}

export default data;