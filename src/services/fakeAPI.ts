const fakeAPI = {
  recipes: {
    async list() {
      return Promise.resolve({
        data: [
          {
            id: '1',
            image: 'https://reactnative.dev/img/tiny_logo.png',
            title: 'test 1',
            container:
              'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
            created_at: new Date().toISOString(),
            // comments: [
            //   {
            //     id: '1',
            //     author: {
            //       id: '1',
            //       first_name: 'Anonim',
            //       last_name: 'Gal',
            //     },
            //     content: 'eloszka',
            //     created_at: new Date().toISOString(),
            //   },
            // ],
          },
          {
            id: '2',
            image: 'https://reactnative.dev/img/tiny_logo.png',
            title: 'test 2',
            container:
              'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
            created_at: new Date().toISOString(),
          },
          {
            id: '3',
            image: 'https://reactnative.dev/img/tiny_logo.png',
            title: 'test 3',
            container:
              'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
            created_at: new Date().toISOString(),
          },
        ],
      });
    },
  },
};

export default fakeAPI;
