const fakeAPI = {
  recipes: {
    async list() {
      return Promise.resolve({
        data: [
          {
            id: '1',
            image: 'https://reactnative.dev/img/tiny_logo.png',
            title: 'test 1',
            description:
              'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
            created_at: new Date().toISOString(),
            author: {
              id: '1',
              first_name: 'Anonim',
              last_name: 'Gal',
            },
            comments: [
              {
                id: '1',
                author: {
                  id: '1',
                  first_name: 'Anonim',
                  last_name: 'Gal',
                },
                content: 'eloszka',
                created_at: new Date().toISOString(),
              },
              {
                id: '2',
                author: {
                  id: '2',
                  first_name: 'Anonim2',
                  last_name: null,
                },
                content: 'eloszka2',
                created_at: new Date().toISOString(),
              },
              {
                id: '3',
                author: {
                  id: '3',
                  first_name: 'Anonim3',
                  last_name: 'Gal3',
                },
                content: 'eloszka3',
                created_at: new Date().toISOString(),
              },
            ],
          },
          {
            id: '2',
            image: 'https://reactnative.dev/img/tiny_logo.png',
            title: 'test 2',
            description:
              'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
            created_at: new Date().toISOString(),
            author: {
              id: '3',
              first_name: 'Anonim3',
              last_name: 'Gal3',
            },
            comments: [],
          },
          {
            id: '3',
            image: 'https://reactnative.dev/img/tiny_logo.png',
            title: 'test 3',
            description:
              'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
            created_at: new Date().toISOString(),
            author: {
              id: '1',
              first_name: 'Anonim',
              last_name: 'Gal',
            },
            comments: [],
          },
          {
            id: '4',
            image: 'https://reactnative.dev/img/tiny_logo.png',
            title: 'test 4',
            description:
              'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
            created_at: new Date().toISOString(),
            author: {
              id: '1',
              first_name: 'Anonim',
              last_name: 'Gal',
            },
            comments: [],
          },
        ],
      });
    },
  },
};

export default fakeAPI;
