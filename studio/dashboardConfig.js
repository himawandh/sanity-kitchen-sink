export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3d5242bf6767871e6de168',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-v2byribg',
                  apiId: '2e27ec6f-221c-4039-ba14-b6e9fa3371af'
                },
                {
                  buildHookId: '5f3d5242715f8a945a3b5efc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-y28emd4z',
                  apiId: 'bd70c5f1-e68f-4bcc-82be-813d2c3db960'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/himawandh/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-y28emd4z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
