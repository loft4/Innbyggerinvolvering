export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f71c8300727d0e215682d07',
                  title: 'Sanity Studio',
                  name: 'innbyggerinvolvering-studio-33kscbju',
                  apiId: '8f966279-3988-46c7-98bf-a6dc9b862fd3'
                },
                {
                  buildHookId: '5f71c830c2a68ed9c81645ed',
                  title: 'Blog Website',
                  name: 'innbyggerinvolvering-web',
                  apiId: '022e1cb1-876c-48c0-8d4a-6ab3f9881268'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/loft4/Innbyggerinvolvering',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://innbyggerinvolvering-web.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
